import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

/**
 * Defers JS chunk load until the section nears the viewport.
 * Reserves min-height to limit CLS (Core Web Vitals).
 */
export default function LazySection({
  loader,
  minHeight = 320,
  fallbackLabel = 'Loading section',
  className,
}) {
  const { ref, inView } = useInView({ rootMargin: '400px 0px', threshold: 0 });
  const [Section, setSection] = useState(null);

  useEffect(() => {
    if (!inView || Section) return undefined;
    let cancelled = false;
    loader().then((mod) => {
      if (!cancelled) setSection(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [inView, Section, loader]);

  return (
    <div
      ref={ref}
      className={cn(!Section && 'contain-layout', className)}
      style={!Section ? { minHeight } : undefined}
      aria-busy={!Section}
    >
      {Section ? (
        <Section />
      ) : (
        <span className="sr-only">{fallbackLabel}</span>
      )}
    </div>
  );
}
