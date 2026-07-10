/**
 * Screenshot file patterns keyed by screenshotId from MODULE_REGISTRY.
 * System screenshots (splash, main dashboard) are not tied to a module slug.
 */
import { getModuleScreenshotIds } from './moduleSelectors.js';

/**
 * Source filename candidates per screenshot ID (first existing raster wins in build script).
 * @type {Record<string, string[]>}
 */
export const SCREENSHOT_FILE_PATTERNS = Object.freeze({
  'bharatvow-splash': [
    'bharatvow-splash.webp',
    'bharatvow-splash.png',
    'bharatvow-splash.jpg',
  ],
  'main-dashboard': [
    'home-dashboard.webp',
    'home-dashboard.png',
    'home-dashboard.jpg',
    'main-dashboard.webp',
    'main-dashboard.png',
    'main-dashboard.svg',
  ],
  'smart-khata': [
    'smart-khata-dashboard.webp',
    'smart-khata.webp',
    'smart-khata.png',
    'smart-khata.jpg',
    'smart-khata.svg',
  ],
  'budget-pocket': [
    'budget-pocket-dashboard.webp',
    'budget-pocket.webp',
    'budget-pocket.png',
    'budget-pocket.jpg',
  ],
  'expenses-diary': [
    'expenses-dashboard.webp',
    'expenses-diary-dashboard.webp',
    'expenses-diary.webp',
    'expenses-diary.png',
  ],
  'event-book': [
    'event-book-dashboard.webp',
    'event-book.webp',
    'event-book.png',
  ],
  'trip-ledger': [
    'trip-ledger-dashboard.webp',
    'trip-ledger.webp',
    'trip-ledger.png',
  ],
  'vehicle-vault': [
    'vehicle-vault-dashboard.webp',
    'vehicle-vault.webp',
    'vehicle-vault.png',
  ],
  'home-vault': [
    'home-vault-dashboard.webp',
    'home-vault-dashboard.png',
    'home-vault-dashboard.jpg',
    'home-vault.webp',
    'home-vault.png',
    'home-vault.svg',
  ],
  'birthdays-anniversaries': [
    'birthday-anniversaries-dashboard.webp',
    'birthdays-anniversaries-dashboard.webp',
    'birthdays-anniversaries.webp',
    'birthdays-anniversaries.png',
  ],
  'smart-reminders': [
    'smart-reminder-dashboard.webp',
    'smart-reminders-dashboard.webp',
    'smart-reminders.webp',
    'smart-reminders.png',
  ],
  'festival-studio': [
    'festival-studio-dashboard.webp',
    'festival-studio.webp',
    'festival-studio.png',
  ],
  'grocery-bag': [
    'grocery-bag-dashboard.webp',
    'grocery-bag.webp',
    'grocery-bag.png',
  ],
  'link-vault': [
    'link-vault-dashboard.webp',
    'link-vault.webp',
    'link-vault.png',
    'link-vault.jpg',
    'link-vault.svg',
  ],
  'status-viewer': [
    'status-saver-dashboard.webp',
    'status-viewer-dashboard.webp',
    'status-viewer.webp',
    'status-viewer.png',
  ],
  'place-store': [
    'place-store-dashboard.webp',
    'place-store.webp',
    'place-store.png',
  ],
});

/** Screenshot IDs not tied to a module registry entry */
export const SYSTEM_SCREENSHOT_IDS = Object.freeze(['bharatvow-splash', 'main-dashboard']);

/**
 * Build optimize-images catalog: system IDs + unique module screenshotIds.
 * @returns {{ id: string, files: string[] }[]}
 */
export function buildScreenshotCatalog() {
  const moduleIds = getModuleScreenshotIds();
  const allIds = [...new Set([...SYSTEM_SCREENSHOT_IDS, ...moduleIds])];

  return allIds.map((id) => ({
    id,
    files: SCREENSHOT_FILE_PATTERNS[id] ?? [
      `${id}-dashboard.webp`,
      `${id}.webp`,
      `${id}.png`,
    ],
  }));
}

/** @param {string} screenshotId */
export function getScreenshotFilePatterns(screenshotId) {
  return SCREENSHOT_FILE_PATTERNS[screenshotId] ?? [`${screenshotId}-dashboard.webp`, `${screenshotId}.webp`];
}
