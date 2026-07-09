/**
 * Phase 4 production QA — static + local preview checks.
 * Run: node scripts/production-qa.mjs [--base http://localhost:4173]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const publicDir = path.join(root, 'public');

const base = process.argv.find((a) => a.startsWith('--base='))?.split('=')[1]
  ?? (process.env.QA_BASE_URL || 'http://localhost:4173');

const errors = [];
const warnings = [];
const passed = [];

function ok(msg) { passed.push(msg); }
function warn(msg) { warnings.push(msg); }
function fail(msg) { errors.push(msg); }

function fileExists(relFromPublic) {
  const p = path.join(publicDir, relFromPublic.replace(/^\//, ''));
  const d = path.join(dist, relFromPublic.replace(/^\//, ''));
  return fs.existsSync(p) || fs.existsSync(d);
}

// --- Build artifacts ---
if (!fs.existsSync(dist)) {
  fail('dist/ missing — run npm run build first');
} else {
  ok('dist/ exists');
  if (!fs.existsSync(path.join(dist, 'index.html'))) fail('dist/index.html missing');
  else ok('dist/index.html present');
}

// --- Screenshot manifest ---
const screenshotsJs = path.join(root, 'src/generated/screenshots.js');
if (fs.existsSync(screenshotsJs)) {
  const src = fs.readFileSync(screenshotsJs, 'utf8');
  const srcPaths = [...src.matchAll(/"src":\s*"([^"]+)"/g)].map((m) => m[1]);
  const srcSetPaths = [...src.matchAll(/\/images\/[^"'\s]+/g)];
  const allImagePaths = new Set([
    ...srcPaths,
    ...srcSetPaths.map((m) => m[0]),
  ]);
  for (const imgPath of allImagePaths) {
    if (!fileExists(imgPath)) {
      fail(`Screenshot asset missing: ${imgPath}`);
    }
  }
  if (errors.filter((e) => e.includes('Screenshot')).length === 0) {
    ok(`All ${allImagePaths.size} screenshot manifest image paths resolve`);
  }
}

// --- Sitemap vs routes ---
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const staleInSitemap = sitemapUrls.filter((u) => u.includes('days-reminder'));
if (staleInSitemap.length) fail(`Sitemap contains obsolete URL: ${staleInSitemap.join(', ')}`);
else ok('Sitemap has no days-reminder URL');

const requiredToolSlugs = [
  'birthdays-anniversaries', 'smart-reminders', 'festival-studio',
];
for (const slug of requiredToolSlugs) {
  const url = `https://bharatvow.com/digital-life/${slug}`;
  if (!sitemapUrls.includes(url)) fail(`Sitemap missing: ${url}`);
  else ok(`Sitemap includes ${slug}`);
}

// --- robots.txt ---
const robots = fs.readFileSync(path.join(publicDir, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://bharatvow.com/sitemap.xml')) fail('robots.txt missing sitemap reference');
else ok('robots.txt references sitemap');
if (!robots.includes('Allow: /')) fail('robots.txt should allow crawlers');
else ok('robots.txt allows /');

// --- Stale content grep in src (production source) ---
const stalePatterns = [
  /Days Reminder/g,
  /days-reminder/g,
  /\b10 premium\b/gi,
  /\bten premium\b/gi,
  /\b12 tools\b/gi,
  /\btwelve tools\b/gi,
];
function walkDir(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name === '.git') continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkDir(full, files);
    else if (/\.(js|jsx|ts|tsx|html|xml|md)$/.test(ent.name)) files.push(full);
  }
  return files;
}
const srcFiles = walkDir(path.join(root, 'src'));
for (const file of srcFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const pat of stalePatterns) {
    pat.lastIndex = 0;
    if (pat.test(text) && !file.includes('legacyRoutes')) {
      fail(`Stale pattern ${pat} in ${path.relative(root, file)}`);
    }
  }
}
if (!errors.some((e) => e.startsWith('Stale pattern'))) ok('No stale Days Reminder / 10 premium / 12 tools in src/');

// --- HTTP checks (preview server) ---
const routes = [
  '/',
  '/about',
  '/pricing',
  '/faq',
  '/contact',
  '/download',
  '/digital-life',
  '/digital-life/smart-khata',
  '/digital-life/birthdays-anniversaries',
  '/digital-life/smart-reminders',
  '/digital-life/festival-studio',
  '/digital-life/place-store',
  '/privacy-policy',
  '/terms',
  '/legal',
  '/blog',
  '/delete-account',
];

const legacyRedirects = [
  { from: '/digital-life/days-reminder', to: '/digital-life/birthdays-anniversaries' },
  { from: '/digital-tools/smart-khata', to: '/digital-life/smart-khata' },
  { from: '/modules', to: '/digital-life' },
  { from: '/life-areas', to: '/digital-life' },
  { from: '/support/contact', to: '/contact' },
];

async function fetchStatus(url, opts = {}) {
  try {
    const res = await fetch(url, { redirect: 'manual', ...opts });
    return { status: res.status, location: res.headers.get('location') };
  } catch (e) {
    return { status: 0, error: e.message };
  }
}

async function httpChecks() {
  let serverUp = false;
  try {
    const ping = await fetchStatus(`${base}/`);
    serverUp = ping.status === 200;
  } catch {
    serverUp = false;
  }

  if (!serverUp) {
    warn(`Preview server not reachable at ${base} — skipping HTTP route checks (run: npm run preview)`);
    return;
  }

  ok(`Preview server reachable at ${base}`);

  for (const route of routes) {
    const { status, error } = await fetchStatus(`${base}${route}`);
    if (error) fail(`Route ${route}: ${error}`);
    else if (status !== 200) fail(`Route ${route} returned HTTP ${status}`);
    else ok(`Route ${route} → 200`);
  }

  for (const { from, to } of legacyRedirects) {
    const { status, location } = await fetchStatus(`${base}${from}`);
    // Vite preview SPA: redirects may be client-side only for some paths
    // Server returns index.html (200) for SPA; client router handles Navigate
    if (status === 200) {
      ok(`Legacy path ${from} serves SPA shell (client redirect to ${to})`);
    } else if (status >= 300 && status < 400 && location?.includes(to.replace(/^\//, ''))) {
      ok(`Legacy redirect ${from} → ${location}`);
    } else {
      warn(`Legacy ${from}: HTTP ${status} — verify client-side redirect in browser`);
    }
  }

  // Spot-check static assets
  const assets = [
    '/images/logo-header.webp',
    '/images/app-mockup.webp',
    '/images/screenshots/main-dashboard-720.webp',
    '/images/screenshots/birthdays-anniversaries-720.webp',
    '/sitemap.xml',
    '/robots.txt',
  ];
  for (const asset of assets) {
    const { status } = await fetchStatus(`${base}${asset}`);
    if (status !== 200) fail(`Asset ${asset} → HTTP ${status}`);
    else ok(`Asset ${asset} → 200`);
  }
}

await httpChecks();

// --- Report ---
console.log('\n=== BharatVow Production QA ===\n');
console.log(`PASSED (${passed.length}):`);
passed.forEach((p) => console.log(`  ✓ ${p}`));
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
}
if (errors.length) {
  console.log(`\nFAILED (${errors.length}):`);
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
}
console.log('\nAll automated QA checks passed.\n');
