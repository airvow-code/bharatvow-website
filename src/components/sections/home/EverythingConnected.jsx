import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SurfaceCard from '@/components/ui/SurfaceCard';
import AnimateIn from '@/components/common/AnimateIn';
import {
  EVERYTHING_CONNECTED,
  EVERYTHING_CONNECTED_ANCHOR,
} from '@/data/connectedFlows';
import { cn } from '@/utils/cn';

function FlowConnector({ vertical = false, active }) {
  return (
    <div
      aria-hidden
      className={cn(
        'relative shrink-0',
        vertical ? 'flex h-6 w-4 justify-center' : 'flex w-6 items-center md:w-10',
      )}
    >
      {vertical ? (
        <svg viewBox="0 0 2 24" className="h-full w-2 overflow-visible" preserveAspectRatio="none">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="24"
            className={cn(
              'stroke-[2] transition-colors duration-300',
              active ? 'stroke-primary' : 'stroke-border-strong',
            )}
            strokeDasharray={active ? '4 4' : 'none'}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 40 8" className="h-2 w-full overflow-visible">
          <line
            x1="0"
            y1="4"
            x2="36"
            y2="4"
            className={cn(
              'stroke-[2] transition-colors duration-300',
              active ? 'stroke-primary' : 'stroke-border-strong',
            )}
            strokeDasharray={active ? '5 4' : 'none'}
          />
          <polygon
            points="36,1 40,4 36,7"
            className={cn(
              'transition-colors duration-300',
              active ? 'fill-primary' : 'fill-border-strong',
            )}
          />
        </svg>
      )}
      {active && (
        <span
          className={cn(
            'pointer-events-none absolute bg-primary/30 motion-safe:animate-pulse',
            vertical ? 'inset-y-0 left-1/2 w-px -translate-x-1/2' : 'inset-x-0 top-1/2 h-px -translate-y-1/2',
          )}
        />
      )}
    </div>
  );
}

function FlowStep({ step, active, compact }) {
  const Icon = step.icon;

  return (
    <div
      className={cn(
        'group/step relative flex min-w-0 flex-1 flex-col rounded-xl border bg-surface p-3 transition-all duration-300 md:p-4',
        active
          ? 'border-primary-mid shadow-sm ring-1 ring-primary/15'
          : 'border-border hover:border-primary-mid/50',
        compact && 'flex-row items-start gap-3',
      )}
    >
      <div
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 motion-safe:group-hover/step:scale-105 md:h-10 md:w-10',
          active ? 'bg-primary text-white' : 'bg-primary-soft text-primary',
        )}
      >
        <Icon size={18} strokeWidth={1.75} aria-hidden />
      </div>
      <div className={cn(compact ? 'min-w-0 flex-1' : 'mt-3')}>
        <p className="font-display text-sm font-semibold text-heading">{step.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted md:text-[13px]">{step.description}</p>
      </div>
    </div>
  );
}

function WorkflowPanel({ flow, index, isActive, isExpanded, onToggle, onHover, onLeave }) {
  return (
    <AnimateIn delay={index * 80}>
      <div
        className="h-full"
        onMouseEnter={() => onHover(flow.id)}
        onMouseLeave={onLeave}
      >
        <SurfaceCard
          className={cn(
            'h-full overflow-hidden transition-all duration-300',
            isActive && 'border-primary-mid shadow-md ring-1 ring-primary/10',
          )}
        >
        <button
          type="button"
          className="flex w-full min-h-[44px] items-start justify-between gap-4 p-5 text-left md:hidden"
          aria-expanded={isExpanded}
          onClick={() => onToggle(flow.id)}
        >
          <div>
            <h3 className="font-display text-base font-bold text-heading">{flow.title}</h3>
            <p className="mt-1 text-sm text-muted">{flow.summary}</p>
          </div>
          <ChevronDown
            size={20}
            strokeWidth={2}
            className={cn('shrink-0 text-primary transition-transform duration-200', isExpanded && 'rotate-180')}
            aria-hidden
          />
        </button>

        <div className="hidden p-6 md:block md:p-7">
          <h3 className="font-display text-lg font-bold text-heading">{flow.title}</h3>
          <p className="mt-1 text-sm text-muted">{flow.summary}</p>
        </div>

        <div
          className={cn(
            'border-t border-border/80 px-4 pb-5 pt-4 md:border-t-0 md:px-7 md:pb-7 md:pt-0',
            !isExpanded && 'hidden md:block',
          )}
        >
          {/* Desktop: horizontal connected flow */}
          <div className="hidden min-w-0 overflow-x-auto pb-1 md:flex md:items-stretch">
            {flow.steps.map((step, i) => (
              <div key={step.title} className="flex min-w-[9.5rem] flex-1 items-center">
                {i > 0 && <FlowConnector active={isActive} />}
                <FlowStep step={step} active={isActive} />
              </div>
            ))}
          </div>

          {/* Mobile: vertical connected flow */}
          <div className="flex flex-col md:hidden">
            {flow.steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center">
                {i > 0 && <FlowConnector vertical active={isExpanded} />}
                <FlowStep step={step} active={isExpanded} compact />
              </div>
            ))}
          </div>
        </div>
        </SurfaceCard>
      </div>
    </AnimateIn>
  );
}

function BenefitCard({ icon: Icon, title, description, delay }) {
  return (
    <AnimateIn delay={delay}>
      <SurfaceCard className="h-full p-5 md:p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-soft text-secondary-dark">
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </div>
        <h3 className="mt-4 font-display text-base font-semibold text-heading">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </SurfaceCard>
    </AnimateIn>
  );
}

export default function EverythingConnected() {
  const { eyebrow, title, intro, flows, benefits } = EVERYTHING_CONNECTED;
  const [hoveredFlow, setHoveredFlow] = useState(null);
  const [expandedFlow, setExpandedFlow] = useState(flows[0]?.id ?? null);

  const toggleFlow = (id) => {
    setExpandedFlow((current) => (current === id ? null : id));
  };

  return (
    <Section
      id={EVERYTHING_CONNECTED_ANCHOR}
      tone="default"
      labelledBy="everything-connected-heading"
    >
      <SectionHeading
        id="everything-connected-heading"
        eyebrow={eyebrow}
        title={title}
        description={intro}
        align="left"
        className="mb-10 md:mb-12"
      />

      <div className="space-y-5 md:space-y-6">
        {flows.map((flow, index) => (
          <WorkflowPanel
            key={flow.id}
            flow={flow}
            index={index}
            isActive={hoveredFlow === flow.id || expandedFlow === flow.id}
            isExpanded={expandedFlow === flow.id}
            onToggle={toggleFlow}
            onHover={setHoveredFlow}
            onLeave={() => setHoveredFlow(null)}
          />
        ))}
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
        {benefits.map((benefit, i) => (
          <li key={benefit.title} className="list-none">
            <BenefitCard {...benefit} delay={flows.length * 80 + 100 + i * 60} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
