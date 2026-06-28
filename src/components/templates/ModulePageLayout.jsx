import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import PhoneMockupScreen from '@/components/common/PhoneMockupScreen';
import PageCtaBand from '@/components/templates/PageCtaBand';
import { AccordionItem } from '@/components/ui/Accordion';
import { getScreenshot } from '@/generated/screenshots';
import { digitalLifePath } from '@/utils/routes';
import { cn } from '@/utils/cn';

function ContentSection({ title, children, className }) {
  return (
    <section className={cn('py-10 md:py-12', className)}>
      <h2 className="font-display text-2xl font-bold text-heading md:text-[1.75rem]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ModulePageLayout({ module, page, openFaqId, onToggleFaq }) {
  const Icon = module.icon;
  const screenshot = module.screenshotId ? getScreenshot(module.screenshotId) : null;
  const hasRealShot = screenshot && !screenshot.isPlaceholder;

  return (
    <Container className="pb-section-y md:pb-section-y-lg">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Icon size={28} strokeWidth={1.75} aria-hidden />
            </div>
            {module.free && <Badge variant="free">Free</Badge>}
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold text-heading md:text-4xl">
            {page.headline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{page.purpose}</p>
          <p className="mt-6 font-display text-lg font-semibold text-heading">{page.problemHeadline}</p>
        </div>

        {hasRealShot && (
          <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-[300px]">
            <PhoneMockupScreen
              screen={{ ...screenshot, alt: `${module.name} screen in BharatVow app` }}
              priority
              frameClassName="shadow-xl"
            />
          </div>
        )}
      </div>

      <ContentSection title="Problems it solves">
        <ul className="space-y-3">
          {page.problems.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Features">
        <ul className="grid gap-3 sm:grid-cols-2">
          {page.features.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Real-life example">
        <blockquote className="rounded-2xl border border-border bg-canvas px-6 py-6 md:px-8">
          <p className="font-display text-lg font-semibold text-heading">{page.example.title}</p>
          <p className="mt-3 text-base leading-relaxed text-muted">{page.example.story}</p>
        </blockquote>
      </ContentSection>

      {page.faq?.length > 0 && (
        <ContentSection title="Common questions">
          <div className="space-y-3">
            {page.faq.map((item, i) => {
              const id = `${module.slug}-faq-${i}`;
              return (
                <AccordionItem
                  key={id}
                  id={id}
                  question={item.q}
                  answer={item.a}
                  open={openFaqId === id}
                  onToggle={onToggleFaq}
                />
              );
            })}
          </div>
          <p className="mt-4 text-sm text-muted">
            More answers on our{' '}
            <Link to="/faq" className="font-medium text-primary hover:underline">
              FAQ page
            </Link>
            .
          </p>
        </ContentSection>
      )}

      <p className="text-sm text-muted">
        Part of your{' '}
        <Link to={digitalLifePath()} className="font-medium text-primary hover:underline">
          Digital Life
        </Link>
        {' in BharatVow · '}
        <Link to={digitalLifePath(module.slug)} className="font-medium text-primary hover:underline">
          {module.name}
        </Link>
      </p>

      <div className="mt-12">
        <PageCtaBand
          title={module.free ? 'Try it free on Google Play' : 'Start your 7-day free trial on Google Play'}
          description={
            module.free
              ? `${module.name} is free without a subscription.`
              : `Explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.`
          }
        />
      </div>
    </Container>
  );
}
