import { SITE } from '@/utils/constants';
import { digitalLifePath } from '@/utils/routes';
import { webPageJsonLd, softwareApplicationJsonLd, faqPageJsonLd, jsonLdGraph } from '@/seo/structuredData';

/**
 * Reusable SEO structure for every Digital Tool page.
 *
 * | Field            | Source                                      |
 * |------------------|---------------------------------------------|
 * | Page Title       | seo.title or "{ToolName} \| BharatVow Digital Tools" |
 * | Meta Description | seo.metaDescription or valueProposition     |
 * | H1               | module.name (Hero only)                     |
 * | H2               | One per section — see framework.js          |
 * | Canonical        | {SITE.url}/digital-life/{slug}             |
 * | Open Graph       | title, description, url, type=website       |
 * | Structured Data  | WebPage + SoftwareApplication placeholders  |
 */

const META_DESCRIPTION_MAX = 160;

/**
 * @param {import('@/data/modules').Module} module
 * @param {import('@/data/digitalToolPages/schema.js').DigitalToolPageContent} content
 */
export function buildDigitalToolSeo(module, content) {
  const path = digitalLifePath(module.slug);
  const canonical = `${SITE.url}${path}`;

  const title = content.seo?.title?.trim()
    || `${module.name} | BharatVow Digital Tools`;

  const rawDescription = content.seo?.metaDescription?.trim() || content.valueProposition;
  const metaDescription = truncateMeta(rawDescription, META_DESCRIPTION_MAX);

  const ogTitle = content.seo?.ogTitle?.trim() || title;
  const ogDescription = content.seo?.ogDescription?.trim() || metaDescription;

  return {
    title,
    metaDescription,
    keywords: content.seo?.keywords?.trim() || defaultKeywords(module),
    path,
    canonical,
    h1: module.name,
    og: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      type: 'website',
      siteName: SITE.name,
    },
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Digital Life', path: '/digital-life' },
      { label: module.name, path },
    ],
  };
}

/**
 * Structured data placeholders for Digital Tool pages.
 * @param {import('@/data/modules').Module} module
 * @param {import('@/data/digitalToolPages/schema.js').DigitalToolPageContent} content
 * @param {ReturnType<typeof buildDigitalToolSeo>} seo
 */
export function buildDigitalToolStructuredData(module, content, seo) {
  const nodes = [
    webPageJsonLd({
      title: seo.h1,
      description: seo.metaDescription,
      path: seo.path,
    }),
    softwareApplicationJsonLd(),
  ];

  if (content.faq?.length) {
    nodes.push(
      faqPageJsonLd(
        content.faq.map((item) => ({ question: item.q, answer: item.a })),
      ),
    );
  }

  return jsonLdGraph(...nodes);
}

/**
 * @param {import('@/data/modules').Module} module
 */
function defaultKeywords(module) {
  return [
    module.name,
    'BharatVow',
    'BharatVow Digital Tools',
    'digital life organizer',
    'personal organization app India',
    module.lifeArea?.replace('-', ' '),
  ]
    .filter(Boolean)
    .join(', ');
}

function truncateMeta(text, max) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}
