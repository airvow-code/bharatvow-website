import {
  Gift,
  Check,
  Layers,
  CloudUpload,
  RefreshCw,
  LayoutGrid,
  CalendarDays,
  Crown,
} from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { webPageJsonLd, faqPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { InternalLink } from '@/components/common/LegalProse';
import {
  PRICING_PAGE,
  PRICING_PLANS,
  PRICING_INCLUDED_TOOLS,
  PRICING_INCLUDED_NOTE,
  PRICING_BALANCE_NOTE,
  PRICING_FREE_TOOLS,
  PRICING_BENEFITS,
  PRICING_FAQ,
  PRICING_LEGAL_LINKS,
  PRICING_PREMIUM_BENEFIT_TITLE,
} from '@/data/pricing';
import { SITE } from '@/utils/constants';
import { cn } from '@/utils/cn';

const BENEFIT_ICONS = {
  [PRICING_PREMIUM_BENEFIT_TITLE]: Layers,
  'Optional Secure Backup': CloudUpload,
  'Regular Updates': RefreshCw,
  'Organized Digital Life': LayoutGrid,
};

const PLAN_ICONS = {
  monthly: CalendarDays,
  yearly: Crown,
};

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'Pricing', path: PRICING_PAGE.path },
];

function pricingOffersJsonLd() {
  return PRICING_PLANS.map((plan) => ({
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: plan.name,
    price: plan.id === 'monthly' ? '300' : '2000',
    priceCurrency: 'INR',
    description: plan.description,
    eligibleDuration: plan.id === 'monthly'
      ? { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
      : { '@type': 'QuantitativeValue', value: 1, unitCode: 'ANN' },
    seller: {
      '@type': 'Organization',
      name: SITE.company,
    },
  }));
}

export default function Pricing() {
  const meta = getPageMeta(PRICING_PAGE.path);
  const ogTitle = PRICING_PAGE.seo?.ogTitle ?? PRICING_PAGE.title;
  const ogDescription = PRICING_PAGE.seo?.ogDescription ?? PRICING_PAGE.description;

  const faqForSchema = PRICING_FAQ.map(({ q, a, link }) => ({
    question: q,
    answer: link ? `${a} ${link.label}: ${SITE.url}${link.path}` : a,
  }));

  return (
    <>
      <SEO
        title={PRICING_PAGE.title}
        fullTitle={ogTitle}
        description={PRICING_PAGE.description}
        keywords={meta?.keywords ?? PRICING_PAGE.keywords}
        path={PRICING_PAGE.path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — ${SITE.tagline}`}
        jsonLd={jsonLdGraph(
          webPageJsonLd({
            title: PRICING_PAGE.headline,
            description: ogDescription,
            path: PRICING_PAGE.path,
          }),
          faqPageJsonLd(faqForSchema),
          ...pricingOffersJsonLd(),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={PRICING_PAGE.headline} lead={PRICING_PAGE.intro} />

      <Container className="pb-section-y md:pb-section-y-lg">
        {/* Free trial highlight */}
        <SurfaceCard
          variant="moment"
          className="mx-auto max-w-3xl p-6 text-center motion-safe:animate-fade-up md:p-8"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-soft text-secondary-dark">
            <Gift size={24} strokeWidth={2} aria-hidden />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-heading md:text-2xl">
            {PRICING_PAGE.trial.heading}
          </h2>
          <p className="mt-3 text-base font-medium text-heading">{PRICING_PAGE.trial.body}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{PRICING_PAGE.trial.detail}</p>
        </SurfaceCard>

        {/* Pricing plans */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {PRICING_PLANS.map((plan) => {
            const Icon = PLAN_ICONS[plan.id] ?? CalendarDays;
            return (
              <SurfaceCard
                key={plan.id}
                hover="lift"
                className={cn(
                  'relative flex h-full flex-col p-6 md:p-8',
                  plan.highlighted &&
                    'border-primary-mid shadow-md ring-2 ring-primary/15 lg:scale-[1.02]',
                )}
              >
                {plan.badge && (
                  <Badge variant="trial" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {plan.badge}
                  </Badge>
                )}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-heading">{plan.name}</h2>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
                  {plan.price}
                  <span className="text-base font-normal text-muted">{plan.period}</span>
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{plan.description}</p>
                <Button
                  href={SITE.playStoreUrl}
                  external
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="mt-8 w-full"
                >
                  Download BharatVow
                </Button>
              </SurfaceCard>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-muted">
          {PRICING_PAGE.gstNote}
        </p>

        {/* What's included */}
        <section className="mx-auto mt-16 max-w-3xl md:mt-20">
          <h2 className="text-center font-display text-xl font-bold text-heading md:text-2xl">
            What&apos;s Included
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted md:text-base">
            {PRICING_INCLUDED_NOTE}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted md:text-base">
            {PRICING_BALANCE_NOTE}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {PRICING_INCLUDED_TOOLS.map((tool) => (
              <li
                key={tool}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-body"
              >
                <Check size={16} strokeWidth={2.5} className="shrink-0 text-accent-green" aria-hidden />
                <span>
                  {tool}
                  {PRICING_FREE_TOOLS.includes(tool) && (
                    <span className="ml-2 text-xs font-medium text-secondary-dark">Free</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why subscribe */}
        <section className="mx-auto mt-16 max-w-4xl md:mt-20">
          <h2 className="text-center font-display text-xl font-bold text-heading md:text-2xl">
            Why Subscribe?
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {PRICING_BENEFITS.map((benefit) => {
              const Icon = BENEFIT_ICONS[benefit.title] ?? Layers;
              return (
                <li key={benefit.title} className="list-none">
                  <SurfaceCard hover="lift" className="h-full p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                      <Icon size={18} strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-3 font-display font-semibold text-heading">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
                  </SurfaceCard>
                </li>
              );
            })}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-16 max-w-2xl md:mt-20">
          <h2 className="font-display text-xl font-bold text-heading md:text-2xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-8">
            {PRICING_FAQ.map(({ q, a, link }) => (
              <div key={q}>
                <dt className="font-display font-semibold text-heading">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {a}
                  {link && (
                    <>
                      {' '}
                      <InternalLink to={link.path}>{link.label} →</InternalLink>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Legal links */}
        <nav
          aria-label="Pricing legal links"
          className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-10"
        >
          {PRICING_LEGAL_LINKS.map(({ label, path }) => (
            <InternalLink key={path} to={path} className="text-sm">
              {label}
            </InternalLink>
          ))}
        </nav>

        {/* Final CTA */}
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary-soft/40 to-canvas px-5 py-8 text-center sm:px-6 md:px-10 md:py-12">
            <p className="font-display text-xl font-bold text-heading md:text-2xl">
              {PRICING_PAGE.cta.title}
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={SITE.playStoreUrl} size="lg" external>
                {PRICING_PAGE.cta.primaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
