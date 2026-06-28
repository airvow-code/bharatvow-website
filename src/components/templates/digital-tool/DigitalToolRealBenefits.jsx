import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';

export default function DigitalToolRealBenefits({ toolName, title: titleOverride, benefits }) {
  const title = titleOverride || 'Real Benefits';

  return (
    <DigitalToolSection
      id="tool-benefits"
      tone="surface"
      eyebrow="Benefits"
      title={title}
      description={`Practical ways ${toolName} helps in everyday travel.`}
      align="left"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <AnimateIn key={benefit.title} delay={i * 40} as="li" className="list-none">
            <SurfaceCard hover="lift" className="h-full p-5 md:p-6">
              <h3 className="font-display text-base font-bold text-heading">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </SurfaceCard>
          </AnimateIn>
        ))}
      </ul>
    </DigitalToolSection>
  );
}
