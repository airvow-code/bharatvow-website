import {
  Wallet,
  Home,
  Users,
  Car,
  ShoppingCart,
  Plane,
  Link2,
  Layers,
} from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SurfaceCard from '@/components/ui/SurfaceCard';
import AnimateIn from '@/components/common/AnimateIn';
import Button from '@/components/ui/Button';
import { WHY_DIFFERENT, WHY_DIFFERENT_ANCHOR } from '@/data/whyDifferent';
import { cn } from '@/utils/cn';

const PLATFORM_ICONS = [Wallet, Home, Users, Car, ShoppingCart, Plane, Link2];

function TraditionalColumn() {
  const { traditional } = WHY_DIFFERENT;

  return (
    <AnimateIn>
      <div className="h-full rounded-[1.25rem] border border-border bg-surface p-6 md:p-7">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-muted">
          {traditional.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{traditional.caption}</p>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {traditional.apps.map(({ icon: Icon, label }, i) => (
            <AnimateIn key={label} delay={80 + i * 50}>
              <div
                className={cn(
                  'flex flex-col items-center gap-2 rounded-xl border border-border bg-canvas px-2 py-4 text-center shadow-sm',
                  i % 2 === 0 ? 'motion-safe:-rotate-1' : 'motion-safe:rotate-1',
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-subtle">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </div>
                <span className="font-body text-[11px] font-medium leading-tight text-muted">
                  {label}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}

function BharatVowColumn() {
  const { bharatvow } = WHY_DIFFERENT;

  return (
    <AnimateIn delay={120}>
      <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-primary-mid/40 bg-primary-soft/40 p-6 md:p-7">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/10 blur-2xl"
        />

        <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">
          {bharatvow.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-body">{bharatvow.caption}</p>

        <SurfaceCard className="relative mt-8 border-primary-mid/30 bg-surface p-5 shadow-card md:p-6">
          {/* Hub illustration */}
          <div className="relative mx-auto flex h-36 max-w-[240px] items-center justify-center">
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full text-primary-mid/50"
              viewBox="0 0 240 144"
              fill="none"
            >
              <circle cx="120" cy="72" r="18" className="fill-primary-soft stroke-primary/20" strokeWidth="1" />
              {[...PLATFORM_ICONS.keys()].map((i) => {
                const deg = (i / PLATFORM_ICONS.length) * 360 - 90;
                const rad = (deg * Math.PI) / 180;
                const x2 = 120 + Math.cos(rad) * 52;
                const y2 = 72 + Math.sin(rad) * 52;
                return (
                  <line
                    key={i}
                    x1="120"
                    y1="72"
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                );
              })}
            </svg>

            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-sm">
              <Layers size={20} strokeWidth={1.75} aria-hidden />
            </div>

            {PLATFORM_ICONS.map((Icon, i) => {
              const deg = (i / PLATFORM_ICONS.length) * 360 - 90;
              const rad = (deg * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * 42;
              const y = 50 + Math.sin(rad) * 42;
              return (
                <div
                  key={bharatvow.lifeAreas[i]}
                  className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-surface text-primary shadow-sm"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <Icon size={16} strokeWidth={1.75} aria-hidden />
                </div>
              );
            })}
          </div>

          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {bharatvow.lifeAreas.map((area) => (
              <li
                key={area}
                className="rounded-full bg-canvas px-2.5 py-1 font-body text-[11px] font-medium text-heading"
              >
                {area}
              </li>
            ))}
          </ul>
        </SurfaceCard>
      </div>
    </AnimateIn>
  );
}

function BenefitCard({ icon: Icon, title, description, delay }) {
  return (
    <AnimateIn delay={delay}>
      <SurfaceCard
        className={cn(
          'h-full p-6 transition-all duration-200',
          'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md motion-safe:hover:ring-1 motion-safe:hover:ring-primary-mid/30',
        )}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Icon size={22} strokeWidth={1.75} aria-hidden />
        </div>
        <h3 className="mt-4 font-display text-base font-semibold text-heading">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </SurfaceCard>
    </AnimateIn>
  );
}

export default function WhyDifferent() {
  return (
    <Section
      id={WHY_DIFFERENT_ANCHOR}
      tone="cream"
      labelledBy="why-different-heading"
    >
      <SectionHeading
        id="why-different-heading"
        eyebrow={WHY_DIFFERENT.eyebrow}
        title={WHY_DIFFERENT.title}
        description={WHY_DIFFERENT.intro}
        align="left"
        className="mb-10 md:mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <TraditionalColumn />
        <BharatVowColumn />
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:gap-6">
        {WHY_DIFFERENT.benefits.map((benefit, i) => (
          <li key={benefit.title} className="list-none">
            <BenefitCard {...benefit} delay={320 + i * 60} />
          </li>
        ))}
      </ul>

      <AnimateIn delay={500} className="mt-10 text-center md:mt-12">
        <Button to="/about" variant="outline">
          Read our story
        </Button>
      </AnimateIn>
    </Section>
  );
}
