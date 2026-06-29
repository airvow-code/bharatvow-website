import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export function AccordionItem({
  id,
  question,
  answer,
  icon: Icon,
  open,
  onToggle,
  className,
}) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-200 motion-safe:hover:shadow-md',
        open && 'border-primary-mid/50 shadow-md ring-1 ring-primary/5',
        className,
      )}
    >
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full min-h-[44px] items-start gap-3 rounded-2xl px-5 py-4 text-left transition-colors duration-200 hover:bg-canvas/60 md:gap-4 md:px-6 md:py-5"
          onClick={() => onToggle(id)}
        >
          {Icon && (
            <span
              className={cn(
                'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-200',
                open ? 'bg-primary text-white' : 'bg-primary-soft text-primary',
              )}
            >
              <Icon size={18} strokeWidth={1.75} aria-hidden />
            </span>
          )}
          <span className="min-w-0 flex-1">
            <span className="font-display text-[15px] font-semibold leading-snug text-heading md:text-base">
              {question}
            </span>
          </span>
          <ChevronDown
            size={20}
            strokeWidth={2}
            className={cn(
              'mt-0.5 shrink-0 text-muted transition-transform duration-300 motion-reduce:transition-none',
              open && 'rotate-180 text-primary',
            )}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-entrance motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-muted md:px-6 md:pb-6 md:pl-[5.5rem] md:text-[15px]">
            {answer}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Accordion({ items, openId, onToggle, className, itemClassName }) {
  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          open={openId === item.id}
          onToggle={onToggle}
          className={itemClassName}
        />
      ))}
    </div>
  );
}
