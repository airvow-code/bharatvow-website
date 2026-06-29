import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Breadcrumbs({ items, className }) {
  if (!items?.length || items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn('border-b border-border bg-surface/80', className)}>
      <ol className="mx-auto flex w-full max-w-container flex-wrap items-center gap-x-1 gap-y-1.5 px-4 py-3 text-sm md:px-6 lg:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 text-subtle"
                  aria-hidden
                />
              )}
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-1 font-medium text-primary-light transition-colors hover:text-primary"
                >
                  {isFirst && <Home size={14} strokeWidth={2} aria-hidden />}
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    'inline-flex items-center gap-1',
                    isLast ? 'font-medium text-heading' : 'text-muted',
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isFirst && !item.path && <Home size={14} strokeWidth={2} aria-hidden />}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
