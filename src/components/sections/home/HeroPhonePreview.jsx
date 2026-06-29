import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PhoneMockupScreen from '@/components/common/PhoneMockupScreen';
import { getHeroScreens } from '@/data/screenshots';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

const ROTATE_MS = 3500;
const SWIPE_THRESHOLD_PX = 48;

export default function HeroPhonePreview({ className }) {
  const screens = useMemo(() => getHeroScreens(), []);
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = screens.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (reducedMotion || paused || total <= 1) return undefined;
    const id = setInterval(next, ROTATE_MS);
    return () => clearInterval(id);
  }, [next, reducedMotion, paused, total]);

  const active = screens[index];
  const sizeRef = screens[0];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX == null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    if (delta < 0) next();
    else prev();
  };

  return (
    <div className={cn('relative mx-auto w-full max-w-[300px] xl:max-w-[320px]', className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[90%] -translate-x-1/2 -translate-y-[45%] rounded-full bg-primary/10 blur-3xl"
      />

      <figure
        className={cn(
          'relative',
          !reducedMotion && 'animate-float motion-reduce:animate-none',
        )}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full">
          {/* Reserve mockup height — prevents layout shift between slides */}
          {sizeRef && (
            <div aria-hidden className="invisible pointer-events-none">
              <div className="overflow-hidden rounded-[2rem] border-[11px] border-primary-dark">
                <div
                  className="w-full bg-canvas"
                  style={{ aspectRatio: `${sizeRef.width} / ${sizeRef.height}` }}
                />
              </div>
            </div>
          )}

          {screens.map((screen, i) => (
            <div
              key={screen.id}
              className={cn(
                'absolute inset-0 transition-opacity duration-700 ease-entrance motion-reduce:transition-none',
                i === index ? 'z-10 opacity-100' : 'z-0 opacity-0',
              )}
              aria-hidden={i !== index}
            >
              <PhoneMockupScreen
                screen={screen}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <figcaption className="sr-only">{active.label}</figcaption>
      </figure>

      {total > 1 && (
        <div
          className="mt-5 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="App screen preview"
        >
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={screen.label}
                className={cn(
                  'inline-flex h-11 min-w-[44px] items-center justify-center rounded-full px-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2',
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-border-strong',
                )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
