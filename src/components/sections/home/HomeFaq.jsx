import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/common/AnimateIn';
import { AccordionItem } from '@/components/ui/Accordion';
import {
  HOME_FAQ_ANCHOR,
  HOME_FAQ_PREVIEW,
  getFaqPreviewItems,
} from '@/data/faq';

export default function HomeFaq() {
  const { eyebrow, title, intro, footer } = HOME_FAQ_PREVIEW;
  const previewItems = getFaqPreviewItems();
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <Section
      id={HOME_FAQ_ANCHOR}
      tone="default"
      className="bg-canvas"
      labelledBy="home-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          id="home-faq-heading"
          eyebrow={eyebrow}
          title={title}
          description={intro}
          align="center"
          className="mb-8 md:mb-10"
        />

        <AnimateIn>
          <div className="space-y-3">
            {previewItems.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.shortAnswer}
                open={openId === item.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={100} className="mt-10 text-center md:mt-12">
          <p className="font-display text-lg font-semibold text-heading">{footer.title}</p>
          <Button to={footer.href} size="lg" className="mt-5 gap-2 shadow-md">
            {footer.cta}
            <ArrowRight size={18} strokeWidth={2} aria-hidden />
          </Button>
        </AnimateIn>
      </div>
    </Section>
  );
}
