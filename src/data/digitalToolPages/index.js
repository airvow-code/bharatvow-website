/**
 * Digital Tool page content registry.
 * Content loads on demand per slug to keep route bundles small.
 *
 * @see ../../../CONTENT_STRATEGY.md — Step 17 master content strategy
 * @see ./blueprint.js — empty template factory
 */
import { createDigitalToolBlueprint, DIGITAL_TOOL_CONTENT_BLUEPRINT } from './blueprint';

/** @type {Record<string, () => Promise<{ default: import('./templateSchema.js').DigitalToolTemplateContent }>>} */
const PAGE_LOADERS = {
  'smart-khata': () => import('./smart-khata'),
  'budget-pocket': () => import('./budget-pocket'),
  'expenses-diary': () => import('./expenses-diary'),
  'event-book': () => import('./event-book'),
  'trip-ledger': () => import('./trip-ledger'),
  'vehicle-vault': () => import('./vehicle-vault'),
  'home-vault': () => import('./home-vault'),
  'days-reminder': () => import('./days-reminder'),
  'grocery-bag': () => import('./grocery-bag'),
  'link-vault': () => import('./link-vault'),
  'status-viewer': () => import('./status-viewer'),
  'place-store': () => import('./place-store'),
};

export const AUTHORED_DIGITAL_TOOL_SLUGS = Object.freeze(Object.keys(PAGE_LOADERS));

/** @param {string} slug */
export function hasDigitalToolPage(slug) {
  return slug in PAGE_LOADERS;
}

/** @param {string} slug */
export async function loadDigitalToolPage(slug) {
  const loader = PAGE_LOADERS[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

/** Prefetch tool content chunk (e.g. hub card hover). */
export function prefetchDigitalToolPage(slug) {
  PAGE_LOADERS[slug]?.();
}

export function getAuthoredDigitalToolSlugs() {
  return [...AUTHORED_DIGITAL_TOOL_SLUGS];
}

/** Empty blueprint for a new slug — not a live page */
export function getDigitalToolBlueprint(slug) {
  return createDigitalToolBlueprint(slug);
}

export { DIGITAL_TOOL_CONTENT_BLUEPRINT, createDigitalToolBlueprint };
