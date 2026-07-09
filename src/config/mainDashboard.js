/**
 * BharatVow Main Dashboard — derived from modules.config.js (single source of truth).
 *
 * @see modules.config.js — edit MODULE_REGISTRY when syncing with mobile MY_SERVICES
 * @see MODULES_ARCHITECTURE.md
 */
import { MODULE_SOURCE } from './modules.config.js';
import {
  getAllDigitalToolPageSlugs,
  getDashboardModuleConfigs,
  getDashboardModuleSlugs,
  getModuleConfigByKey,
  getModuleConfigBySlug,
  getSubPageConfigs,
} from './moduleSelectors.js';

/** Mobile source reference — re-exported from modules.config.js */
export const MAIN_DASHBOARD_SOURCE = MODULE_SOURCE;

/**
 * Main Dashboard tools in exact mobile grid order.
 * Shape preserved for backwards compatibility with existing consumers.
 */
export const MAIN_DASHBOARD_TOOLS = getDashboardModuleConfigs().map((module) => ({
  key: module.key,
  slug: module.slug,
  label: module.dashboardLabel,
  sublabel1: module.dashboardSubLabel1,
  sublabel2: module.dashboardSubLabel2,
  alwaysFree: module.alwaysFree,
}));

/** Ordered slugs for Main Dashboard tools only */
export const MAIN_DASHBOARD_SLUGS = getDashboardModuleSlugs();

/**
 * Website-only sub-pages (not on Main Dashboard grid).
 * Listed after dashboard tools in sitemap and authoring checklists.
 */
export const DIGITAL_TOOL_SUB_PAGES = getSubPageConfigs().map((module) => ({
  slug: module.slug,
  label: module.displayName,
  parentSlug: module.parentSlug,
  parentKey: module.parentKey,
}));

/** All indexable Digital Tool page slugs — dashboard order first, then sub-pages */
export const ALL_DIGITAL_TOOL_PAGE_SLUGS = getAllDigitalToolPageSlugs();

/** @param {string} slug */
export function getMainDashboardTool(slug) {
  const config = getModuleConfigBySlug(slug);
  if (!config?.onDashboard) return null;
  return (
    MAIN_DASHBOARD_TOOLS.find((tool) => tool.slug === slug) ?? null
  );
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
  const config = getModuleConfigByKey(key);
  if (!config) return null;
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
