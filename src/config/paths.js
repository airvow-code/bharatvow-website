import { ALL_DIGITAL_TOOL_PAGE_SLUGS } from './mainDashboard.js';

export const LEGAL_PATHS = {
  hub: '/legal',
  privacyPolicy: '/privacy-policy',
  terms: '/terms',
  disclaimer: '/disclaimer',
  legalInformation: '/legal-information',
  refundPolicy: '/refund-policy',
  grievanceRedressal: '/grievance-redressal',
  deleteAccount: '/delete-account',
  distributorAgreement: '/distributor-agreement',
};

export const PATHS = {
  home: '/',
  about: '/about',
  digitalLife: '/digital-life',
  pricing: '/pricing',
  faq: '/faq',
  contact: '/contact',
  blog: '/blog',
  download: '/download',
  legal: LEGAL_PATHS.hub,
  deleteAccount: LEGAL_PATHS.deleteAccount,
  ...LEGAL_PATHS,
};

/** @deprecated Legacy URLs — redirect via routes.jsx / LEGACY_REDIRECTS */
export const LEGACY_PATHS = {
  lifeAreas: '/life-areas',
  digitalTools: '/digital-tools',
};

export function digitalLifePath(slug) {
  return slug ? `${PATHS.digitalLife}/${slug}` : PATHS.digitalLife;
}

/** @deprecated use digitalLifePath */
export function digitalToolPath(slug) {
  return digitalLifePath(slug);
}

/** @deprecated life area pages redirect to Digital Life hub */
export function lifeAreaPath(_slug) {
  return PATHS.digitalLife;
}

const LEGAL_DOC_ROUTE_MAP = {
  privacy: LEGAL_PATHS.privacyPolicy,
  'privacy-policy': LEGAL_PATHS.privacyPolicy,
  terms: LEGAL_PATHS.terms,
  disclaimer: LEGAL_PATHS.disclaimer,
  'legal-information': LEGAL_PATHS.legalInformation,
  refund: LEGAL_PATHS.refundPolicy,
  'refund-policy': LEGAL_PATHS.refundPolicy,
  grievance: LEGAL_PATHS.grievanceRedressal,
  'grievance-redressal': LEGAL_PATHS.grievanceRedressal,
  'distributor-agreement': LEGAL_PATHS.distributorAgreement,
  'delete-account': LEGAL_PATHS.deleteAccount,
};

export function legalDocPath(doc) {
  return doc ? (LEGAL_DOC_ROUTE_MAP[doc] ?? `${PATHS.legal}/${doc}`) : PATHS.legal;
}

/** Legacy /legal/:doc segment → canonical path */
export function legacyLegalRedirect(doc) {
  return LEGAL_DOC_ROUTE_MAP[doc] ?? PATHS.legal;
}

export function blogPostPath(slug) {
  return slug ? `${PATHS.blog}/${slug}` : PATHS.blog;
}

export const LIFE_AREA_SLUGS = [
  'money',
  'home',
  'family',
  'vehicle',
  'grocery',
  'travel',
  'daily-life',
];

export const DIGITAL_TOOL_SLUGS = ALL_DIGITAL_TOOL_PAGE_SLUGS;

/** @deprecated legacy slugs under /legal/:doc */
export const LEGAL_DOC_SLUGS = [
  'privacy',
  'terms',
  'disclaimer',
  'grievance',
  'refund',
  'distributor-agreement',
];

export const LEGAL_PAGE_PATHS = Object.values(LEGAL_PATHS).filter((p) => p !== LEGAL_PATHS.hub);

/** Legacy paths → canonical (for redirects) */
export const LEGACY_REDIRECTS = {
  '/modules': PATHS.digitalLife,
  '/life-areas': PATHS.digitalLife,
  '/digital-tools': PATHS.digitalLife,
  '/support/contact': PATHS.contact,
  '/support/delete-account': LEGAL_PATHS.deleteAccount,
  '/legal/privacy': LEGAL_PATHS.privacyPolicy,
  '/legal/terms': LEGAL_PATHS.terms,
  '/legal/disclaimer': LEGAL_PATHS.disclaimer,
  '/legal/refund': LEGAL_PATHS.refundPolicy,
  '/legal/grievance': LEGAL_PATHS.grievanceRedressal,
  '/legal/distributor-agreement': LEGAL_PATHS.distributorAgreement,
};

export function legacyModuleRedirect(slug) {
  return digitalLifePath(slug);
}
