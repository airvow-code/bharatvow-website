/** Home page section anchors — use for nav/CTAs until inner pages ship */
export const HOME_ANCHORS = {
  moments: 'moments',
  lifeAreas: 'life-areas',
  modules: 'modules',
  screenshots: 'screenshots',
  story: 'morning-story',
  testimonials: 'testimonials',
  download: 'download',
};

export function homeAnchor(id) {
  return `/#${id}`;
}

export function areaAnchor(slug) {
  return `/#area-${slug}`;
}
