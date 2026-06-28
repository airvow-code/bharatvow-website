import { cn } from '@/utils/cn';

export default function Container({ children, className, as: Tag = 'div' }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-container px-4 md:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  );
}
