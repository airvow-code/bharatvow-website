import { Link } from 'react-router-dom';
import { AccordionItem } from '@/components/ui/Accordion';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';

export default function DigitalToolFaq({ toolName, toolSlug, faq, openFaqId, onToggleFaq }) {
  if (!faq?.length) return null;

  const title = resolveSectionHeading('Questions about {toolName}', toolName);

  return (
    <DigitalToolSection
      id="tool-faq"
      eyebrow="FAQ"
      title={title}
      align="left"
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faq.map((item, i) => {
          const id = `${toolSlug}-faq-${i}`;
          return (
            <AccordionItem
              key={id}
              id={id}
              question={item.q}
              answer={item.a}
              open={openFaqId === id}
              onToggle={onToggleFaq}
            />
          );
        })}
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-sm text-muted">
        More answers on our{' '}
        <Link to="/faq" className="font-medium text-primary hover:underline">
          FAQ page
        </Link>
        .
      </p>
    </DigitalToolSection>
  );
}
