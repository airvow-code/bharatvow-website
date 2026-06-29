import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SurfaceCard from '@/components/ui/SurfaceCard';
import AnimateIn from '@/components/common/AnimateIn';
import { TESTIMONIALS, TESTIMONIALS_DISCLAIMER } from '@/data/home';
import { HOME_ANCHORS } from '@/utils/anchors';

export default function Testimonials() {
  return (
    <Section id={HOME_ANCHORS.testimonials} tone="surface" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Everyday users"
        title="What users say"
        align="left"
        className="mb-10 md:mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map(({ quote, name, location, role }, i) => (
          <AnimateIn key={name} delay={i * 70}>
            <SurfaceCard variant="quote" className="h-full p-6 md:p-8">
              <p className="font-display text-3xl leading-none text-secondary md:text-4xl" aria-hidden>
                &ldquo;
              </p>
              <blockquote className="mt-2">
                <p className="text-lg leading-relaxed text-body">{quote}</p>
                <footer className="mt-6 border-t border-border pt-4">
                  <cite className="not-italic">
                    <span className="font-display font-semibold text-heading">{name}</span>
                    <span className="text-muted">
                      {' '}
                      · {location} · {role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </SurfaceCard>
          </AnimateIn>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">{TESTIMONIALS_DISCLAIMER}</p>
    </Section>
  );
}
