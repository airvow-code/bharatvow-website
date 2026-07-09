import { MAIN_DASHBOARD_SLUGS } from '@/config/mainDashboard';
import { resolveModuleIcon } from '@/config/moduleIcons';
import { MODULE_GROUP_DEFINITIONS } from '@/config/lifeAreas.config';
import { getEnabledModuleConfigs, getLegacyHomeStripSlugs } from '@/config/moduleSelectors';
import { HOMEPAGE_MODULE_COPY } from '@/data/homepageCopy';

/** Main Dashboard order — re-exported from config/mainDashboard.js */
export const DASHBOARD_TOOL_SLUGS = MAIN_DASHBOARD_SLUGS;

/**
 * @typedef {Object} Module
 * @property {string} slug
 * @property {string} name
 * @property {string} tagline
 * @property {string} purpose
 * @property {string} problem
 * @property {string} lifeArea
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} screenshotId
 * @property {boolean} [free]
 * @property {string} [parentSlug]
 */

/** @param {import('@/config/modules.config.js').ModuleConfig} config */
function toModule(config) {
  /** @type {Module} */
  const module = {
    slug: config.slug,
    name: config.displayName,
    tagline: config.tagline,
    purpose: config.purpose,
    problem: config.problem,
    lifeArea: config.lifeArea,
    icon: resolveModuleIcon(config.iconKey),
    screenshotId: config.screenshotId,
  };
  if (config.alwaysFree) module.free = true;
  if (config.parentSlug) module.parentSlug = config.parentSlug;
  return module;
}

const MODULE_BY_SLUG = Object.fromEntries(
  getEnabledModuleConfigs().map((config) => [config.slug, toModule(config)]),
);

export const ALL_MODULES = Object.values(MODULE_BY_SLUG);

export const MODULE_SLUGS = ALL_MODULES.map((m) => m.slug);

/** @deprecated use ALL_MODULES — kept for homepage imports */
export const HOME_MODULES = getLegacyHomeStripSlugs()
  .map((slug) => MODULE_BY_SLUG[slug])
  .filter(Boolean);

export function getModule(slug) {
  return MODULE_BY_SLUG[slug] ?? null;
}

/** Digital Tools in Main Dashboard order (excludes Home Assets sub-page). */
export function getDashboardModules() {
  return DASHBOARD_TOOL_SLUGS.map((slug) => getModule(slug)).filter(Boolean);
}

/** @deprecated Do not use category grouping — Main Dashboard order is canonical. */
export const MODULE_GROUPS = MODULE_GROUP_DEFINITIONS.map((group) => ({
  title: group.title,
  description: group.description,
  slugs: [...group.slugs],
}));

export const DIGITAL_LIFE_PAGE = {
  path: '/digital-life',
  title: 'Digital Life',
  headline: HOMEPAGE_MODULE_COPY.digitalLifeHeadline,
  description:
    'Every BharatVow tool simplifies a real part of everyday life — budgets, home, vehicles, events, celebrations, reminders, grocery, travel, links, and daily records — all connected inside one app.',
  keywords:
    'BharatVow Digital Life, Personal Digital Life Platform, Smart Khata, Home Vault, personal organization India',
  intro: HOMEPAGE_MODULE_COPY.digitalLifeIntro,
};

/** @deprecated use DIGITAL_LIFE_PAGE */
export const MODULES_PAGE = DIGITAL_LIFE_PAGE;

export function modulesForGroup(slugs) {
  return slugs.map((slug) => getModule(slug)).filter(Boolean);
}
