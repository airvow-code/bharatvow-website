import { SITE } from '@/utils/constants';
import { ROUTE_META, getRouteMeta } from '@/seo/routeMeta';

/** Default social / OG image — replace with 1200×630 composed asset before launch. */
export const DEFAULT_OG_IMAGE = `${SITE.url}/og/bharatvow-default.png`;

export const SEO_DEFAULTS = {
  siteName: SITE.name,
  locale: 'en_IN',
  localeAlternate: 'hi_IN',
  twitterCard: 'summary_large_image',
  twitterSite: '@bharatvow',
  author: SITE.company,
  themeColor: '#05204E',
  defaultDescription:
    'Your complete digital life organizer — budgets, home, vehicles, events, and everyday records in one secure app. Free tools on Google Play.',
  defaultKeywords: [
    'BharatVow',
    'BharatVow app',
    'digital life organizer',
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
