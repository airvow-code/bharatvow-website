import { PATHS } from '@/config/paths';

/** Header navigation — Home → Digital Life → Pricing → FAQ → About → Contact */
export const HEADER_NAV = [
  { label: 'Home', to: PATHS.home, id: 'home', path: PATHS.home },
  { label: 'Digital Life', to: PATHS.digitalLife, id: 'digital-life', path: PATHS.digitalLife },
  { label: 'Pricing', to: PATHS.pricing, id: 'pricing', path: PATHS.pricing },
  { label: 'FAQ', to: PATHS.faq, id: 'faq', path: PATHS.faq },
  { label: 'About', to: PATHS.about, id: 'about', path: PATHS.about },
  { label: 'Contact', to: PATHS.contact, id: 'contact', path: PATHS.contact },
];

export function isHeaderNavActive(item, pathname, hash) {
  if (item.id === 'home') return pathname === PATHS.home && !hash;
  if (item.path === PATHS.digitalLife) {
    return pathname === PATHS.digitalLife || pathname.startsWith(`${PATHS.digitalLife}/`);
  }
  if (item.path) return pathname === item.path || pathname.startsWith(`${item.path}/`);
  return false;
}
