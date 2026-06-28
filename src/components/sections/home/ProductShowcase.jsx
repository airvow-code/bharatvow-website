import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AnimateIn from '@/components/common/AnimateIn';
import PhoneMockupScreen from '@/components/common/PhoneMockupScreen';
import { getProductShowcaseTools, PRODUCT_SHOWCASE } from '@/data/productShowcase';
import { HOME_ANCHORS } from '@/utils/anchors';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

const SWIPE_THRESHOLD = 48;

function ShowcasePhone({ tools, activeIndex, onSwipe, reducedMotion, aspectRatio }) {
  const touchStartX = useRef(null);
  const activeTool = tools[activeIndex];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    onSwipe(delta < 0 ? 1 : -1);
  };

  return (
    <div className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-[320px] xl:max-w-[340px]">
      <div
        className="relative touch-pan-y"
        style={{ aspectRatio }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {tools.map((tool, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={tool.id}
              className={cn(
                'absolute inset-0 transition-[opacity,transform] duration-500 ease-entrance motion-reduce:transition-none',
                isActive
                  ? 'z-10 opacity-100 motion-safe:scale-100'
                  : 'pointer-events-none z-0 opacity-0 motion-safe:scale-[0.98]',
              )}
              aria-hidden={!isActive}
            >
              <PhoneMockupScreen
                screen={tool.screen}
                priority={i === 0}
                frameClassName="shadow-xl ring-1 ring-black/5"
              />
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-center font-display text-lg font-bold text-heading lg:hidden">
        {activeTool?.name}
      </p>
      <p className="mt-2 text-center text-sm leading-relaxed text-muted lg:hidden">
        {activeTool?.description}
      </p>
      <p className="mt-3 text-center text-xs text-subtle lg:hidden">
        Swipe the phone to explore each Digital Tool
      </p>
    </div>
  );
}

function ToolListItem({ tool, active, locked, onEnter, onLeave, onSelect }) {
  const Icon = tool.icon;

  return (
    <button
      type="button"
      className={cn(
        'group flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 motion-reduce:transition-none',
        active
          ? 'border-primary-mid bg-primary-soft/50 shadow-sm ring-1 ring-primary/10'
          : 'border-border bg-white hover:border-primary-mid/60 hover:bg-canvas hover:shadow-sm',
        locked && active && 'ring-2 ring-primary/20',
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onSelect}
      aria-current={active ? 'true' : undefined}
    >
      <div
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300',
          active ? 'bg-primary text-white' : 'bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white',
        )}
      >
        <Icon size={20} strokeWidth={1.75} aria-hidden />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display text-[15px] font-semibold text-heading">{tool.name}</span>
          {tool.free && <Badge variant="free">Free</Badge>}
          {locked && active && (
            <span className="text-[11px] font-medium uppercase tracking-wide text-primary">Selected</span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">{tool.description}</p>
      </div>
    </button>
  );
}

export default function ProductShowcase() {
  const tools = useMemo(() => getProductShowcaseTools(), []);
  const reducedMotion = useReducedMotion();
  const [lockedIndex, setLockedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const desktopActiveIndex = hoverIndex ?? lockedIndex;
  const phoneIndex = isDesktop ? desktopActiveIndex : mobileIndex;

  const aspectRatio = tools[0]?.screen
    ? `${tools[0].screen.width} / ${tools[0].screen.height}`
    : '9 / 19.5';

  const handleSelect = useCallback((index) => {
    setLockedIndex(index);
    setMobileIndex(index);
  }, []);

  const handleSwipe = useCallback(
    (direction) => {
      setMobileIndex((current) => {
        const next = Math.min(Math.max(current + direction, 0), tools.length - 1);
        setLockedIndex(next);
        return next;
      });
    },
    [tools.length],
  );

  const { eyebrow, title, intro, cta } = PRODUCT_SHOWCASE;

  if (!tools.length) return null;

  return (
    <Section
      id={HOME_ANCHORS.screenshots}
      tone="default"
      className="bg-white"
      labelledBy="product-showcase-heading"
    >
      <SectionHeading
        id="product-showcase-heading"
        eyebrow={eyebrow}
        title={title}
        description={intro}
        align="left"
        className="mb-10 md:mb-12"
      />

      <AnimateIn>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-24">
            <ShowcasePhone
              tools={tools}
              activeIndex={phoneIndex}
              onSwipe={handleSwipe}
              reducedMotion={reducedMotion}
              aspectRatio={aspectRatio}
            />
          </div>

          <div className="min-w-0">
            <p className="mb-4 hidden font-display text-sm font-semibold uppercase tracking-wide text-muted lg:block">
              Digital Tools
            </p>
            <ul className="hidden max-h-[min(640px,calc(100vh-8rem))] space-y-2 overflow-y-auto pr-1 lg:block">
              {tools.map((tool, i) => (
                <li key={tool.id} className="list-none">
                  <ToolListItem
                    tool={tool}
                    active={i === desktopActiveIndex}
                    locked={lockedIndex === i && hoverIndex == null}
                    onEnter={() => setHoverIndex(i)}
                    onLeave={() => setHoverIndex(null)}
                    onSelect={() => handleSelect(i)}
                  />
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {tools.map((tool, i) => (
                <li key={tool.id} className="list-none shrink-0">
                  <button
                    type="button"
                    className={cn(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                      i === mobileIndex
                        ? 'border-primary bg-primary text-white'
                        : 'border-border bg-white text-muted',
                    )}
                    onClick={() => handleSelect(i)}
                  >
                    {tool.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={120} className="mt-12 flex justify-center md:mt-14">
        <Button to={cta.href} variant="outline" size="md" className="gap-2">
          {cta.label}
          <ArrowRight size={18} strokeWidth={2} aria-hidden />
        </Button>
      </AnimateIn>
    </Section>
  );
}
