import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SurfaceCard from '@/components/ui/SurfaceCard';
import AnimateIn from '@/components/common/AnimateIn';
import { TESTIMONIALS } from '@/data/home';
import { HOME_ANCHORS } from '@/utils/anchors';

export default function Testimonials() {
  return (
    <Section id={HOME_ANCHORS.testimonials} tone="surface" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Families like yours"
        title="What users say"
        align="left"
        className="mb-10 md:mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map(({ quote, name, location, role }, i) => (
          <AnimateIn key={name} delay={i * 70}>
            <SurfaceCard variant="quote" className="h-full p-8">
              <p className="font-display text-4xl leading-none text-secondary" aria-hidden>
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
      <p className="mt-6 text-xs text-muted">Verified quotes only before publish.</p>
    </Section>
  );
}
