/**
 * Route chunk prefetch — warms lazy-loaded page modules on nav hover/focus.
 * Safe to call repeatedly; duplicate imports are deduped by the browser.
 */
const ROUTE_PREFETCHERS = {
  '/': () => import('@/pages/Home'),
  '/about': () => import('@/pages/marketing/About'),
  '/pricing': () => import('@/pages/marketing/Pricing'),
  '/faq': () => import('@/pages/support/Faq'),
  '/contact': () => import('@/pages/support/Contact'),
  '/download': () => import('@/pages/marketing/Download'),
  '/digital-life': () => import('@/pages/digital-tools/DigitalToolsHub'),
  '/legal': () => import('@/pages/legal/LegalHub'),
  '/blog': () => import('@/pages/blog/BlogIndex'),
  '/privacy-policy': () => import('@/pages/legal/LegalDocument'),
  '/terms': () => import('@/pages/legal/LegalDocument'),
  '/disclaimer': () => import('@/pages/legal/LegalDocument'),
  '/legal-information': () => import('@/pages/legal/LegalDocument'),
  '/refund-policy': () => import('@/pages/legal/LegalDocument'),
  '/grievance-redressal': () => import('@/pages/legal/LegalDocument'),
  '/distributor-agreement': () => import('@/pages/legal/LegalDocument'),
  '/delete-account': () => import('@/pages/support/DeleteAccount'),
};

const prefetched = new Set();

function normalizePath(path) {
  if (!path || path === '/') return '/';
  const base = path.split('?')[0].split('#')[0];
  return base.endsWith('/') && base.length > 1 ? base.slice(0, -1) : base;
}

/** @param {string} path */
export function prefetchRoute(path) {
  const normalized = normalizePath(path);
  if (prefetched.has(normalized)) return;

  const loader = ROUTE_PREFETCHERS[normalized];
  if (!loader) {
    const digitalLifeMatch = normalized.match(/^\/digital-life\/([^/]+)$/);
    if (digitalLifeMatch) {
      prefetched.add(normalized);
      import('@/pages/digital-tools/DigitalToolDetail');
    }
    return;
  }

  prefetched.add(normalized);
  loader();
}
