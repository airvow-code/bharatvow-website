import { cn } from '@/utils/cn';

const tones = {
  default: 'bg-canvas',
  surface: 'bg-surface',
  cream: 'bg-cream',
  navy: 'bg-primary text-white',
  inset: 'border-y border-border bg-surface',
};

/**
 * Consistent vertical rhythm sitewide (replaces ad-hoc py-16/py-20 mix).
 */
export default function Section({
  id,
  tone = 'default',
  className,
  containerClassName,
  children,
  as: Tag = 'section',
  labelledBy,
}) {
  return (
    <Tag
      id={id}
      className={cn('scroll-mt-20 py-section-y md:py-section-y-lg', tones[tone], className)}
      {...(labelledBy ? { 'aria-labelledby': labelledBy } : {})}
    >
      <div className={cn('mx-auto w-full min-w-0 max-w-container px-4 md:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
