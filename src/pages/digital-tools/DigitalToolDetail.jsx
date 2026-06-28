import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SEO from '@/seo/SEO';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageSkeleton from '@/components/common/PageSkeleton';
import ModulePageLayout from '@/components/templates/ModulePageLayout';
import DigitalToolPageShell from '@/layouts/DigitalToolPageShell';
import { getModule } from '@/data/modules';
import { hasDigitalToolPage, loadDigitalToolPage } from '@/data/digitalToolPages';
import { digitalLifePath } from '@/utils/routes';

export default function DigitalToolDetail() {
  const { slug } = useParams();
  const module = getModule(slug);
  const [openFaqId, setOpenFaqId] = useState(null);
  const [toolContent, setToolContent] = useState(null);
  const [contentReady, setContentReady] = useState(false);
  const [legacyPage, setLegacyPage] = useState(null);
  const [legacyMeta, setLegacyMeta] = useState(null);

  useEffect(() => {
    if (!module || !slug) return undefined;

    let cancelled = false;

    if (hasDigitalToolPage(slug)) {
      setLegacyPage(null);
      setLegacyMeta(null);
      setContentReady(false);
      loadDigitalToolPage(slug).then((content) => {
        if (!cancelled) {
          setToolContent(content);
          setContentReady(true);
        }
      });
      return () => {
        cancelled = true;
      };
    }

    setToolContent(null);
    setContentReady(false);
    Promise.all([
      import('@/data/modulePages'),
    ]).then(([modulePagesMod]) => {
      if (cancelled) return;
      const page = modulePagesMod.getModulePage(slug);
      const meta = modulePagesMod.getModuleMeta(slug, module.name);
      setLegacyPage(page);
      setLegacyMeta(meta);
      setContentReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [module, slug]);

  if (!module) {
    return <Navigate to={digitalLifePath()} replace />;
  }

  if (!contentReady) {
    return <PageSkeleton label={`Loading ${module.name}`} />;
  }

  if (hasDigitalToolPage(slug) && toolContent) {
    return (
      <DigitalToolPageShell
        module={module}
        content={toolContent}
      />
    );
  }

  if (!legacyPage) {
    return <Navigate to={digitalLifePath()} replace />;
  }

  const path = digitalLifePath(slug);
  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Digital Life', path: digitalLifePath() },
    { label: module.name, path },
  ];

  const handleToggleFaq = (id) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <>
      <SEO
        title={legacyMeta?.title ?? module.name}
        description={legacyMeta?.description ?? legacyPage.purpose}
        path={path}
        breadcrumbs={crumbs}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: legacyPage.headline,
            description: legacyPage.purpose,
            path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <ModulePageLayout
        module={module}
        page={legacyPage}
        openFaqId={openFaqId}
        onToggleFaq={handleToggleFaq}
      />
    </>
  );
}
