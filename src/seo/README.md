# seo

Document head, structured data, sitemap, and breadcrumb helpers.

| Module | Purpose |
|--------|---------|
| `SEO.jsx` | Meta tags, Open Graph, Twitter Card, canonical, hreflang, JSON-LD |
| `defaults.js` | Default OG image, keywords, per-page meta registry |
| `structuredData.js` | Organization, WebSite, WebPage, BreadcrumbList, MobileApplication |
| `sitemap.js` | Indexable URL list (source of truth) |
| `breadcrumbs.js` | Trail builders for legal & support pages |

## Usage

```jsx
import SEO from '@/seo/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { supportBreadcrumbs } from '@/seo/breadcrumbs';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';

const crumbs = supportBreadcrumbs('Contact', '/support/contact');

<>
  <SEO
    title="Contact"
    description="..."
    path="/support/contact"
    keywords="..."
    breadcrumbs={crumbs}
    jsonLd={jsonLdGraph(webPageJsonLd({ title, description, path }))}
  />
  <Breadcrumbs items={crumbs} />
</>
```

## Sitemap

```bash
npm run generate:sitemap   # writes public/sitemap.xml
```

Add new live routes to `sitemap.js` before deploy.

## Static files

- `public/robots.txt` — crawl rules + sitemap URL
- `public/sitemap.xml` — generated at build time
- `public/og/bharatvow-default.png` — OG/Twitter image (replace with 1200×630 before launch)

## index.html

Fallback meta tags for crawlers before React hydrates.
