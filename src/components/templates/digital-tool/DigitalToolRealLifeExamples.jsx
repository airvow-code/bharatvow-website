import AnimateIn from '@/components/common/AnimateIn';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';

export default function DigitalToolRealLifeExamples({ toolName, title: titleOverride, examples }) {
  const title = titleOverride || resolveSectionHeading('Everyday ways people use {toolName}', toolName);

  return (
    <DigitalToolSection
      id="tool-examples"
      eyebrow="Use cases"
      title={title}
      description="Practical use cases — everyday situations you may recognize."
      align="left"
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {examples.map((example, i) => (
          <AnimateIn key={example.title} delay={i * 50} as="li" className="list-none">
            <blockquote className="h-full rounded-2xl border border-border bg-canvas px-6 py-6 md:px-8">
              <h3 className="font-display text-lg font-semibold text-heading">{example.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{example.story}</p>
            </blockquote>
          </AnimateIn>
        ))}
      </ul>
    </DigitalToolSection>
  );
}
