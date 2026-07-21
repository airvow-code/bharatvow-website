import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Shield,
  Heart,
  Sparkles,
  Users,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { webPageJsonLd, organizationJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PageCtaBand from '@/components/templates/PageCtaBand';
import { InfoCard, InternalLink } from '@/components/common/LegalProse';
import { ABOUT_PAGE } from '@/data/about';
import { SITE } from '@/utils/constants';
import { cn } from '@/utils/cn';

const VALUE_ICONS = {
  Simplicity: Sparkles,
  Privacy: Shield,
  Trust: CheckCircle2,
  Reliability: RefreshCw,
  'User First': Users,
  'Continuous Improvement': Heart,
};

/**
 * About page layout grid — mirrors Home hero column rhythm (~8/12–9/12 of Container).
 * Replaces max-w-prose page wrapper that left ~50% of the container unused on desktop.
 */
const ABOUT_GRID = 'grid min-w-0 grid-cols-1 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10';
const ABOUT_MAIN = 'min-w-0 lg:col-span-8 xl:col-span-9';
const BODY_COPY = 'text-base leading-[1.8] text-body md:text-[17px] md:leading-[1.85]';
const SECTION_PAD = 'py-6 md:py-8';
const SECTION_HEADING = 'font-display text-xl font-bold tracking-tight text-heading md:text-2xl';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'About', path: ABOUT_PAGE.path },
];

function ProseSection({ heading, children, className }) {
  return (
    <section className={cn('border-b border-border/80', SECTION_PAD, className)}>
      <h2 className={SECTION_HEADING}>{heading}</h2>
      <div className={cn('mt-5 space-y-5', BODY_COPY)}>{children}</div>
    </section>
  );
}

function Paragraphs({ items }) {
  return items.map((text) => (
    <p key={text.slice(0, 48)}>{text}</p>
  ));
}

