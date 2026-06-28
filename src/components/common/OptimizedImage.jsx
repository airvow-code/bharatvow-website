import { cn } from '@/utils/cn';

/**
 * Performance-optimised img wrapper — explicit dimensions, lazy load, async decode.
 * LCP candidate: set priority=true (only one per page).
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  srcSet,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={srcSet}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn(className)}
      {...props}
    />
  );
}
