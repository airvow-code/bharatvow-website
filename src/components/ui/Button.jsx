import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const variants = {
  primary:
    'rounded-full bg-secondary text-primary shadow-sm hover:bg-secondary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  secondary:
    'rounded-xl bg-primary text-white hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  outline:
    'rounded-xl border-2 border-primary bg-transparent text-primary hover:bg-primary-soft active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  ghost:
    'rounded-xl bg-transparent text-primary-light hover:text-primary hover:bg-primary-soft/60 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
};

const sizes = {
  lg: 'min-h-[52px] px-8 py-3 text-base font-semibold',
  md: 'min-h-[48px] px-6 py-2.5 text-[15px] font-semibold',
  sm: 'min-h-[44px] px-4 py-2 text-sm font-semibold',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  external,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-display transition-all duration-200 ease-entrance',
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const inactive = href === '#';
    return (
      <a
        href={href}
        className={classes}
        target={external && !inactive ? '_blank' : undefined}
        rel={external && !inactive ? 'noopener noreferrer' : undefined}
        aria-disabled={inactive || undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
