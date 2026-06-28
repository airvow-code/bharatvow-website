/**
 * Generates public/sitemap.xml from src/seo/sitemap.js
 * Run: npm run generate:sitemap
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SITEMAP_ENTRIES } from '../src/seo/sitemap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://bharatvow.com';
const lastmod = new Date().toISOString().split('T')[0];

const urls = SITEMAP_ENTRIES.map(
  ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${routePath === '/' ? '/' : routePath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = path.resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`Generated ${outPath} (${SITEMAP_ENTRIES.length} URLs)`);
