/**
 * Public config barrel — module system entry points.
 * Import from specific files when tree-shaking matters.
 */
export { MODULE_REGISTRY, MODULE_SOURCE } from './modules.config.js';
export {
  getDashboardModuleConfigs,
  getDashboardModuleSlugs,
  getSubPageConfigs,
  getEnabledModuleConfigs,
  getPremiumModuleConfigs,
  getFreeModuleConfigs,
  getAllDigitalToolPageSlugs,
  getModuleScreenshotIds,
  getModuleConfigBySlug,
  getModuleConfigByKey,
  getLegacyHomeStripSlugs,
  getModuleConfigBySlugMap,
} from './moduleSelectors.js';
export {
  MODULE_COUNTS,
  PREMIUM_MODULE_COUNT,
  FREE_MODULE_COUNT,
  DASHBOARD_MODULE_COUNT,
  TOTAL_MODULE_COUNT,
} from './moduleCounts.js';
export {
  LIFE_AREA_SLUGS,
  MODULE_GROUP_DEFINITIONS,
  LIFE_AREA_MODULE_SLUGS,
  HOME_VAULT_SUB_MODULE_LABELS,
  resolveModuleDisplayNames,
} from './lifeAreas.config.js';
export {
  DIGITAL_LIFE_HUB_ROUTE,
  DIGITAL_LIFE_TOOL_ROUTE_PATTERN,
  ROUTE_MODULE_SLUGS,
  DASHBOARD_MODULE_ROUTES,
  SUB_PAGE_MODULE_ROUTES,
  getModuleRoute,
  getDynamicRouteSlugs,
} from './moduleRoutes.js';
export {
  SCREENSHOT_FILE_PATTERNS,
  SYSTEM_SCREENSHOT_IDS,
  buildScreenshotCatalog,
  getScreenshotFilePatterns,
} from './screenshotCatalog.js';
export { MODULE_ICONS, resolveModuleIcon } from './moduleIcons.js';

/** @deprecated Prefer moduleSelectors — backwards-compatible dashboard exports */
export {
  MAIN_DASHBOARD_SOURCE,
  MAIN_DASHBOARD_TOOLS,
  MAIN_DASHBOARD_SLUGS,
  DIGITAL_TOOL_SUB_PAGES,
  ALL_DIGITAL_TOOL_PAGE_SLUGS,
  getMainDashboardTool,
  getDashboardToolNeighbors,
  getMainDashboardToolByKey,
  DIGITAL_TOOL_PAGE_AUTHORING_ORDER,
  orderModulesByMainDashboard,
} from './mainDashboard.js';
