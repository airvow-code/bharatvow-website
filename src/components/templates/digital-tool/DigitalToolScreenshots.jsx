import { useCallback, useMemo, useRef, useState } from 'react';
import PhoneMockupScreen from '@/components/common/PhoneMockupScreen';
import AnimateIn from '@/components/common/AnimateIn';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';

const SWIPE_THRESHOLD = 48;

export default function DigitalToolScreenshots({ toolName, screens }) {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const items = useMemo(() => screens.filter(Boolean), [screens]);
  const active = items[activeIndex] ?? items[0];
  const aspectRatio = active?.screen?.width && active?.screen?.height
    ? `${active.screen.width} / ${active.screen.height}`
    : '9 / 19.5';

  const goTo = useCallback(
    (index) => {
      if (items.length === 0) return;
      setActiveIndex((index + items.length) % items.length);
    },
    [items.length],
  );

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(activeIndex + (delta < 0 ? 1 : -1));
  };

  if (items.length === 0) return null;

  const title = resolveSectionHeading('See {toolName} inside BharatVow', toolName);

  return (
    <DigitalToolSection
      id="tool-screenshots"
      tone="inset"
      eyebrow="Screenshots"
      title={title}
      description="Real app screens — swipe or select a preview below."
      align="left"
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-start lg:gap-14">
        <AnimateIn className="order-2 lg:order-1">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item, i) => (
              <li key={`${item.id}-${item.label}`} className="list-none">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'min-h-[44px] w-full rounded-2xl border px-4 py-4 text-left transition-all duration-300 motion-reduce:transition-none',
                    i === activeIndex
                      ? 'border-primary-mid bg-primary-soft/50 shadow-sm ring-1 ring-primary/10'
                      : 'border-border bg-white hover:border-primary-mid/60 hover:bg-canvas',
                  )}
                  aria-current={i === activeIndex ? 'true' : undefined}
                >
                  <p className="font-display text-sm font-bold text-heading">{item.label}</p>
                  {item.caption && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.caption}</p>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </AnimateIn>

        <AnimateIn delay={80} className="order-1 mx-auto w-full max-w-[320px] lg:order-2 lg:mx-0">
          <div
            className="relative touch-pan-y"
            style={{ aspectRatio }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={`${item.id}-${item.label}-preview`}
                  className={cn(
                    'absolute inset-0 transition-[opacity,transform] duration-500 ease-entrance motion-reduce:transition-none',
                    isActive
                      ? 'z-10 opacity-100 motion-safe:scale-100'
                      : 'pointer-events-none z-0 opacity-0 motion-safe:scale-[0.98]',
                    reducedMotion && !isActive && 'hidden',
                  )}
                  aria-hidden={!isActive}
                >
                  <PhoneMockupScreen
                    screen={item.screen}
                    priority={i === 0}
                    frameClassName="shadow-xl ring-1 ring-black/5"
                  />
                </div>
              );
            })}
          </div>
          {active?.caption && (
            <p className="mt-4 text-center text-sm text-muted lg:text-left">{active.caption}</p>
          )}
          {items.length > 1 && (
            <p className="mt-2 text-center text-xs text-subtle lg:hidden">
              Swipe the phone to browse screenshots
            </p>
          )}
        </AnimateIn>
      </div>
    </DigitalToolSection>
  );
}
