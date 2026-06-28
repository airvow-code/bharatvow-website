import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SurfaceCard from '@/components/ui/SurfaceCard';
import AnimateIn from '@/components/common/AnimateIn';
import {
  LIFE_AREAS_HOME,
  LIFE_AREAS_INTRO,
  LIFE_AREAS_CLOSING,
} from '@/data/home';
import { digitalLifePath } from '@/utils/routes';
import { HOME_ANCHORS } from '@/utils/anchors';
import Button from '@/components/ui/Button';
import { chipWrap } from '@/utils/chipStyles';
import { cn } from '@/utils/cn';

function LifeAreaCard({ area, delay }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = area.icon;
  const panelId = `life-area-tools-${area.slug}`;

  const toggle = () => setExpanded((v) => !v);

  return (
    <AnimateIn delay={delay}>
      <SurfaceCard
        id={`area-${area.slug}`}
        className={cn(
          'group scroll-mt-24 overflow-hidden transition-all duration-300',
          'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md',
          expanded && 'shadow-md ring-1 ring-primary-mid/40',
          !expanded && 'motion-safe:hover:ring-1 motion-safe:hover:ring-primary-mid/30',
        )}
      >
        <div
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="flex h-full cursor-default flex-col p-6 md:cursor-pointer md:p-7 lg:cursor-default"
          onClick={() => {
            if (window.matchMedia('(hover: none)').matches) toggle();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle();
            }
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div
              className={cn(
                'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-200 motion-safe:group-hover:scale-105',
                chipWrap(area.chip),
              )}
            >
              <Icon size={28} strokeWidth={1.75} aria-hidden />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
              {area.toolLabel}
            </span>
          </div>

          <h3 className="mt-5 font-display text-xl font-bold leading-snug text-heading">
            {area.title}
          </h3>
          <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{area.description}</p>

          <Link
            to={digitalLifePath()}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Explore {area.title.replace('Manage Your ', '')}
            <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </Link>

          <p className="mt-4 flex items-center gap-1 font-body text-sm font-medium text-primary-light md:hidden">
            {expanded ? 'Hide tools' : 'View connected tools'}
            <ChevronDown
              size={16}
              strokeWidth={2}
              className={cn('transition-transform duration-200', expanded && 'rotate-180')}
              aria-hidden
            />
          </p>
        </div>

        <div
          id={panelId}
          className={cn(
            'grid transition-[grid-template-rows] duration-300 ease-entrance',
            expanded
              ? 'grid-rows-[1fr]'
              : 'grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-within:grid-rows-[1fr]',
          )}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border/80 bg-canvas/50 px-6 pb-6 pt-4 md:px-7 md:pb-7">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
                Connected tools
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {area.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-lg border border-border/80 bg-surface px-3 py-1.5 font-body text-sm font-medium text-heading shadow-sm"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SurfaceCard>
    </AnimateIn>
  );
}

export default function LifeAreasBento() {
  return (
    <Section id={HOME_ANCHORS.lifeAreas} tone="surface" labelledBy="life-areas-heading">
      <SectionHeading
        id="life-areas-heading"
        eyebrow="One platform, not a pile of apps"
        title="Seven parts of life. One digital life platform."
        description={LIFE_AREAS_INTRO}
        align="left"
        className="mb-10 md:mb-12"
      />

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
        {LIFE_AREAS_HOME.map((area, i) => (
          <li key={area.slug} className="list-none">
            <LifeAreaCard area={area} delay={i * 50} />
          </li>
        ))}
      </ul>

      <AnimateIn delay={LIFE_AREAS_HOME.length * 50 + 80} className="mt-12 text-center md:mt-14">
        <p className="mx-auto max-w-prose font-display text-lg font-medium leading-relaxed text-heading md:text-xl">
          {LIFE_AREAS_CLOSING}
        </p>
        <Button to={digitalLifePath()} variant="outline" className="mt-6 gap-2">
          Explore Digital Life
          <ArrowRight size={18} strokeWidth={2} aria-hidden />
        </Button>
      </AnimateIn>
    </Section>
  );
}
