import { useParams, Navigate } from 'react-router-dom';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { legalBreadcrumbs } from '@/seo/breadcrumbs';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import LegalProse from '@/components/common/LegalProse';
import { getLegalPage } from '@/data/legal';

export default function LegalPage() {
  const { doc } = useParams();
  const page = getLegalPage(doc);

  if (!page) {
    return <Navigate to="/legal" replace />;
  }

  const meta = getPageMeta(page.path);
  const crumbs = legalBreadcrumbs(page.title, page.path);

  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        keywords={meta?.keywords}
        path={page.path}
        breadcrumbs={crumbs}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: page.title,
            description: page.description,
            path: page.path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={page.title} lead={page.lead} />
      <LegalProse
        sections={page.sections}
        effectiveDate={page.effectiveDate}
        lastUpdated={page.lastUpdated}
      />
    </>
  );
}
