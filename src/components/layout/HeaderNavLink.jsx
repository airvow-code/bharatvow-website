import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { prefetchRoute } from '@/router/prefetch';
import { cn } from '@/utils/cn';

function HeaderNavLink({ to, label, active, onClick, className, mobile = false }) {
  const handlePrefetch = useCallback(() => {
    prefetchRoute(to);
  }, [to]);

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group relative font-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2',
        mobile
          ? cn(
              'min-h-[44px] rounded-xl px-4 py-3 text-base',
              active
                ? 'bg-primary-soft text-primary'
                : 'text-primary hover:bg-primary-soft/70',
            )
          : cn(
              'rounded-md px-1 py-2 text-[14px] xl:text-[15px]',
              active ? 'text-primary' : 'text-body hover:text-primary',
            ),
        className,
      )}
    >
      {label}
      {!mobile && (
        <span
          aria-hidden
          className={cn(
            'absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-primary transition-transform duration-200 ease-entrance',
            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
          )}
        />
      )}
    </Link>
  );
}

export default memo(HeaderNavLink);
