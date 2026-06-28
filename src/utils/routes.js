/**
 * Path helpers — delegates to config/paths.js.
 * Legacy names (modulesPath, modulePath) kept for existing imports.
 */
import {
  PATHS,
  digitalLifePath,
  lifeAreaPath,
  legalDocPath,
  blogPostPath,
  LIFE_AREA_SLUGS,
  DIGITAL_TOOL_SLUGS,
} from '@/config/paths';

export { PATHS, LIFE_AREA_SLUGS, DIGITAL_TOOL_SLUGS, digitalLifePath };

export const lifeAreasPath = lifeAreaPath;

export function digitalToolsPath() {
  return digitalLifePath();
}

export function modulesPath() {
  return digitalLifePath();
}

export { digitalLifePath as modulePath };
export const legalPath = legalDocPath;
export const blogPath = blogPostPath;

/** @deprecated use lifeAreaPath */
export const solutionPath = lifeAreaPath;

/** @deprecated use PATHS.deleteAccount */
export const supportPath = (section) => `/support/${section}`;
