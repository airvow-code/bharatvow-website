import OptimizedImage from '@/components/common/OptimizedImage';
import { cn } from '@/utils/cn';

/**
 * Premium phone frame for app screenshots — object-contain, no crop/stretch.
 */
export default function PhoneMockupScreen({
  screen,
  priority = false,
  className,
  frameClassName,
  imageClassName,
  showNotch = true,
}) {
  if (!screen) return null;

  const { src, srcSet, sizes, width, height, alt } = screen;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border-[11px] border-primary-dark bg-primary-dark shadow-mockup',
        frameClassName,
      )}
    >
      {showNotch && (
        <div
          aria-hidden
          className="absolute left-1/2 top-0 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-b-2xl bg-primary-dark"
        />
      )}
      <div
        className={cn('relative flex items-center justify-center overflow-hidden bg-canvas', className)}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <OptimizedImage
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          className={cn('h-full w-full object-contain object-center', imageClassName)}
        />
      </div>
    </div>
  );
}
