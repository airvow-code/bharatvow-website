import { getScreenshot } from '@/generated/screenshots';

/** Hero carousel — three official screenshots (order matters) */
export const HERO_SCREEN_IDS = [
  {
    id: 'bharatvow-splash',
    alt: 'BharatVow splash screen on Android',
    label: 'BharatVow',
  },
  {
    id: 'main-dashboard',
    alt: 'BharatVow home dashboard with Digital Tools for everyday digital life',
    label: 'Home Dashboard',
  },
  {
    id: 'home-vault',
    alt: 'BharatVow Home Vault dashboard for home maintenance and assets',
    label: 'Home Vault',
  },
];

export function getHeroScreens() {
  return HERO_SCREEN_IDS.map(({ id, alt, label }) => ({
    ...getScreenshot(id),
    id,
    label,
    alt,
  }));
}
