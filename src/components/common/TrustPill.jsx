import { cn } from '@/utils/cn';

export default function TrustPill({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary-soft px-4 py-2 font-body text-[13px] font-semibold text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
