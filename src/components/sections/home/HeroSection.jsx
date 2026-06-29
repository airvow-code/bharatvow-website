import {
  ArrowRight,
  Cloud,
  Shield,
  Sparkles,
  Users,
  WifiOff,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/common/AnimateIn';
import HeroPhonePreview from '@/components/sections/home/HeroPhonePreview';
import { HERO, HERO_TRUST_BADGES } from '@/data/home';
import { SITE } from '@/utils/constants';
import { homeAnchor, HOME_ANCHORS } from '@/utils/anchors';
import { modulesPath } from '@/utils/routes';
import { cn } from '@/utils/cn';

const BADGE_ICONS = {
  users: Users,
  'wifi-off': WifiOff,
  shield: Shield,
  cloud: Cloud,
  sparkles: Sparkles,
};

function HeroTrustBadge({ label, icon, delay }) {
  const Icon = BADGE_ICONS[icon] ?? Shield;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/90 px-3 py-1.5',
        'font-body text-[12px] font-medium text-primary shadow-sm backdrop-blur-sm',
        'transition-all duration-200 hover:border-primary-mid hover:shadow-md',
        'motion-safe:animate-fade-up motion-reduce:opacity-100',
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon size={14} strokeWidth={2.25} className="shrink-0 text-secondary" aria-hidden />
      {label}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-cream-border bg-cream"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-primary-soft/50 blur-3xl sm:-right-16 sm:h-72 sm:w-72 md:top-12 md:h-96 md:w-96" />
        <div className="absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-secondary-soft/40 blur-3xl sm:-left-12 sm:h-64 sm:w-64 md:h-72 md:w-72" />
        <div className="absolute left-1/2 top-0 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid min-w-0 items-center gap-10 pb-12 pt-8 md:gap-12 md:pb-16 md:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-14 lg:pb-20 lg:pt-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(300px,400px)]">
          {/* Copy column — first on mobile */}
          <div className="flex min-w-0 flex-col justify-center">
            <AnimateIn>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-eyebrow">
                {HERO.eyebrow}
              </p>
            </AnimateIn>

            <AnimateIn delay={60}>
              <h1
                id="hero-heading"
                className="mt-4 text-balance font-display text-display-lg text-primary md:text-display-xl"
              >
                {HERO.title}
              </h1>
            </AnimateIn>

            <AnimateIn delay={120}>
              <p className="mt-5 max-w-hero-copy text-base leading-relaxed text-body sm:text-lg md:text-xl">
                {HERO.description}
              </p>
            </AnimateIn>

            <AnimateIn delay={160}>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Life areas BharatVow covers">
                {HERO.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-lg bg-surface/80 px-2.5 py-1 font-body text-[13px] font-medium text-muted ring-1 ring-border/60"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={SITE.playStoreUrl}
                  size="lg"
                  external
                  className="shadow-md ring-2 ring-secondary/30 transition-shadow hover:shadow-lg hover:ring-secondary/50"
                >
                  Download on Google Play
                </Button>
                <Button to={modulesPath()} variant="ghost" size="lg">
                  {HERO.ctaSecondary ?? 'Explore Your Digital Life'}
                  <ArrowRight size={18} strokeWidth={2} aria-hidden />
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn delay={260}>
              <div className="mt-8 flex flex-wrap gap-2">
                {HERO_TRUST_BADGES.map((badge, i) => (
                  <HeroTrustBadge key={badge.label} {...badge} delay={300 + i * 70} />
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Phone preview — below content on mobile */}
          <AnimateIn delay={120} className="flex justify-center lg:justify-end">
            <HeroPhonePreview />
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
