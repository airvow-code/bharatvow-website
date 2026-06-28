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
import PageHeader from '@/components/ui/PageHeader';
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

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'About', path: ABOUT_PAGE.path },
];

function ProseSection({ heading, children, className }) {
  return (
    <section className={cn('border-b border-border py-10 last:border-b-0', className)}>
      <h2 className="font-display text-xl font-bold text-heading md:text-2xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-[1.75] text-body">{children}</div>
    </section>
  );
}

function Paragraphs({ items }) {
  return items.map((text) => (
    <p key={text.slice(0, 48)}>{text}</p>
  ));
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
      <PageHeader
        title={ABOUT_PAGE.headline}
        lead={ABOUT_PAGE.lead}
        leadClassName="font-semibold text-heading md:text-xl"
        sublead={ABOUT_PAGE.heroSupportLine}
        subleadClassName="mx-auto mt-6 max-w-xl text-center text-sm font-normal leading-relaxed text-muted md:text-base"
      />

      <Container className="pb-section-y md:pb-section-y-lg">
        <article className="mx-auto max-w-prose">
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
            <ul className="mt-4 space-y-2">
              {ABOUT_PAGE.ecosystem.tools.map((tool) => (
                <li key={tool.slug} className="flex gap-3 text-body">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden
                  />
                  <span>
                    <InternalLink to={`/digital-life/${tool.slug}`}>{tool.label}</InternalLink>
                    {' — '}
                    <span className="text-muted">{tool.description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Button to={ABOUT_PAGE.ecosystem.ctaPath} variant="outline" size="sm">
                {ABOUT_PAGE.ecosystem.ctaLabel}
                <ArrowRight size={16} strokeWidth={2} className="ml-1.5" aria-hidden />
              </Button>
            </p>
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.company.heading}>
            <p className="font-display font-semibold text-heading">{ABOUT_PAGE.company.name}</p>
            <address className="mt-4 not-italic text-body">
              <p className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>
                  {ABOUT_PAGE.company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </address>
            <p className="mt-4">{ABOUT_PAGE.company.description}</p>
          </ProseSection>

          <ProseSection heading={ABOUT_PAGE.trust.heading}>
            <Paragraphs items={ABOUT_PAGE.trust.paragraphs} />
            <ul className="mt-2 space-y-3">
              {ABOUT_PAGE.trust.points.map((point) => (
                <li key={point.slice(0, 48)} className="flex gap-3 text-body">
                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <InternalLink to={ABOUT_PAGE.trust.privacyPath}>
                {ABOUT_PAGE.trust.privacyLabel} →
              </InternalLink>
            </p>
          </ProseSection>

          <section className="border-b border-border py-10">
            <h2 className="font-display text-xl font-bold text-heading md:text-2xl">
              {ABOUT_PAGE.values.heading}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {ABOUT_PAGE.values.items.map((value) => {
                const Icon = VALUE_ICONS[value.title] ?? Sparkles;
                return (
                  <li key={value.title} className="list-none">
                    <div className="h-full rounded-card border border-border bg-surface p-5 shadow-card">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                        <Icon size={18} strokeWidth={2} aria-hidden />
                      </div>
                      <h3 className="mt-3 font-display font-semibold text-heading">{value.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <ProseSection heading={ABOUT_PAGE.contact.heading}>
            <p>{ABOUT_PAGE.contact.intro}</p>
            <div className="mt-6">
              <InfoCard title={ABOUT_PAGE.contact.company}>
              <div className="space-y-4">
                <a
                  href={`mailto:${ABOUT_PAGE.contact.email}`}
                  className="flex items-center gap-3 text-primary-light hover:text-primary"
                >
                  <Mail size={20} strokeWidth={2} aria-hidden />
                  <span className="font-medium">{ABOUT_PAGE.contact.email}</span>
                </a>
                <a
                  href={`tel:${ABOUT_PAGE.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-primary-light hover:text-primary"
                >
                  <Phone size={20} strokeWidth={2} aria-hidden />
                  <span className="font-medium">{ABOUT_PAGE.contact.phone}</span>
                </a>
                <a
                  href={ABOUT_PAGE.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-light hover:text-primary"
                >
                  <Globe size={20} strokeWidth={2} aria-hidden />
                  <span className="font-medium">{ABOUT_PAGE.contact.website}</span>
                </a>
              </div>
              <p className="mt-5">
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

        <div className="mx-auto mt-12 max-w-prose">
          <PageCtaBand
            title={ABOUT_PAGE.cta.title}
            description={ABOUT_PAGE.cta.description}
            primaryLabel={ABOUT_PAGE.cta.primaryLabel}
            secondaryLabel={ABOUT_PAGE.cta.secondaryLabel}
            secondaryTo={ABOUT_PAGE.cta.secondaryPath}
          />
        </div>
      </Container>
    </>
  );
}
