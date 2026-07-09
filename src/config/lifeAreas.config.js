/**
 * Life area and module grouping definitions.
 * Homepage marketing copy (titles, descriptions) stays in src/data/home.js until Phase 2.
 * Slug-based tool lists here drive future config-driven homepage wiring.
 */
import { getModuleConfigBySlug } from './moduleSelectors.js';

/** Canonical life area slugs */
export const LIFE_AREA_SLUGS = Object.freeze([
  'money',
  'home',
  'family',
  'vehicle',
  'grocery',
  'travel',
  'daily-life',
]);

/**
 * @deprecated Main Dashboard order is canonical — kept for legacy references only.
 * Slugs reference MODULE_REGISTRY; resolved at read time.
 */
export const MODULE_GROUP_DEFINITIONS = Object.freeze([
  {
    id: 'budget-daily',
    title: 'Budget & daily expenses',
    description: 'Khata, household budget, and expense diary',
    slugs: ['smart-khata', 'budget-pocket', 'expenses-diary'],
  },
  {
    id: 'home-celebrations',
    title: 'Home & celebrations',
    description: 'Ghar, events, and reminders',
    slugs: ['home-vault', 'home-assets', 'event-book', 'days-reminder'],
  },
  {
    id: 'travel-vehicles',
    title: 'Travel & vehicles',
    description: 'Trips, papers, and saved places',
    slugs: ['vehicle-vault', 'trip-ledger', 'place-store'],
  },
  {
    id: 'daily-life',
    title: 'Daily life',
    description: 'Lists, links, and free tools',
    slugs: ['grocery-bag', 'link-vault', 'status-viewer'],
  },
]);

/**
 * Life area → dashboard module slugs (for Phase 2 homepage bento wiring).
 * Home area uses Home Vault sub-module labels — not separate registry entries.
 */
export const LIFE_AREA_MODULE_SLUGS = Object.freeze({
  money: ['smart-khata', 'budget-pocket', 'expenses-diary'],
  home: [],
  family: ['event-book', 'days-reminder'],
  vehicle: ['vehicle-vault'],
  grocery: ['grocery-bag'],
  travel: ['trip-ledger', 'place-store'],
  'daily-life': ['link-vault', 'status-viewer'],
});

/** Home Vault sub-module labels shown on homepage bento (not separate MODULE_REGISTRY entries). */
export const HOME_VAULT_SUB_MODULE_LABELS = Object.freeze([
  'Home Assets',
  'Find My Stuff',
  'Bills & Price Book',
  'Due Services',
  'Service Providers',
  'Connection References',
]);

/** Resolve module slugs to display names via central config. */
export function resolveModuleDisplayNames(slugs) {
  return slugs
    .map((slug) => getModuleConfigBySlug(slug)?.displayName)
    .filter(Boolean);
}

/** @deprecated */
export function getModuleGroupsWithModules(getModuleFn) {
  return MODULE_GROUP_DEFINITIONS.map((group) => ({
    title: group.title,
    description: group.description,
    slugs: group.slugs,
    modules: group.slugs.map((slug) => getModuleFn(slug)).filter(Boolean),
  }));
}
