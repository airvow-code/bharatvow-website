import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/common/AnimateIn';
import { FINAL_CTA } from '@/data/finalCta';
import { SITE } from '@/utils/constants';
import { HOME_ANCHORS } from '@/utils/anchors';
import { cn } from '@/utils/cn';

function TrustChip({ icon: Icon, label, delay }) {
  return (
    <AnimateIn delay={delay}>
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/90 px-4 py-2',
          'font-body text-sm font-medium text-heading shadow-sm backdrop-blur-sm',
          'transition-all duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-primary-mid motion-safe:hover:shadow-md',
        )}
      >
        <Icon size={16} strokeWidth={2} className="shrink-0 text-secondary" aria-hidden />
        {label}
      </span>
    </AnimateIn>
  );
}

export default function DownloadBand() {
  const { eyebrow, title, description, trust, primary, secondary } = FINAL_CTA;

  return (
    <section
      id={HOME_ANCHORS.download}
      className="scroll-mt-20 bg-gradient-to-b from-canvas via-cream to-primary-soft/20 py-section-y md:py-section-y-lg"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-surface/95 px-5 py-10 shadow-card backdrop-blur-sm sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary-soft/50 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-primary-soft/40 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,36rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-eyebrow">
                {eyebrow}
              </p>

              <h2
                id="final-cta-heading"
                className="mt-4 text-balance font-display text-2xl font-bold leading-tight text-heading sm:text-3xl md:text-4xl lg:text-[2.5rem]"
              >
                {title}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
                {trust.map(({ icon, label }, i) => (
                  <li key={label} className="list-none">
                    <TrustChip icon={icon} label={label} delay={80 + i * 50} />
                  </li>
                ))}
              </ul>

              <AnimateIn delay={160} className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={SITE.playStoreUrl}
                  size="lg"
                  external
                  className="w-full shadow-md ring-2 ring-secondary/25 transition-shadow motion-safe:hover:shadow-lg motion-safe:hover:ring-secondary/40 sm:w-auto"
                >
                  {primary.label}
                </Button>
                <Button
                  to={secondary.href}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondary.label}
                  <ArrowRight size={18} strokeWidth={2} aria-hidden />
                </Button>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
