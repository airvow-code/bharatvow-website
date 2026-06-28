import AnimateIn from '@/components/common/AnimateIn';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';

export default function DigitalToolHowItWorks({
  toolName,
  steps,
  title: titleOverride,
  eyebrow: eyebrowOverride,
  description: descriptionOverride,
}) {
  const title = titleOverride || resolveSectionHeading('How {toolName} works', toolName);
  const eyebrow = eyebrowOverride || 'How it works';

  return (
    <DigitalToolSection
      id="tool-how-it-works"
      eyebrow={eyebrow}
      title={title}
      description={descriptionOverride}
      align="left"
    >
      <ol className="relative mx-auto max-w-2xl">
        {steps.map((step, i) => (
          <AnimateIn key={step.title} delay={i * 60} as="li" className="relative list-none pb-10 last:pb-0">
            {i < steps.length - 1 && (
              <span
                className="absolute left-5 top-12 h-[calc(100%-2rem)] w-px bg-border motion-reduce:hidden"
                aria-hidden
              />
            )}
            <div className="flex gap-4 md:gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                {i + 1}
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-display text-lg font-bold text-heading">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{step.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </ol>
    </DigitalToolSection>
  );
}
