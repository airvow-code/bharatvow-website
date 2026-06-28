import Container from '@/components/ui/Container';
import SEO from '@/seo/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import PageCtaBand from '@/components/templates/PageCtaBand';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';

/**
 * Standard inner-page shell: SEO → Breadcrumbs → Hero → Content → CTA.
 * Header and Footer are provided by MainLayout.
 */
export default function PageLayout({
  seo,
  breadcrumbs,
  hero,
  children,
  showCta = true,
  ctaProps,
  containerClassName,
  jsonLd,
}) {
  const pageJsonLd =
    jsonLd
    ?? (seo?.path && hero?.title
      ? jsonLdGraph(
          webPageJsonLd({
            title: hero.title,
            description: seo.description,
            path: seo.path,
          }),
        )
      : null);

  return (
    <>
      <SEO
        title={seo.title}
        fullTitle={seo.fullTitle}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
        breadcrumbs={breadcrumbs}
        noIndex={seo.noIndex}
        ogType={seo.ogType}
        jsonLd={pageJsonLd}
      />
      {breadcrumbs?.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      {hero && (
        <PageHeader
          eyebrow={hero.eyebrow}
          title={hero.title}
          lead={hero.lead}
        />
      )}
      {containerClassName ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
      {showCta && (
        <Container className="pb-section-y md:pb-section-y-lg">
          <PageCtaBand {...ctaProps} />
        </Container>
      )}
    </>
  );
}
