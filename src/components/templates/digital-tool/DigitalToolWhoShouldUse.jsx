import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';

export default function DigitalToolWhoShouldUse({
  toolName,
  headline,
  audiences,
  situations,
}) {
  const title = headline || resolveSectionHeading('Who should use {toolName}', toolName);

  return (
    <DigitalToolSection
      id="tool-who-should-use"
      tone="surface"
      eyebrow="Who it is for"
      title={title}
      description={
        situations.length > 0
          ? 'Target users and everyday situations where this Digital Tool fits naturally.'
          : undefined
      }
      align="left"
    >
      <div className={`grid gap-10 ${situations.length > 0 ? 'lg:grid-cols-2 lg:gap-12' : 'max-w-2xl'}`}>
        <div>
          <h3 className="font-display text-lg font-bold text-heading">
            {situations.length > 0 ? 'Target users' : 'Who it is for'}
          </h3>
          <ul className="mt-4 space-y-3">
            {audiences.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 40} as="li" className="list-none">
                <SurfaceCard className="p-5">
                  <p className="font-display font-semibold text-heading">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </SurfaceCard>
              </AnimateIn>
            ))}
          </ul>
        </div>
        {situations.length > 0 && (
        <div>
          <h3 className="font-display text-lg font-bold text-heading">Real-life situations</h3>
          <ul className="mt-4 space-y-3">
            {situations.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 40} as="li" className="list-none">
                <SurfaceCard className="p-5">
                  <p className="font-display font-semibold text-heading">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </SurfaceCard>
              </AnimateIn>
            ))}
          </ul>
        </div>
        )}
      </div>
    </DigitalToolSection>
  );
}
