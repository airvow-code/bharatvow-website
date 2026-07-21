import Container from '@/components/ui/Container';
import AnimateIn from '@/components/common/AnimateIn';
import { BUSINESS_IDENTITY } from '@/data/home';
import { cn } from '@/utils/cn';

function SubscriptionChip({ label, delay }) {
  return (
    <AnimateIn delay={delay}>
      <li
        className={cn(
          'rounded-lg bg-canvas px-3 py-1.5 font-body text-[13px] font-semibold text-heading',
          'ring-1 ring-border/70',
        )}
      >
        {label}
      </li>
    </AnimateIn>
  );
}

export default function BusinessIdentityBand() {
  const { statement, subscriptionHighlights, positioningNote } = BUSINESS_IDENTITY;

  return (
    <section
      className="border-b border-border/70 bg-surface py-8 md:py-10"
      aria-labelledby="business-identity-heading"
    >
      <Container>
        <AnimateIn>
          <p
            id="business-identity-heading"
            className="mx-auto max-w-3xl text-center text-base leading-relaxed text-body md:text-lg"
          >
            {statement}
          </p>
        </AnimateIn>

        <ul
          className="mt-6 flex flex-wrap items-center justify-center gap-2 md:mt-7 md:gap-3"
          aria-label="Subscription and product type"
        >
          {subscriptionHighlights.map((label, i) => (
            <SubscriptionChip key={label} label={label} delay={60 + i * 40} />
          ))}
        </ul>

        <AnimateIn delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted">
            {positioningNote}
          </p>
        </AnimateIn>
      </Container>
    </section>
  );
}
