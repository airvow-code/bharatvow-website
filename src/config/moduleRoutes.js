/**
 * Route helpers derived from MODULE_REGISTRY.
 * routes.jsx continues using explicit paths in Phase 1; consume these in Phase 2.
 */
import { MODULE_SOURCE } from './modules.config.js';
import {
  getAllDigitalToolPageSlugs,
  getDashboardModuleConfigs,
  getSubPageConfigs,
} from './moduleSelectors.js';

export const DIGITAL_LIFE_HUB_ROUTE = MODULE_SOURCE.websiteHubRoute;

export const DIGITAL_LIFE_TOOL_ROUTE_PATTERN = MODULE_SOURCE.websiteToolRoutePattern;

/** All slugs that have a digital-life detail route */
export const ROUTE_MODULE_SLUGS = getAllDigitalToolPageSlugs();

/** Dashboard tool routes in grid order */
export const DASHBOARD_MODULE_ROUTES = getDashboardModuleConfigs().map((module) => ({
  slug: module.slug,
  path: module.route,
  key: module.key,
}));

/** Sub-page routes (e.g. home-assets) */
export const SUB_PAGE_MODULE_ROUTES = getSubPageConfigs().map((module) => ({
  slug: module.slug,
  path: module.route,
  parentSlug: module.parentSlug,
}));

/** @param {string} slug */
export function getModuleRoute(slug) {
  const match = [...DASHBOARD_MODULE_ROUTES, ...SUB_PAGE_MODULE_ROUTES].find(
    (entry) => entry.slug === slug,
  );
  return match?.path ?? `${DIGITAL_LIFE_HUB_ROUTE}/${slug}`;
}

/** Slugs for dynamic route generation (React Router `:slug` param allowlist). */
export function getDynamicRouteSlugs() {
  return ROUTE_MODULE_SLUGS;
}
