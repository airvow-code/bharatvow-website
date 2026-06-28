import { DEFAULT_RELATED_TOOL_COUNT } from '@/config/digitalTools';
import { DASHBOARD_TOOL_SLUGS, getModule } from '@/data/modules';
import { getScreenshot } from '@/generated/screenshots';
import { buildDigitalToolSeo } from '@/seo/digitalToolSeo';
import { digitalLifePath } from '@/utils/routes';

/**
 * @param {import('@/data/modules').Module} module
 */
export function getDigitalToolBreadcrumbs(module) {
  const path = digitalLifePath(module.slug);
  return [
    { label: 'Home', path: '/' },
    { label: 'Digital Life', path: digitalLifePath() },
    { label: module.name, path },
  ];
}

/**
 * Resolve connected tools with module metadata and integration copy.
 * @param {import('@/data/digitalToolPages/schema.js').DigitalToolConnection[]} connections
 */
export function resolveConnectedDigitalTools(connections) {
  return connections
    .map(({ slug, integration }) => {
      const mod = getModule(slug);
      if (!mod || !integration?.trim()) return null;
      return { slug, integration, module: mod };
    })
    .filter(Boolean);
}

/**
 * @deprecated use resolveConnectedDigitalTools
 */
export function getRelatedDigitalTools(slug, relatedSlugs) {
  const slugs =
    relatedSlugs?.length > 0
      ? relatedSlugs
      : DASHBOARD_TOOL_SLUGS.filter((s) => s !== slug).slice(0, DEFAULT_RELATED_TOOL_COUNT);

  return slugs
    .map((s) => {
      const mod = getModule(s);
      return mod ? { slug: s, integration: '', module: mod } : null;
    })
    .filter(Boolean);
}

/**
 * @param {import('@/data/digitalToolPages/schema.js').DigitalToolScreenshot[]} items
 */
export function resolveDigitalToolScreenshots(items) {
  return items
    .map((item) => {
      const shot = getScreenshot(item.id);
      if (!shot || shot.isPlaceholder) return null;
      return {
        ...item,
        screen: {
          ...shot,
          alt: `${item.label} — BharatVow app screen`,
        },
      };
    })
    .filter(Boolean);
}

/**
 * @param {import('@/data/modules').Module} module
 * @param {import('@/data/digitalToolPages/schema.js').DigitalToolPageContent} content
 */
export function getDigitalToolPageMeta(module, content) {
  const seo = buildDigitalToolSeo(module, content);
  return {
    title: seo.title,
    description: seo.metaDescription,
    path: seo.path,
    keywords: seo.keywords,
    canonical: seo.canonical,
    og: seo.og,
    h1: seo.h1,
  };
}
