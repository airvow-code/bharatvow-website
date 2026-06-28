import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';

export default function DigitalToolProblems({ headline, scenarios, example }) {
  return (
    <DigitalToolSection
      id="tool-problems"
      eyebrow="Problems it solves"
      title={headline ?? 'Real-life scenarios'}
      description="Everyday situations where this Digital Tool keeps your digital life calm and clear."
      align="left"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((scenario, i) => (
          <AnimateIn key={scenario.title} delay={i * 50} as="li" className="list-none">
            <SurfaceCard hover="lift" className="h-full p-5 md:p-6">
              <h3 className="font-display text-base font-bold text-heading">{scenario.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{scenario.description}</p>
            </SurfaceCard>
          </AnimateIn>
        ))}
      </ul>

      {example && (
        <AnimateIn delay={120} className="mt-8 md:mt-10">
          <blockquote className="rounded-2xl border border-border bg-canvas px-6 py-6 md:px-8">
            <p className="font-display text-lg font-semibold text-heading">{example.title}</p>
            <p className="mt-3 text-base leading-relaxed text-muted">{example.story}</p>
          </blockquote>
        </AnimateIn>
      )}
    </DigitalToolSection>
  );
}
