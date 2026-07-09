/**
 * Life area and module grouping definitions — slug lists resolve via MODULE_REGISTRY.
 */
import { getModuleConfigBySlug } from './moduleSelectors.js';
import { MODULE_COUNTS } from './moduleCounts.js';

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
    description: 'Ghar, events, reminders, and festival greetings',
    slugs: [
      'home-vault',
      'home-assets',
      'event-book',
      'birthdays-anniversaries',
      'smart-reminders',
      'festival-studio',
    ],
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

/** Life area → dashboard module slugs (homepage bento wiring). */
export const LIFE_AREA_MODULE_SLUGS = Object.freeze({
  money: ['smart-khata', 'budget-pocket', 'expenses-diary'],
  home: [],
  family: ['event-book', 'birthdays-anniversaries', 'smart-reminders', 'festival-studio'],
  vehicle: ['vehicle-vault'],
  grocery: ['grocery-bag'],
  travel: ['trip-ledger', 'place-store'],
  'daily-life': ['link-vault', 'status-viewer'],
});

/** Home Vault sub-module labels (not separate MODULE_REGISTRY entries). */
export const HOME_VAULT_SUB_MODULE_LABELS = Object.freeze([
  'Home Assets',
  'Find My Stuff',
  'Bills & Price Book',
  'Due Services',
  'Service Providers',
  'Connection References',
]);

/** Dynamic tool-count labels for homepage life area cards. */
export function getLifeAreaToolLabel(areaSlug) {
  if (areaSlug === 'home') {
    return '1 Digital Tool · 6 modules';
  }
  if (areaSlug === 'daily-life') {
    return `${MODULE_COUNTS.free} Free Tools`;
  }
  const count = LIFE_AREA_MODULE_SLUGS[areaSlug]?.length ?? 0;
  return count === 1 ? '1 Smart Tool' : `${count} Smart Tools`;
}

/** Resolve module slugs to display names via central config. */
export function resolveModuleDisplayNames(slugs) {
  return slugs.map((slug) => getModuleConfigBySlug(slug)?.displayName).filter(Boolean);
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
