import { cn } from '@/utils/cn';

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) {
  const alignClass =
    align === 'center'
      ? 'mx-auto max-w-prose text-center'
      : align === 'left'
        ? 'max-w-2xl text-left'
        : 'ml-auto max-w-prose text-right';

  return (
    <div className={cn(alignClass, className)}>
      {eyebrow && (
        <p className="mb-3 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-balance font-display text-xl font-bold tracking-tight text-heading sm:text-2xl md:text-[2rem] md:leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </div>
  );
}
