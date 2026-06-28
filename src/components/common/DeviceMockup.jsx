import PhoneMockupScreen from '@/components/common/PhoneMockupScreen';
import { getScreenshot } from '@/generated/screenshots';
import { cn } from '@/utils/cn';

export default function DeviceMockup({
  screenshotId = 'main-dashboard',
  imageAlt = 'BharatVow app on Android',
  caption,
  className,
  priority = true,
}) {
  const screen = { ...getScreenshot(screenshotId), alt: imageAlt };

  return (
    <figure className={cn('relative mx-auto w-full max-w-[280px]', className)}>
      <PhoneMockupScreen screen={screen} priority={priority} showNotch />
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
