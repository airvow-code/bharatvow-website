import { cn } from '@/utils/cn';

export default function PageHeader({ eyebrow, title, lead, leadClassName, sublead, subleadClassName, className }) {
  return (
    <header
      className={cn(
        'border-b border-border bg-gradient-to-b from-primary-soft/60 to-canvas py-12 md:py-16',
        className,
      )}
    >
      <div className="mx-auto max-w-prose px-4 md:px-6 lg:px-8">
        {eyebrow && (
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-heading md:text-4xl">
          {title}
        </h1>
        {lead && (
          <p
            className={cn(
              'mt-4 text-lg leading-relaxed text-muted',
              leadClassName,
            )}
          >
            {lead}
          </p>
        )}
        {sublead && (
          <p
            className={cn(
              subleadClassName ?? 'mt-4 text-base italic leading-relaxed text-muted',
            )}
          >
            {sublead}
          </p>
        )}
      </div>
    </header>
  );
}
