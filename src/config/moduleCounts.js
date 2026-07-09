/**
 * Computed module counts — never hardcode 12, 14, 10, etc. in consuming code.
 */
import {
  getDashboardModuleConfigs,
  getEnabledModuleConfigs,
  getFreeModuleConfigs,
  getPremiumModuleConfigs,
  getSubPageConfigs,
} from './moduleSelectors.js';

const dashboardModules = getDashboardModuleConfigs();
const enabledModules = getEnabledModuleConfigs();
const premiumModules = getPremiumModuleConfigs();
const freeModules = getFreeModuleConfigs();
const subPages = getSubPageConfigs();

export const MODULE_COUNTS = Object.freeze({
  /** All enabled registry entries (dashboard + sub-pages) */
  total: enabledModules.length,
  /** Enabled modules on the main dashboard grid */
  dashboard: dashboardModules.length,
  /** Premium dashboard tools (subscription / trial) */
  premium: premiumModules.length,
  /** Always-free dashboard tools */
  free: freeModules.length,
  /** Enabled modules (alias for marketing copy generators in Phase 2) */
  enabled: enabledModules.length,
  /** Website-only sub-pages */
  subPages: subPages.length,
});

/** @deprecated Use MODULE_COUNTS.premium — alias for pricing integrations */
export const PREMIUM_MODULE_COUNT = MODULE_COUNTS.premium;

/** @deprecated Use MODULE_COUNTS.free */
export const FREE_MODULE_COUNT = MODULE_COUNTS.free;

/** @deprecated Use MODULE_COUNTS.dashboard */
export const DASHBOARD_MODULE_COUNT = MODULE_COUNTS.dashboard;

/** @deprecated Use MODULE_COUNTS.total */
export const TOTAL_MODULE_COUNT = MODULE_COUNTS.total;
