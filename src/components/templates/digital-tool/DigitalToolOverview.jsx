import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';

export default function DigitalToolOverview({ summary, whyFamiliesNeedIt }) {
  return (
    <DigitalToolSection
      id="tool-overview"
      tone="surface"
      eyebrow="Overview"
      title="What it does and why it matters"
      align="left"
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <AnimateIn>
          <SurfaceCard className="h-full p-6 md:p-8">
            <h3 className="font-display text-lg font-bold text-heading">What this tool does</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{summary}</p>
          </SurfaceCard>
        </AnimateIn>
        <AnimateIn delay={60}>
          <SurfaceCard className="h-full p-6 md:p-8">
            <h3 className="font-display text-lg font-bold text-heading">Why families need it</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{whyFamiliesNeedIt}</p>
          </SurfaceCard>
        </AnimateIn>
      </div>
    </DigitalToolSection>
  );
}
