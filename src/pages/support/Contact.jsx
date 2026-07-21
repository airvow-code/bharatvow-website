import { Mail, Phone, MapPin, Clock, Building2, Globe, HelpCircle } from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import {
  contactPageJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  jsonLdGraph,
} from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { InternalLink } from '@/components/common/LegalProse';
import { CONTACT } from '@/data/support';
import { SITE } from '@/utils/constants';
import { cn } from '@/utils/cn';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'Contact', path: CONTACT.path },
];

const addressOption = CONTACT.supportOptions.find((option) => option.id === 'address');

export default function Contact() {
  const meta = getPageMeta(CONTACT.path);
  const ogTitle = CONTACT.seo?.ogTitle ?? CONTACT.title;
  const ogDescription = CONTACT.seo?.ogDescription ?? CONTACT.description;

  return (
    <>
      <SEO
        title={CONTACT.title}
        fullTitle={ogTitle}
        description={CONTACT.description}
        keywords={meta?.keywords ?? CONTACT.keywords}
        path={CONTACT.path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — ${SITE.tagline}`}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: CONTACT.headline,
            description: ogDescription,
            path: CONTACT.path,
          }),
          contactPageJsonLd(),
          organizationJsonLd(),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={CONTACT.headline} lead={CONTACT.intro} />

      <Container className="pb-section-y md:pb-section-y-lg">
        {/* Support channels */}
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-6">
          <SurfaceCard hover="lift" className="p-6 motion-safe:animate-fade-up">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Mail size={20} strokeWidth={2} aria-hidden />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-heading">General Support</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              For general questions, technical assistance and product support.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex break-anywhere items-center gap-2 text-sm font-medium text-primary-light hover:text-primary"
            >
              <Mail size={16} strokeWidth={2} aria-hidden />
              {SITE.email}
            </a>
            <p className="mt-3 text-xs text-muted">
              Privacy enquiries:{' '}
              <a
                href={`mailto:${SITE.privacyEmail}?subject=${encodeURIComponent('Privacy Request')}`}
                className="text-primary-light hover:text-primary"
              >
                {SITE.privacyEmail}
              </a>{' '}
              — use subject &ldquo;Privacy Request&rdquo;.
            </p>
          </SurfaceCard>

          <SurfaceCard hover="lift" className="p-6 motion-safe:animate-fade-up">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Phone size={20} strokeWidth={2} aria-hidden />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-heading">Phone Support</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Call during business hours for app help and account-related questions.
            </p>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="mt-4 inline-flex break-anywhere items-center gap-2 text-sm font-medium text-primary-light hover:text-primary"
            >
              <Phone size={16} strokeWidth={2} aria-hidden />
              {SITE.phone}
            </a>
            <p className="mt-3 flex items-start gap-2 text-xs text-muted">
              <Clock size={14} strokeWidth={2} className="mt-0.5 shrink-0" aria-hidden />
              <span>
                {CONTACT.businessHours.days}
                <br />
                {CONTACT.businessHours.time}
              </span>
            </p>
          </SurfaceCard>

          <SurfaceCard hover="lift" className="p-6 motion-safe:animate-fade-up">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <MapPin size={20} strokeWidth={2} aria-hidden />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-heading">Business Address</h2>
            {addressOption?.description && (
              <p className="mt-1 text-xs leading-relaxed text-muted">{addressOption.description}</p>
            )}
            <address className="mt-3 not-italic text-sm leading-relaxed text-body">
              <span className="font-medium text-heading">{SITE.company}</span>
              {addressOption?.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-xs text-muted">
              Grievance enquiries:{' '}
              <a
                href={`mailto:${SITE.grievanceEmail}?subject=${encodeURIComponent('Grievance')}`}
                className="text-primary-light hover:text-primary"
              >
                {SITE.grievanceEmail}
              </a>{' '}
              with subject &ldquo;Grievance&rdquo;. See{' '}
              <InternalLink to="/grievance-redressal">Grievance Redressal</InternalLink>.
            </p>
            <p className="mt-3 text-xs text-muted">
              {CONTACT.grievanceOfficerNote}{' '}
              <InternalLink to="/grievance-redressal">Grievance procedure →</InternalLink>
            </p>
          </SurfaceCard>
        </div>

        {/* Business hours */}
        <SurfaceCard className="mx-auto mt-6 max-w-5xl p-5 md:mt-8 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-soft text-secondary-dark">
              <Clock size={20} strokeWidth={2} aria-hidden />
            </div>
            <div>
              <h2 className="font-display font-semibold text-heading">{CONTACT.businessHours.title}</h2>
              <p className="mt-1 text-sm text-muted">
                {CONTACT.businessHours.days} · {CONTACT.businessHours.time}
              </p>
            </div>
          </div>
        </SurfaceCard>

        {/* What to expect — primary information section */}
        <section
          className="mx-auto mt-12 max-w-5xl md:mt-16"
          aria-labelledby="contact-expect-heading"
        >
          <SurfaceCard variant="moment" className="p-6 md:p-10 lg:p-12">
            <h2
              id="contact-expect-heading"
              className="font-display text-xl font-bold text-heading md:text-2xl"
            >
              {CONTACT.responseInfo.title}
            </h2>
            <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
              {CONTACT.responseInfo.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </SurfaceCard>
        </section>

        {/* Company information — trust anchor */}
        <SurfaceCard className="mx-auto mt-12 max-w-5xl p-7 md:mt-16 md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Building2 size={20} strokeWidth={2} aria-hidden />
            </span>
            <h2 className="font-display text-xl font-bold text-heading md:text-2xl">
              {CONTACT.company.title}
            </h2>
          </div>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT.company.fields.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted">{label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-heading">
                  {href ? (
                    <a
                      href={href}
                      className="inline-flex items-center gap-1.5 break-anywhere text-primary-light hover:text-primary"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {href.startsWith('http') && <Globe size={14} strokeWidth={2} aria-hidden />}
                      {href.startsWith('mailto') && <Mail size={14} strokeWidth={2} aria-hidden />}
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </SurfaceCard>

        {/* Need help links */}
        <section
          className="mx-auto mt-12 max-w-5xl border-t border-border pt-10 md:mt-14"
          aria-labelledby="contact-help-heading"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <HelpCircle size={18} strokeWidth={2} aria-hidden />
            </span>
            <h2 id="contact-help-heading" className="font-display text-xl font-bold text-heading">
              Need Help?
            </h2>
          </div>
          <nav aria-label="Quick help links" className="mt-5 flex flex-wrap gap-3">
            {CONTACT.helpLinks.map(({ label, path }) => (
              <InternalLink
                key={path}
                to={path}
                className={cn(
                  'inline-flex min-h-[44px] items-center rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium',
                  'transition-colors duration-200 hover:border-primary-mid hover:bg-primary-soft/40',
                )}
              >
                {label}
              </InternalLink>
            ))}
          </nav>
        </section>

        {/* Final CTA */}
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary-soft/40 to-canvas px-5 py-8 text-center sm:px-6 md:px-10 md:py-12">
            <p className="font-display text-xl font-bold text-heading md:text-2xl">{CONTACT.cta.title}</p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              {CONTACT.cta.description}
            </p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button to={CONTACT.cta.primaryPath} size="lg" className="w-full sm:w-auto">
                {CONTACT.cta.primaryLabel}
              </Button>
              <Button href={SITE.playStoreUrl} external variant="outline" size="lg" className="w-full sm:w-auto">
                {CONTACT.cta.secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
