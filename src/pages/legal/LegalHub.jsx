import { ArrowRight } from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { LEGAL_HUB, LEGAL_HUB_CARDS } from '@/data/legalHub';
import { SITE } from '@/utils/constants';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'Legal Center', path: LEGAL_HUB.path },
];

export default function LegalHub() {
  const meta = getPageMeta(LEGAL_HUB.path);
  const ogTitle = LEGAL_HUB.seo?.ogTitle ?? LEGAL_HUB.title;
  const ogDescription = LEGAL_HUB.seo?.ogDescription ?? LEGAL_HUB.description;

  return (
    <>
      <SEO
        title={LEGAL_HUB.title}
        fullTitle={ogTitle}
        description={LEGAL_HUB.description}
        keywords={meta?.keywords ?? LEGAL_HUB.keywords}
        path={LEGAL_HUB.path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — Legal Center`}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: LEGAL_HUB.headline,
            description: ogDescription,
            path: LEGAL_HUB.path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={LEGAL_HUB.headline} lead={LEGAL_HUB.intro} />

      <Container className="pb-section-y md:pb-section-y-lg">
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          {LEGAL_HUB_CARDS.map(({ id, path, icon: Icon, title, description }) => (
            <li key={id} className="list-none">
              <SurfaceCard hover="lift" className="flex h-full flex-col p-6 motion-safe:animate-fade-up">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-heading">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <Button to={path} variant="outline" size="sm" className="mt-6 w-fit gap-2">
                  Read More
                  <ArrowRight size={16} strokeWidth={2} aria-hidden />
                </Button>
              </SurfaceCard>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
