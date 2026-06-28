import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { SITE } from '@/utils/constants';
import { cn } from '@/utils/cn';

/** One saffron Download CTA on mobile — appears after scrolling past hero */
export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-secondary-border bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md transition-transform duration-200 lg:hidden motion-reduce:transition-none',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
      role="region"
      aria-label="Download BharatVow"
      aria-hidden={!visible}
    >
      <Button href={SITE.playStoreUrl} size="md" className="w-full" external>
        Download on Google Play
      </Button>
    </div>
  );
}
