import { cn } from '@/utils/cn';

const variants = {
  default: 'rounded-card border border-border bg-surface shadow-card',
  moment: 'rounded-card-lg border border-border bg-surface border-t-[3px] border-t-secondary',
  quote: 'rounded-card-lg border-l-4 border-l-secondary bg-surface',
  flat: 'rounded-xl border border-border bg-surface',
  free: 'rounded-card border border-accent-green/25 bg-accent-green-soft/50',
};

const hovers = {
  lift: 'transition-colors duration-200 hover:border-primary-mid motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
  none: '',
};

export default function SurfaceCard({
  variant = 'default',
  hover = 'none',
  className,
  children,
  as: Tag = 'article',
}) {
  return (
    <Tag className={cn(variants[variant], hovers[hover], className)}>
      {children}
    </Tag>
  );
}
