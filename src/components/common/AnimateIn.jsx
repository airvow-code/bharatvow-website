import { cn } from '@/utils/cn';
import { useInView } from '@/hooks/useInView';

export default function AnimateIn({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-entrance motion-reduce:opacity-100 motion-reduce:translate-y-0',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