function BusinessOverview({ overview }) {
  return (
    <aside aria-labelledby="about-overview-heading" className="w-full">
      <p
        id="about-overview-heading"
        className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow"
      >
        {overview.title}
      </p>
      <div className="mt-5 rounded-card border border-border/70 bg-surface p-7 shadow-card md:mt-6 md:p-8 lg:p-9">
        <ul className="grid gap-7 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {overview.rows.map(({ label, value }) => (
            <li key={label} className="min-w-0 list-none">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.06em] text-eyebrow">
                {label}
              </p>
              <p className="mt-2.5 text-sm leading-[1.65] text-body md:text-[15px] md:leading-[1.7]">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function DeveloperBlock({ developer }) {
  return (
    <section
      aria-labelledby="about-developer-heading"
      className="border-t border-border/60 pt-10 md:pt-12"
    >
      <p
        id="about-developer-heading"
        className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow"
      >
        {developer.title}
      </p>
      <p className="mt-3 text-[15px] font-medium leading-snug text-body md:text-base">
        {developer.company}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{developer.subtitle}</p>
    </section>
  );
}

export default function About() {
  const meta = getPageMeta(ABOUT_PAGE.path);
  const ogTitle = ABOUT_PAGE.seo?.ogTitle ?? ABOUT_PAGE.title;
  const ogDescription = ABOUT_PAGE.seo?.ogDescription ?? ABOUT_PAGE.description;

  return (
    <>
      <SEO
        title={ABOUT_PAGE.title}
        fullTitle={ogTitle}
        description={ABOUT_PAGE.description}
        keywords={meta?.keywords ?? ABOUT_PAGE.keywords}
        path={ABOUT_PAGE.path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — ${SITE.tagline}`}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: ABOUT_PAGE.headline,
            description: ogDescription,
            path: ABOUT_PAGE.path,
          }),
          organizationJsonLd(),
        )}
      />
      <Breadcrumbs items={crumbs} />

      {/* Hero + intro — 12-col grid inside Container (same architecture as Home hero) */}
      <header className="border-b border-border/80 bg-gradient-to-b from-primary-soft/60 via-cream/30 to-canvas">
        <Container className="relative py-6 md:py-8 lg:py-[4.5rem]">
          <div className={ABOUT_GRID}>
            <div className={cn(ABOUT_MAIN, 'space-y-6 md:space-y-8')}>
              <div className="min-w-0">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
                  {ABOUT_PAGE.lead}
                </p>
                <h1 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl md:mt-4 md:text-4xl">
                  {ABOUT_PAGE.headline}
                </h1>
                <p className={cn('mt-5 md:mt-6', BODY_COPY)}>{ABOUT_PAGE.openingParagraph}</p>
              </div>

              <DeveloperBlock developer={ABOUT_PAGE.developer} />
              <BusinessOverview overview={ABOUT_PAGE.businessSnapshot} />
            </div>
          </div>
        </Container>
      </header>

      <Container className="pb-section-y md:pb-section-y-lg">
        <div className={ABOUT_GRID}>
          <article className={cn(ABOUT_MAIN, 'pt-12 md:pt-14')}>
          <ProseSection heading={ABOUT_PAGE.whatIs.heading}>
            <Paragraphs items={ABOUT_PAGE.whatIs.paragraphs} />
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.whyExists.heading}>
            <Paragraphs items={ABOUT_PAGE.whyExists.paragraphs} />
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.vision.heading}>
            <p>{ABOUT_PAGE.vision.body}</p>
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.mission.heading}>
            <Paragraphs items={ABOUT_PAGE.mission.paragraphs} />
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.ecosystem.heading}>
            <p>{ABOUT_PAGE.ecosystem.intro}</p>
            <ul className="mt-5 space-y-3">
              {ABOUT_PAGE.ecosystem.tools.map((tool) => (
                <li key={tool.slug} className="flex gap-3 text-body">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden
                  />
                  <span className="leading-[1.75]">
                    <InternalLink to={`/digital-life/${tool.slug}`}>{tool.label}</InternalLink>
                    {' — '}
                    <span className="text-muted">{tool.description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Button to={ABOUT_PAGE.ecosystem.ctaPath} variant="outline" size="sm">
                {ABOUT_PAGE.ecosystem.ctaLabel}
                <ArrowRight size={16} strokeWidth={2} className="ml-1.5" aria-hidden />
              </Button>
            </p>
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.company.heading}>
            <p className="font-display font-semibold text-heading">{ABOUT_PAGE.company.name}</p>
            <address className="mt-5 not-italic text-body">
              <p className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <span className="leading-[1.75]">
                  {ABOUT_PAGE.company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </address>
            <p className="mt-5">{ABOUT_PAGE.company.description}</p>
            <dl className="mt-6 space-y-3 text-sm md:text-[15px]">
              <div className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="font-medium text-muted">Business Type</dt>
                <dd className="leading-[1.65] text-body">{ABOUT_PAGE.company.businessType}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="font-medium text-muted">Core Service</dt>
                <dd className="leading-[1.65] text-body">{ABOUT_PAGE.company.coreService}</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-muted">{ABOUT_PAGE.company.registration}</p>
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.trust.heading}>
            <Paragraphs items={ABOUT_PAGE.trust.paragraphs} />
            <ul className="mt-4 space-y-4">
              {ABOUT_PAGE.trust.points.map((point) => (
                <li key={point.slice(0, 48)} className="flex gap-3 text-body">
                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="leading-[1.75]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <InternalLink to={ABOUT_PAGE.trust.privacyPath}>
                {ABOUT_PAGE.trust.privacyLabel} →
              </InternalLink>
            </p>
            {ABOUT_PAGE.trust.legalLinks?.length > 0 && (
              <nav
                aria-label="Legal policies"
                className="mt-5 flex flex-wrap gap-x-4 gap-y-2.5 text-sm"
              >
                {ABOUT_PAGE.trust.legalLinks.map(({ label, path }) => (
                  <InternalLink key={path} to={path}>
                    {label} →
                  </InternalLink>
                ))}
              </nav>
            )}
          </ProseSection>

          <section className={cn('border-b border-border/80', SECTION_PAD)}>
            <h2 className={SECTION_HEADING}>{ABOUT_PAGE.values.heading}</h2>
            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {ABOUT_PAGE.values.items.map((value) => {
                const Icon = VALUE_ICONS[value.title] ?? Sparkles;
                return (
                  <li key={value.title} className="list-none">
                    <div className="h-full rounded-card border border-border/80 bg-surface p-6 shadow-card">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                        <Icon size={18} strokeWidth={2} aria-hidden />
                      </div>
                      <h3 className="mt-4 font-display font-semibold text-heading">{value.title}</h3>
                      <p className="mt-2.5 text-sm leading-[1.65] text-muted">{value.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <ProseSection heading={ABOUT_PAGE.contact.heading} className="border-b-0">
            <p>{ABOUT_PAGE.contact.intro}</p>
            <div className="mt-8 md:mt-10">
              <InfoCard title={ABOUT_PAGE.contact.company}>
                <div className="space-y-5">
                  <a
                    href={`mailto:${ABOUT_PAGE.contact.email}`}
                    className="flex break-anywhere items-center gap-3.5 text-primary-light hover:text-primary"
                  >
                    <Mail size={20} strokeWidth={2} aria-hidden />
                    <span className="font-medium leading-snug">{ABOUT_PAGE.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${ABOUT_PAGE.contact.phone.replace(/\s/g, '')}`}
                    className="flex break-anywhere items-center gap-3.5 text-primary-light hover:text-primary"
                  >
                    <Phone size={20} strokeWidth={2} aria-hidden />
                    <span className="font-medium leading-snug">{ABOUT_PAGE.contact.phone}</span>
                  </a>
                  <a
                    href={ABOUT_PAGE.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex break-anywhere items-center gap-3.5 text-primary-light hover:text-primary"
                  >
                    <Globe size={20} strokeWidth={2} aria-hidden />
                    <span className="font-medium leading-snug">{ABOUT_PAGE.contact.website}</span>
                  </a>
                </div>
                <p className="mt-6">
                  <Link
                    to={ABOUT_PAGE.contact.contactPath}
                    className="font-medium text-primary-light underline-offset-2 hover:text-primary hover:underline"
                  >
                    {ABOUT_PAGE.contact.contactLabel} →
                  </Link>
                </p>
              </InfoCard>
            </div>
          </ProseSection>
          </article>
        </div>

        <div className={cn(ABOUT_GRID, 'mt-14 border-t border-border/60 pt-12 md:mt-16 md:pt-14 lg:mt-[4.5rem] lg:pt-16')}>
          <div className={ABOUT_MAIN}>
            <PageCtaBand
              title={ABOUT_PAGE.cta.title}
              description={ABOUT_PAGE.cta.description}
              primaryLabel={ABOUT_PAGE.cta.primaryLabel}
              secondaryLabel={ABOUT_PAGE.cta.secondaryLabel}
              secondaryTo={ABOUT_PAGE.cta.secondaryPath}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
