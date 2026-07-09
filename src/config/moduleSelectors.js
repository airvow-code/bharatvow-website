/**
 * Query helpers over MODULE_REGISTRY — use these instead of hardcoded slug arrays.
 */
import { MODULE_REGISTRY } from './modules.config.js';

/** @param {import('./modules.config.js').ModuleConfig} module */
function isEnabled(module) {
  return module.enabled;
}

/** @param {import('./modules.config.js').ModuleConfig} module */
function isOnDashboard(module) {
  return module.enabled && module.onDashboard;
}

/** Dashboard tools sorted by `order`. */
export function getDashboardModuleConfigs() {
  return MODULE_REGISTRY.filter(isOnDashboard).sort((a, b) => a.order - b.order);
}

/** Website-only sub-pages (not on dashboard grid). */
export function getSubPageConfigs() {
  return MODULE_REGISTRY.filter((m) => m.enabled && m.isSubPage);
}

/** All enabled modules (dashboard + sub-pages). */
export function getEnabledModuleConfigs() {
  return MODULE_REGISTRY.filter(isEnabled);
}

/** Premium dashboard tools (subscription / trial required). */
export function getPremiumModuleConfigs() {
  return getDashboardModuleConfigs().filter((m) => !m.alwaysFree);
}

/** Always-free dashboard tools. */
export function getFreeModuleConfigs() {
  return getDashboardModuleConfigs().filter((m) => m.alwaysFree);
}

/** Ordered dashboard slugs. */
export function getDashboardModuleSlugs() {
  return getDashboardModuleConfigs().map((m) => m.slug);
}

/** All indexable page slugs — dashboard order first, then sub-pages. */
export function getAllDigitalToolPageSlugs() {
  return [...getDashboardModuleSlugs(), ...getSubPageConfigs().map((m) => m.slug)];
}

/** Unique screenshot IDs from enabled modules. */
export function getModuleScreenshotIds() {
  return [...new Set(getEnabledModuleConfigs().map((m) => m.screenshotId))];
}

/** @param {string} slug */
export function getModuleConfigBySlug(slug) {
  return MODULE_REGISTRY.find((m) => m.slug === slug && m.enabled) ?? null;
}

/** @param {string} key MY_SERVICES key */
export function getModuleConfigByKey(key) {
  return MODULE_REGISTRY.find((m) => m.key === key && m.enabled) ?? null;
}

/**
 * @deprecated Legacy homepage strip omitted status-viewer and place-store.
 * Preserved for backwards compatibility until Phase 2 homepage sync.
 */
export function getLegacyHomeStripSlugs() {
  return getDashboardModuleSlugs().filter(
    (slug) => !['status-viewer', 'place-store'].includes(slug),
  );
}

/** Build a slug → config map for O(1) lookups. */
export function getModuleConfigBySlugMap() {
  return Object.fromEntries(
    getEnabledModuleConfigs().map((module) => [module.slug, module]),
  );
}
