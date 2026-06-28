import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/common/AnimateIn';
import { MORNING_STORY } from '@/data/home';
import { HOME_ANCHORS } from '@/utils/anchors';

export default function MorningStory() {
  return (
    <Section id={HOME_ANCHORS.story} tone="cream" labelledBy="story-heading">
      <AnimateIn>
        <div className="mx-auto max-w-prose border-l-4 border-secondary pl-6 md:pl-8">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
            A real morning
          </p>
          <h2 id="story-heading" className="mt-3 font-display text-2xl font-bold text-heading md:text-[2rem]">
            {MORNING_STORY.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{MORNING_STORY.body}</p>
          <div className="mt-8">
            <Button to="/about" variant="ghost">
              Learn about BharatVow
              <ArrowRight size={18} strokeWidth={2} aria-hidden />
            </Button>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
