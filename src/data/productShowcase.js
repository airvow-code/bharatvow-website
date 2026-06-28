import { getDashboardModules } from '@/data/modules';
import { getScreenshot } from '@/generated/screenshots';

/**
 * Homepage product showcase — tools in Main Dashboard order.
 * Names and icons come from modules.js (matched to mobile MY_SERVICES labels).
 */
export const PRODUCT_SHOWCASE = {
  eyebrow: 'Inside the app',
  title: 'See how BharatVow organizes your everyday digital life',
  intro:
    'Every screen is built for real daily routines — not demo polish. Pick a Digital Tool and see how it looks on your phone.',
  cta: {
    label: 'Explore Your Digital Life',
    href: '/digital-life',
  },
};

export function getProductShowcaseTools() {
  return getDashboardModules()
    .map((mod) => {
      const shot = mod.screenshotId ? getScreenshot(mod.screenshotId) : null;
      if (!shot || shot.isPlaceholder) return null;

      const Icon = mod.icon;
      return {
        id: mod.slug,
        screenshotId: mod.screenshotId,
        name: mod.name,
        description: mod.tagline,
        icon: Icon,
        free: mod.free,
        screen: {
          ...shot,
          alt: `${mod.name} screen in BharatVow app`,
        },
      };
    })
    .filter(Boolean);
}
