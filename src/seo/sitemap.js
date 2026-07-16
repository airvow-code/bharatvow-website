/**
 * Sitemap source of truth — only include publicly live, indexable routes.
 * Run `npm run generate:sitemap` to regenerate public/sitemap.xml
 */
import { PATHS, LEGAL_PATHS } from '../config/paths.js';
import { getDashboardModuleSlugs } from '../config/moduleSelectors.js';

const STATIC_ROUTES = [
  { path: PATHS.home, changefreq: 'weekly', priority: '1.0' },
  { path: PATHS.about, changefreq: 'monthly', priority: '0.85' },
  { path: PATHS.digitalLife, changefreq: 'monthly', priority: '0.9' },
  { path: PATHS.pricing, changefreq: 'monthly', priority: '0.85' },
  { path: PATHS.faq, changefreq: 'monthly', priority: '0.85' },
  { path: PATHS.contact, changefreq: 'monthly', priority: '0.8' },
  // Blog excluded — page is noindex until articles are published
  { path: PATHS.download, changefreq: 'monthly', priority: '0.85' },
  { path: LEGAL_PATHS.hub, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.privacyPolicy, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.terms, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.disclaimer, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.legalInformation, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.refundPolicy, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.subscriptionPolicy, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.pricingPolicy, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.grievanceRedressal, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.distributorAgreement, changefreq: 'yearly', priority: '0.5' },
  { path: LEGAL_PATHS.deleteAccount, changefreq: 'monthly', priority: '0.6' },
];

export const SITEMAP_ENTRIES = [
  ...STATIC_ROUTES,
  ...getDashboardModuleSlugs().map((slug) => ({
    path: `${PATHS.digitalLife}/${slug}`,
    changefreq: 'monthly',
    priority: '0.75',
  })),
];

export const SITEMAP_PLANNED = [];
