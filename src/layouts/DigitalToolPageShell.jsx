import { useState } from 'react';
import SEO from '@/seo/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { DigitalToolPageTemplate } from '@/components/templates/digital-tool';
import {
  validateDigitalToolPageContent,
  validateDigitalToolTemplateContent,
  isDigitalToolTemplateContent,
} from '@/data/digitalToolPages/schema';
import {
  buildDigitalToolSeo,
  buildDigitalToolStructuredData,
} from '@/seo/digitalToolSeo';
import { getDigitalToolBreadcrumbs } from '@/utils/digitalToolPage';

/**
 * Page shell for `/digital-life/:slug` — SEO + breadcrumbs + 10-section template.
 * Not wired to live routes until USE_DIGITAL_TOOL_TEMPLATE is enabled.
 */
export default function DigitalToolPageShell({ module, content }) {
  const [openFaqId, setOpenFaqId] = useState(null);
  const seo = buildDigitalToolSeo(module, content);
  const crumbs = getDigitalToolBreadcrumbs(module);

  const validation = isDigitalToolTemplateContent(content)
    ? validateDigitalToolTemplateContent(content)
    : validateDigitalToolPageContent(content);
  if (!validation.valid && import.meta.env.DEV) {
    console.warn('[DigitalToolPageShell] Invalid content:', validation.errors);
  }

  const handleToggleFaq = (id) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.metaDescription}
        keywords={seo.keywords}
        path={seo.path}
        breadcrumbs={crumbs}
        ogType={seo.og.type}
        jsonLd={buildDigitalToolStructuredData(module, content, seo)}
      />
      <Breadcrumbs items={crumbs} />
      <DigitalToolPageTemplate
        module={module}
        content={content}
        openFaqId={openFaqId}
        onToggleFaq={handleToggleFaq}
      />
    </>
  );
}
