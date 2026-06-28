import { useEffect } from 'react';
import { SITE } from '@/utils/constants';
import {
  DEFAULT_OG_IMAGE,
  SEO_DEFAULTS,
  resolveTitle,
  resolveCanonical,
} from '@/seo/defaults';
import { breadcrumbListJsonLd, jsonLdGraph } from '@/seo/structuredData';

function setMeta(name, content, attr = 'name') {
  if (content == null || content === '') return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(name, attr = 'name') {
  document.querySelector(`meta[${attr}="${name}"]`)?.remove();
}

function setLink(rel, href, extra = {}) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extra).forEach(([key, value]) => {
    if (value != null) el.setAttribute(key, value);
  });
}

function setJsonLd(data) {
  const id = 'bv-json-ld';
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  fullTitle,
  description,
  path = '/',
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  ogImageAlt,
  jsonLd,
  breadcrumbs,
  noIndex = false,
}) {
  const resolvedTitle = resolveTitle({ title, fullTitle });
  const desc = description || SEO_DEFAULTS.defaultDescription;
  const canonical = resolveCanonical(path);
  const kw = keywords || SEO_DEFAULTS.defaultKeywords;
  const imageAlt = ogImageAlt || `${SITE.name} — ${SITE.tagline}`;

  useEffect(() => {
    document.title = resolvedTitle;

    // Standard meta
    setMeta('description', desc);
    setMeta('keywords', kw);
    setMeta('author', SEO_DEFAULTS.author);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMeta('og:site_name', SEO_DEFAULTS.siteName, 'property');
    setMeta('og:title', resolvedTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:locale', SEO_DEFAULTS.locale, 'property');
    setMeta('og:locale:alternate', SEO_DEFAULTS.localeAlternate, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:image:alt', imageAlt, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');

    // Twitter
    setMeta('twitter:card', SEO_DEFAULTS.twitterCard);
    setMeta('twitter:site', SEO_DEFAULTS.twitterSite);
    setMeta('twitter:title', resolvedTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:image:alt', imageAlt);

    // Canonical
    setLink('canonical', canonical);

    // hreflang (default en-IN)
    setLink('alternate', canonical, { hreflang: 'en-in' });
    setLink('alternate', canonical, { hreflang: 'x-default' });

    // JSON-LD: merge page schema + breadcrumbs
    const breadcrumbSchema = breadcrumbs?.length
      ? breadcrumbListJsonLd(breadcrumbs)
      : null;
    const schema = jsonLdGraph(jsonLd, breadcrumbSchema);
    if (schema) {
      setJsonLd(schema);
    } else {
      document.getElementById('bv-json-ld')?.remove();
    }

    return () => {
      document.getElementById('bv-json-ld')?.remove();
      removeMeta('og:locale:alternate', 'property');
      document.querySelector('link[hreflang="en-in"]')?.remove();
      document.querySelector('link[hreflang="x-default"]')?.remove();
    };
  }, [
    resolvedTitle,
    desc,
    canonical,
    kw,
    ogImage,
    ogType,
    imageAlt,
    jsonLd,
    breadcrumbs,
    noIndex,
  ]);

  return null;
}
