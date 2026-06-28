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
import { LEGAL_FOOTER_LINKS, getLegalRelatedDocs } from '@/data/legalHub';
import { SITE } from '@/utils/constants';
import { PATHS } from '@/config/paths';
import { cn } from '@/utils/cn';

function buildToc(sections = []) {
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

export default function LegalDocumentLayout({ page, children }) {
  const location = useLocation();
  const meta = getPageMeta(page.path);
  const crumbs = legalBreadcrumbs(page.title, page.path);
  const ogTitle = page.seo?.ogTitle ?? page.title;
  const ogDescription = page.seo?.ogDescription ?? page.description;
  const toc = useMemo(() => buildToc(page.sections), [page.sections]);
  const related = getLegalRelatedDocs(page.id);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash, page.path]);

  return (
    <>
      <SEO
        title={page.title}
        fullTitle={ogTitle}
        description={page.description}
        keywords={meta?.keywords ?? page.keywords}
        path={page.path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — ${page.title}`}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: page.title,
            description: ogDescription,
            path: page.path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={page.title} lead={page.lead} />

      <Container className="pb-section-y md:pb-section-y-lg">
        {(page.lastUpdated || page.effectiveDate) && (
          <p className="mx-auto mb-8 max-w-5xl text-sm text-muted">
            {page.effectiveDate && <>Effective date: {page.effectiveDate}</>}
            {page.effectiveDate && page.lastUpdated && ' · '}
            {page.lastUpdated && <>Last updated: {page.lastUpdated}</>}
          </p>
        )}

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
          <div className="min-w-0">
            {children ?? (
              <LegalProse
                sections={page.sections}
                className="px-0 py-0 md:px-0 md:py-0 lg:px-0"
              />
            )}

            {related.length > 0 && (
              <section
                className="mt-12 border-t border-border pt-10"
                aria-labelledby="related-legal-heading"
              >
                <h2 id="related-legal-heading" className="font-display text-lg font-bold text-heading">
                  Related legal documents
                </h2>
                <ul className="mt-4 space-y-2">
                  {related.map(({ title, path }) => (
                    <li key={path}>
                      <InternalLink to={path}>{title} →</InternalLink>
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

            <nav
              aria-label="Legal footer links"
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-8"
            >
              {LEGAL_FOOTER_LINKS.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm font-medium text-primary-light hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-border bg-surface p-5 shadow-sm">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-eyebrow">
                  On this page
                </p>
                <ul className="mt-4 max-h-[70vh] space-y-2 overflow-y-auto text-sm">
                  {toc.map(({ id, label, indent }) => (
                    <li key={id}>
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
