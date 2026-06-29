import Section from '@/components/ui/Section';
import SurfaceCard from '@/components/ui/SurfaceCard';
import AnimateIn from '@/components/common/AnimateIn';
import { TRUST_PILLARS } from '@/data/home';
import { cn } from '@/utils/cn';

const ICON_TONES = [
  'bg-primary-soft text-primary',
  'bg-secondary-soft text-secondary-dark',
  'bg-accent-green-soft text-accent-green',
  'bg-primary-soft text-primary-light',
];

export default function TrustBar() {
  return (
    <Section
      tone="default"
      className="border-y border-border/70 py-10 md:py-12"
      labelledBy="trust-heading"
    >
      <p id="trust-heading" className="sr-only">
        Why users trust BharatVow
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
        {TRUST_PILLARS.map(({ icon: Icon, title, description }, i) => (
          <AnimateIn key={title} delay={i * 60} as="li" className="list-none">
            <SurfaceCard
              hover="lift"
              className={cn(
                'flex h-full flex-col p-5 transition-shadow duration-200 motion-safe:hover:shadow-md md:p-6',
              )}
            >
              <div
                className={cn(
                  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                  ICON_TONES[i % ICON_TONES.length],
                )}
              >
                <Icon size={22} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-heading">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
            </SurfaceCard>
          </AnimateIn>
        ))}
      </ul>
    </Section>
  );
}
