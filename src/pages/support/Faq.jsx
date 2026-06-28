import { useMemo, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import { faqBreadcrumbs } from '@/seo/breadcrumbs';
import { faqPageJsonLd, webPageJsonLd, jsonLdGraph } from '@/seo/structuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { AccordionItem } from '@/components/ui/Accordion';
import { InternalLink } from '@/components/common/LegalProse';
import {
  FAQ_PAGE,
  FAQ_ITEMS,
  FAQ_CATEGORY_DEFS,
  filterFaqItems,
  groupFaqItemsByCategory,
  faqItemsForSchema,
} from '@/data/faq';
import { SITE } from '@/utils/constants';
import { cn } from '@/utils/cn';

function FaqAnswer({ item }) {
  return (
    <>
      <p>{item.answer}</p>
      {item.links?.length > 0 && (
        <p className="mt-3">
          {item.links.map((link, index) => (
            <span key={link.path}>
              {index > 0 && ' · '}
              <InternalLink to={link.path}>{link.label} →</InternalLink>
            </span>
          ))}
        </p>
      )}
    </>
  );
}

export default function Faq() {
  const meta = getPageMeta(FAQ_PAGE.path);
  const crumbs = faqBreadcrumbs();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(
    () => filterFaqItems(FAQ_ITEMS, { query, category }),
    [query, category],
  );

  const grouped = useMemo(() => groupFaqItemsByCategory(filtered), [filtered]);
  const isFlatView = query.trim().length > 0 || category !== 'all';

  const ogTitle = FAQ_PAGE.seo?.ogTitle ?? FAQ_PAGE.title;
  const ogDescription = FAQ_PAGE.seo?.ogDescription ?? FAQ_PAGE.description;

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const handleSearch = (value) => {
    setQuery(value);
    setOpenId(null);
  };

  const handleCategory = (id) => {
    setCategory(id);
    setOpenId(null);
  };

  return (
    <>
      <SEO
        title={FAQ_PAGE.title}
        fullTitle={ogTitle}
        description={FAQ_PAGE.description}
        keywords={meta?.keywords ?? FAQ_PAGE.keywords}
        path={FAQ_PAGE.path}
        breadcrumbs={crumbs}
        ogImageAlt={`${SITE.name} — ${SITE.tagline}`}
        jsonLd={jsonLdGraph(
          faqPageJsonLd(faqItemsForSchema(FAQ_ITEMS)),
          webPageJsonLd({
            title: FAQ_PAGE.headline,
            description: ogDescription,
            path: FAQ_PAGE.path,
          }),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={FAQ_PAGE.headline} lead={FAQ_PAGE.intro} />

      <Container className="pb-section-y md:pb-section-y-lg">
        {/* Search */}
        <label htmlFor="faq-page-search" className="sr-only">
          Search FAQ questions
        </label>
        <div className="relative mx-auto max-w-2xl">
          <Search
            size={18}
            strokeWidth={2}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            id="faq-page-search"
            type="search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={FAQ_PAGE.searchPlaceholder}
            className={cn(
              'w-full rounded-2xl border border-border bg-white py-3.5 pl-11 pr-4 text-sm text-heading shadow-sm',
              'placeholder:text-subtle transition-colors duration-200',
              'focus:border-primary-mid focus:outline-none focus:ring-2 focus:ring-primary/15',
            )}
          />
        </div>

        {/* Category cards */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <button
            type="button"
            onClick={() => handleCategory('all')}
            className={cn(
              'rounded-xl border p-4 text-left transition-all duration-200 motion-safe:hover:-translate-y-0.5',
              category === 'all'
                ? 'border-primary bg-primary-soft shadow-sm ring-1 ring-primary/10'
                : 'border-border bg-surface hover:border-primary-mid',
            )}
          >
            <p className="font-display text-sm font-semibold text-heading">All categories</p>
            <p className="mt-1 text-xs text-muted">Browse every question</p>
          </button>
          {FAQ_CATEGORY_DEFS.map((cat) => {
            const Icon = cat.icon;
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategory(cat.id)}
                className={cn(
                  'rounded-xl border p-4 text-left transition-all duration-200 motion-safe:hover:-translate-y-0.5',
                  active
                    ? 'border-primary bg-primary-soft shadow-sm ring-1 ring-primary/10'
                    : 'border-border bg-surface hover:border-primary-mid',
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                      active ? 'bg-primary text-white' : 'bg-primary-soft text-primary',
                    )}
                  >
                    <Icon size={16} strokeWidth={2} aria-hidden />
                  </span>
                  <span>
                    <p className="font-display text-sm font-semibold text-heading">{cat.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{cat.description}</p>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* FAQ accordions */}
        {filtered.length === 0 ? (
          <p className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-canvas px-5 py-8 text-center text-sm text-muted">
            {FAQ_PAGE.emptySearch}
          </p>
        ) : isFlatView ? (
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {filtered.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={<FaqAnswer item={item} />}
                icon={item.icon}
                open={openId === item.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-3xl space-y-12">
            {grouped.map((group) => {
              const Icon = group.icon;
              return (
                <section key={group.id} aria-labelledby={`faq-cat-${group.id}`}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                      <Icon size={18} strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <h2
                        id={`faq-cat-${group.id}`}
                        className="font-display text-lg font-bold text-heading md:text-xl"
                      >
                        {group.label}
                      </h2>
                      <p className="text-sm text-muted">{group.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={<FaqAnswer item={item} />}
                        icon={item.icon}
                        open={openId === item.id}
                        onToggle={handleToggle}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Related links */}
        <nav
          aria-label="Related FAQ links"
          className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-10"
        >
          {FAQ_PAGE.relatedLinks.map(({ label, path }) => (
            <InternalLink key={path} to={path} className="text-sm">
              {label}
            </InternalLink>
          ))}
        </nav>

        {/* Final CTA */}
        <div className="mx-auto mt-10 max-w-xl">
          <SurfaceCard className="px-6 py-8 text-center md:px-8">
            <p className="font-display text-lg font-semibold text-heading md:text-xl">
              {FAQ_PAGE.contact.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{FAQ_PAGE.contact.description}</p>
            <Button to={FAQ_PAGE.contact.href} size="lg" className="mt-5 gap-2">
              {FAQ_PAGE.contact.cta}
              <ArrowRight size={18} strokeWidth={2} aria-hidden />
            </Button>
          </SurfaceCard>
        </div>
      </Container>
    </>
  );
}
