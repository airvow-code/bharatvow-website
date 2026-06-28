import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import SurfaceCard from '@/components/ui/SurfaceCard';
import OptimizedImage from '@/components/common/OptimizedImage';
import PageCtaBand from '@/components/templates/PageCtaBand';
import { MODULES_PAGE, getDashboardModules } from '@/data/modules';
import { getScreenshot } from '@/generated/screenshots';
import { prefetchDigitalToolPage } from '@/data/digitalToolPages';
import { prefetchRoute } from '@/router/prefetch';
import { digitalLifePath } from '@/utils/routes';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'Digital Life', path: MODULES_PAGE.path },
];

export default function DigitalToolsHub() {
  const meta = getPageMeta(MODULES_PAGE.path);
  const tools = getDashboardModules();

  return (
    <>
      <SEO
        title={MODULES_PAGE.title}
        description={MODULES_PAGE.description}
        keywords={meta?.keywords ?? MODULES_PAGE.keywords}
        path={MODULES_PAGE.path}
        breadcrumbs={crumbs}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: MODULES_PAGE.headline,
            description: MODULES_PAGE.description,
            path: MODULES_PAGE.path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={MODULES_PAGE.headline} lead={MODULES_PAGE.intro} />

      <Container className="pb-section-y md:pb-section-y-lg">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((mod) => {
            const Icon = mod.icon;
            const screenshot = mod.screenshotId ? getScreenshot(mod.screenshotId) : null;
            const hasShot = screenshot && !screenshot.isPlaceholder;

            return (
              <li key={mod.slug} className="list-none">
                <SurfaceCard hover="lift" className="flex h-full flex-col p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <Icon size={20} strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-semibold text-heading">{mod.name}</h3>
                        {mod.free && <Badge variant="free">Free</Badge>}
                      </div>
                      <p className="mt-1 text-sm text-heading">{mod.purpose}</p>
                      <p className="mt-1 text-sm text-muted">{mod.problem}</p>
                    </div>
                  </div>

                  {hasShot && (
                    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-canvas">
                      <OptimizedImage
                        src={screenshot.src}
                        srcSet={screenshot.srcSet}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        alt={`${mod.name} screen in BharatVow app`}
                        width={screenshot.width}
                        height={screenshot.height}
                        className="h-auto w-full"
                      />
                    </div>
                  )}

                  <Link
                    to={digitalLifePath(mod.slug)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    onMouseEnter={() => {
                      prefetchRoute(digitalLifePath(mod.slug));
                      prefetchDigitalToolPage(mod.slug);
                    }}
                    onFocus={() => {
                      prefetchRoute(digitalLifePath(mod.slug));
                      prefetchDigitalToolPage(mod.slug);
                    }}
                  >
                    Learn more
                    <ArrowRight size={16} strokeWidth={2} aria-hidden />
                  </Link>
                </SurfaceCard>
              </li>
            );
          })}
        </ul>

        <div className="mt-14">
          <PageCtaBand />
        </div>
      </Container>
    </>
  );
}
