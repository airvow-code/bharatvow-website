/**
 * BharatVow Main Dashboard — official website mirror of the mobile app grid.
 *
 * The mobile app's Main Dashboard (`MY_SERVICES` in DashboardScreen.js) is the
 * single source of truth for Digital Tool order, naming, and hub structure.
 *
 * When the app dashboard changes, update this file to match — then all website
 * surfaces (Digital Life hub, homepage strips, sitemap, related tools) follow.
 *
 * @see src/screens/Dashboard/DashboardScreen.js → MY_SERVICES (mobile repo root)
 * @see CONTENT_STRATEGY.md — page content template (11 sections)
 * @see src/data/digitalToolPages/ — per-tool page registry
 */

/** Mobile source reference — update when syncing */
export const MAIN_DASHBOARD_SOURCE = {
  appFile: 'src/screens/Dashboard/DashboardScreen.js',
  appExport: 'MY_SERVICES',
  websiteHubRoute: '/digital-life',
  websiteToolRoutePattern: '/digital-life/:slug',
};

/**
 * Main Dashboard tools in exact mobile grid order (12 tiles).
 * `key` matches MY_SERVICES[].key — `slug` is the website route segment.
 */
export const MAIN_DASHBOARD_TOOLS = [
  {
    key: 'KHATA',
    slug: 'smart-khata',
    label: 'Smart Khata',
    sublabel1: 'Track lending',
    sublabel2: 'and borrowing',
    alwaysFree: false,
  },
  {
    key: 'GOODBUDGET',
    slug: 'budget-pocket',
    label: 'Budget Pocket',
    sublabel1: 'Plan and control',
    sublabel2: 'budget',
    alwaysFree: false,
  },
  {
    key: 'EXPENSES',
    slug: 'expenses-diary',
    label: 'Expenses Diary',
    sublabel1: 'Manage daily',
    sublabel2: 'expense records',
    alwaysFree: false,
  },
  {
    key: 'EVENTS',
    slug: 'event-book',
    label: 'Event Book',
    sublabel1: 'Plan and',
    sublabel2: 'manage events',
    alwaysFree: false,
  },
  {
    key: 'TRIPS',
    slug: 'trip-ledger',
    label: 'Trip Ledger',
    sublabel1: 'Split group',
    sublabel2: 'trip expenses',
    alwaysFree: false,
  },
  {
    key: 'VEHICLE',
    slug: 'vehicle-vault',
    label: 'Vehicle Vault',
    sublabel1: 'Track all vehicle',
    sublabel2: 'expenses',
    alwaysFree: false,
  },
  {
    key: 'HOME_VAULT',
    slug: 'home-vault',
    label: 'Home Vault',
    sublabel1: 'Manage home assets',
    sublabel2: 'bills & services',
    alwaysFree: false,
  },
  {
    key: 'BIRTHDAY',
    slug: 'days-reminder',
    label: 'Days Reminder',
    sublabel1: 'Remember important',
    sublabel2: 'special days',
    alwaysFree: false,
  },
  {
    key: 'LISTONIC',
    slug: 'grocery-bag',
    label: 'Grocery Bag',
    sublabel1: 'Create smart',
    sublabel2: 'grocery lists',
    alwaysFree: false,
  },
  {
    key: 'LINK_VAULT',
    slug: 'link-vault',
    label: 'Link Vault',
    sublabel1: 'Save and organize',
    sublabel2: 'important links',
    alwaysFree: true,
  },
  {
    key: 'STATUS_SAVER',
    slug: 'status-viewer',
    label: 'Status Viewer',
    sublabel1: 'View status',
    sublabel2: 'media on device',
    alwaysFree: true,
  },
  {
    key: 'placeScreen',
    slug: 'place-store',
    label: 'Place Store',
    sublabel1: 'Save places you',
    sublabel2: 'frequently visit',
    alwaysFree: false,
  },
];

/** Ordered slugs for Main Dashboard tools only */
export const MAIN_DASHBOARD_SLUGS = MAIN_DASHBOARD_TOOLS.map((tool) => tool.slug);

/**
 * Website-only sub-pages (not on Main Dashboard grid).
 * Listed after dashboard tools in sitemap and authoring checklists.
 */
export const DIGITAL_TOOL_SUB_PAGES = [
  {
    slug: 'home-assets',
    label: 'Home Assets',
    parentSlug: 'home-vault',
    parentKey: 'HOME_VAULT',
  },
];

/** All indexable Digital Tool page slugs — dashboard order first, then sub-pages */
export const ALL_DIGITAL_TOOL_PAGE_SLUGS = [
  ...MAIN_DASHBOARD_SLUGS,
  ...DIGITAL_TOOL_SUB_PAGES.map((page) => page.slug),
];

/** @param {string} slug */
export function getMainDashboardTool(slug) {
  return MAIN_DASHBOARD_TOOLS.find((tool) => tool.slug === slug) ?? null;
}

/**
 * Previous and next tools in Main Dashboard order for page navigation.
 * @param {string} slug
 */
export function getDashboardToolNeighbors(slug) {
  const index = MAIN_DASHBOARD_SLUGS.indexOf(slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? MAIN_DASHBOARD_TOOLS[index - 1] : null,
    next: index < MAIN_DASHBOARD_TOOLS.length - 1 ? MAIN_DASHBOARD_TOOLS[index + 1] : null,
  };
}

/** @param {string} key MY_SERVICES key */
export function getMainDashboardToolByKey(key) {
  return MAIN_DASHBOARD_TOOLS.find((tool) => tool.key === key) ?? null;
}

/** Authoring order for new Digital Tool pages — follow dashboard, then sub-pages */
export const DIGITAL_TOOL_PAGE_AUTHORING_ORDER = ALL_DIGITAL_TOOL_PAGE_SLUGS;

/**
 * Resolve modules in Main Dashboard order.
 * @param {Record<string, import('@/data/modules').Module>} moduleBySlug
 */
export function orderModulesByMainDashboard(moduleBySlug) {
  return MAIN_DASHBOARD_SLUGS.map((slug) => moduleBySlug[slug]).filter(Boolean);
}
