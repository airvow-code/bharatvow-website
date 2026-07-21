import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { legalBreadcrumbs } from '@/seo/breadcrumbs';
import { webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import LegalProse, { InternalLink, slugifyLegalHeading } from '@/components/common/LegalProse';
import LegalDocumentMeta, { formatLegalDate } from '@/components/common/LegalDocumentMeta';
import LegalMarkdown, { buildMarkdownToc } from '@/components/common/LegalMarkdown';
import LegalDocumentStatus from '@/components/common/LegalDocumentStatus';
import { LEGAL_FOOTER_LINKS, getLegalRelatedDocs } from '@/data/legalHub';
import { SITE } from '@/utils/constants';
import { PATHS } from '@/config/paths';
import { cn } from '@/utils/cn';

function buildTocFromSections(sections = []) {
  const items = [];
  sections.forEach((section) => {
    items.push({ id: slugifyLegalHeading(section.heading), label: section.heading });
    section.subsections?.forEach((sub) => {
      items.push({
        id: slugifyLegalHeading(sub.heading),
        label: sub.heading,
        indent: true,
      });
    });
  });
  return items;
}

/**
 * @param {object} props
 * @param {object} props.page — layout shell (title, path, description, …)
 * @param {'static'|'api'} [props.mode]
 * @param {object} [props.apiDoc] — API payload when mode=api success
 * @param {'loading'|'success'|'error'} [props.apiStatus]
 * @param {string} [props.errorKind]
 * @param {string} [props.errorMessage]
 * @param {() => void} [props.onRetry]
 * @param {import('react').ReactNode} [props.children]
 */
export default function LegalDocumentLayout({
  page,
  children,
  mode = 'static',
  apiDoc = null,
  apiStatus = null,
  errorKind = null,
  errorMessage = null,
  onRetry,
}) {
  const location = useLocation();
  const title = apiDoc?.title || page.title;
  const description = apiDoc?.summary || page.description;
  const path = page.path;
  const meta = getPageMeta(path);
  const crumbs = legalBreadcrumbs(title, path);
  const ogTitle = page.seo?.ogTitle ?? title;
  const ogDescription = page.seo?.ogDescription ?? description;
  const related = getLegalRelatedDocs(page.id || page.documentId);

  const toc = useMemo(() => {
    if (mode === 'api' && apiDoc?.content) {
      return buildMarkdownToc(apiDoc.content);
    }
    return buildTocFromSections(page.sections);
  }, [mode, apiDoc?.content, page.sections]);

  const version = apiDoc?.version ?? page.version ?? null;
  const effectiveDate = formatLegalDate(apiDoc?.effectiveDate ?? page.effectiveDate);
  const lastUpdated = formatLegalDate(
    apiDoc?.publishedDate ?? apiDoc?.effectiveDate ?? page.lastUpdated,
  );
  const showMeta = Boolean(version || effectiveDate || lastUpdated) && apiStatus !== 'error';

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash, path, apiStatus]);

  let body;
  if (children) {
    body = children;
  } else if (mode === 'api') {
    if (apiStatus === 'loading') {
      body = <p className="text-base text-muted">Loading document…</p>;
    } else if (apiStatus === 'error') {
      body = (
        <LegalDocumentStatus kind={errorKind} message={errorMessage} onRetry={onRetry} />
      );
    } else if (apiDoc?.content) {
      body = <LegalMarkdown content={apiDoc.content} className="px-0 py-0" />;
    } else {
      body = <LegalDocumentStatus kind="not_found" />;
    }
  } else {
    body = (
      <LegalProse sections={page.sections} className="px-0 py-0 md:px-0 md:py-0 lg:px-0" />
    );
  }

  return (
    <>
      <SEO
        title={title}
        fullTitle={ogTitle}
        description={description}
        keywords={meta?.keywords ?? page.keywords}
        path={path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — ${title}`}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title,
            description: ogDescription,
            path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title={title}
        lead={page.lead}
        meta={
          showMeta ? (
            <LegalDocumentMeta
              variant="header"
              version={version}
              effectiveDate={effectiveDate}
              lastUpdated={lastUpdated}
              className="mt-5"
            />
          ) : null
        }
      />

      <Container className="pb-section-y md:pb-section-y-lg">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
          <div className="min-w-0">
            {body}

            {related.length > 0 && apiStatus !== 'loading' && (
              <section
                className="mt-12 border-t border-border pt-10"
                aria-labelledby="related-legal-heading"
              >
                <h2 id="related-legal-heading" className="font-display text-lg font-bold text-heading">
                  Related legal documents
                </h2>
                <ul className="mt-4 space-y-2">
                  {related.map(({ title: relatedTitle, path: relatedPath }) => (
                    <li key={relatedPath}>
                      <InternalLink to={relatedPath}>{relatedTitle} →</InternalLink>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-12 rounded-2xl border border-border bg-canvas/80 px-6 py-8 md:px-8">
              <div className="flex items-start gap-3">
                <Mail size={22} strokeWidth={2} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <div>
                  <h2 className="font-display text-lg font-semibold text-heading">Contact Support</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Questions about this policy? Email{' '}
                    <a href={`mailto:${SITE.email}`} className="font-medium text-primary-light hover:text-primary">
                      {SITE.email}
                    </a>{' '}
                    or visit our{' '}
                    <InternalLink to={PATHS.contact}>Contact page</InternalLink>.
                  </p>
                  <Button to={PATHS.contact} variant="outline" size="sm" className="mt-4 gap-2">
                    Contact Support
                    <ArrowRight size={16} strokeWidth={2} aria-hidden />
                  </Button>
                </div>
              </div>
            </section>

            {showMeta && (
              <LegalDocumentMeta
                variant="footer"
                version={version}
                effectiveDate={effectiveDate}
                lastUpdated={lastUpdated}
                className="mt-10 border-t border-border pt-6"
              />
            )}

            <nav
              aria-label="Legal footer links"
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-8"
            >
              {LEGAL_FOOTER_LINKS.map(({ label, path: footerPath }) => (
                <Link
                  key={footerPath}
                  to={footerPath}
                  className="text-sm font-medium text-primary-light hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {toc.length > 0 && apiStatus !== 'error' && apiStatus !== 'loading' && (
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-border bg-surface p-5 shadow-sm">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-eyebrow">
                  On this page
                </p>
                <ul className="mt-4 max-h-[70vh] space-y-2 overflow-y-auto text-sm">
                  {toc.map(({ id, label, indent }) => (
                    <li key={`${id}-${label}`}>
                      <a
                        href={`#${id}`}
                        className={cn(
                          'block leading-snug text-muted transition-colors hover:text-primary',
                          indent && 'pl-3 text-xs',
                        )}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </Container>
    </>
  );
}
