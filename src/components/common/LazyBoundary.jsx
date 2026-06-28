import { Suspense } from 'react';
import PageSkeleton from '@/components/common/PageSkeleton';

export default function LazyBoundary({ children }) {
  return <Suspense fallback={<PageSkeleton />}>{children}</Suspense>;
}
