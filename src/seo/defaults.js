import { SITE } from '@/utils/constants';
import { ROUTE_META, getRouteMeta } from '@/seo/routeMeta';

/** Default social / OG image — uses site logo until a dedicated 1200×630 asset is added. */
export const DEFAULT_OG_IMAGE = `${SITE.url}/images/logo-header.webp`;

export const SEO_DEFAULTS = {
  siteName: SITE.name,
  locale: 'en_IN',
  localeAlternate: 'hi_IN',
  twitterCard: 'summary',
  twitterSite: '@bharatvow',
  author: SITE.company,
  themeColor: '#05204E',
  defaultDescription:
    'A Personal Digital Life Platform — organize personal records, expenses, reminders, documents, vehicles, trips, events, and everyday digital life tools in one secure app. Free tools on Google Play.',
  defaultKeywords: [
    'BharatVow',
    'BharatVow app',
    'Personal Digital Life Platform',
    'daily life management India',
    'personal organization app',
    'budget tracking app',
    'home organization app',
    'vehicle records app',
    'Indian productivity app',
    'offline organization app Android',
  ].join(', '),
};

/** Per-page meta — sourced from seo/routeMeta.js */
export const PAGE_META = ROUTE_META;

export function getPageMeta(path) {
  return getRouteMeta(path);
}

export function resolveTitle({ title, fullTitle }) {
  if (fullTitle) return fullTitle;
  if (title) return `${title} | ${SITE.name}`;
  return `${SITE.name} — ${SITE.tagline}`;
}

export function resolveCanonical(path = '/') {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  if (normalised === '' || normalised === '/') return `${SITE.url}/`;
  return `${SITE.url}${normalised.replace(/\/$/, '')}`;
}
