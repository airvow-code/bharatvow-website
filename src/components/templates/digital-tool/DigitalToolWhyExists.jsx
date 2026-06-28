import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';

export default function DigitalToolWhyExists({
  toolName,
  eyebrow = 'Why it exists',
  headline,
  everydayProblem,
  whyFamiliesNeedIt,
}) {
  const title = headline || resolveSectionHeading('Why {toolName} exists', toolName);

  return (
    <DigitalToolSection
      id="tool-why-exists"
      eyebrow={eyebrow}
      title={title}
      align="left"
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <AnimateIn>
          <SurfaceCard variant="quote" className="h-full p-6 md:p-8">
            <h3 className="font-display text-lg font-bold text-heading">The everyday problem</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{everydayProblem}</p>
          </SurfaceCard>
        </AnimateIn>
        <AnimateIn delay={60}>
          <SurfaceCard className="h-full p-6 md:p-8">
            <h3 className="font-display text-lg font-bold text-heading">Why you need it</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{whyFamiliesNeedIt}</p>
          </SurfaceCard>
        </AnimateIn>
      </div>
    </DigitalToolSection>
  );
}
