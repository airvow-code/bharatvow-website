import { Check, Smartphone, ExternalLink } from 'lucide-react';
import PageLayout from '@/layouts/PageLayout';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { InternalLink } from '@/components/common/LegalProse';
import { DOWNLOAD_PAGE } from '@/data/download';
import { SITE } from '@/utils/constants';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'Download', path: DOWNLOAD_PAGE.path },
];

const playStoreLive = SITE.playStoreUrl !== '#' && SITE.playStoreUrl.startsWith('http');

export default function Download() {
  return (
    <PageLayout
      seo={{
        title: DOWNLOAD_PAGE.title,
        fullTitle: DOWNLOAD_PAGE.seo.ogTitle,
        description: DOWNLOAD_PAGE.description,
        keywords: DOWNLOAD_PAGE.keywords,
        path: DOWNLOAD_PAGE.path,
      }}
      breadcrumbs={crumbs}
      hero={{
        title: DOWNLOAD_PAGE.headline,
        lead: DOWNLOAD_PAGE.lead,
      }}
      showCta={false}
    >
      <Container className="pb-section-y md:pb-section-y-lg">
        <div className="mx-auto max-w-3xl">
          <SurfaceCard variant="moment" className="p-6 text-center md:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-soft text-secondary-dark">
              <Smartphone size={28} strokeWidth={2} aria-hidden />
            </div>
            <h2 className="mt-5 font-display text-xl font-bold text-heading md:text-2xl">
              Android on Google Play
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {DOWNLOAD_PAGE.trialNote}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {DOWNLOAD_PAGE.inAppBalanceNote}
            </p>
            {SITE.androidPackageName && (
              <p className="mx-auto mt-3 text-xs text-muted">
                Android app ID: <code className="text-body">{SITE.androidPackageName}</code>
              </p>
            )}

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                href={SITE.playStoreUrl}
                size="lg"
                external
                className="w-full sm:w-auto"
                aria-disabled={!playStoreLive || undefined}
              >
                {DOWNLOAD_PAGE.primaryCta}
                {playStoreLive && <ExternalLink size={18} strokeWidth={2} aria-hidden />}
              </Button>
              <Button to={DOWNLOAD_PAGE.secondaryHref} variant="outline" size="lg" className="w-full sm:w-auto">
                {DOWNLOAD_PAGE.secondaryCta}
              </Button>
            </div>

            {!playStoreLive && (
              <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-muted">{DOWNLOAD_PAGE.playStorePending}</p>
            )}
          </SurfaceCard>

          <section className="mt-12 md:mt-16" aria-labelledby="download-steps-heading">
            <h2 id="download-steps-heading" className="font-display text-xl font-bold text-heading md:text-2xl">
              How to install
            </h2>
            <ol className="mt-6 space-y-3">
              {DOWNLOAD_PAGE.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-body md:px-5 md:py-4"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-bold text-primary"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 md:mt-16" aria-labelledby="download-free-tools-heading">
            <h2 id="download-free-tools-heading" className="font-display text-xl font-bold text-heading md:text-2xl">
              {DOWNLOAD_PAGE.freeTools.heading}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {DOWNLOAD_PAGE.freeTools.tools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-body"
                >
                  <Check size={16} strokeWidth={2.5} className="shrink-0 text-accent-green" aria-hidden />
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <nav className="mt-12 border-t border-border pt-8 md:mt-16" aria-label="Related download help">
            <p className="text-sm font-medium text-heading">Helpful links</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {DOWNLOAD_PAGE.helpLinks.map(({ label, path }) => (
                <li key={path}>
                  <InternalLink to={path}>{label}</InternalLink>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-10 text-center text-xs text-muted">
            {DOWNLOAD_PAGE.company} · {SITE.tagline}
          </p>
        </div>
      </Container>
    </PageLayout>
  );
}
