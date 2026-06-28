import { cn } from '@/utils/cn';

const variants = {
  free: 'bg-accent-green-soft text-accent-green-dark border border-accent-green/20',
  trial: 'bg-secondary-soft text-secondary-dark border border-secondary-border',
  trust: 'bg-primary-soft text-primary border border-primary/10',
  neutral: 'bg-surface-sunken text-muted border border-border',
};

export default function Badge({ children, variant = 'neutral', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
