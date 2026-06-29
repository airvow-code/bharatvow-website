import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PhoneMockupScreen from '@/components/common/PhoneMockupScreen';
import AnimateIn from '@/components/common/AnimateIn';
import { SITE } from '@/utils/constants';
import { digitalLifePath } from '@/utils/routes';

export default function DigitalToolHero({ module, valueProposition, heroScreen }) {
  const Icon = module.icon;
  const hasScreen = heroScreen && !heroScreen.isPlaceholder;

  return (
    <header className="border-b border-border bg-gradient-to-b from-primary-soft/70 via-primary-soft/30 to-canvas">
      <div className="mx-auto grid min-w-0 max-w-container gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
        <AnimateIn className="min-w-0">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
            Digital Tool
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-primary/10">
              <Icon size={28} strokeWidth={1.75} aria-hidden />
            </div>
            {module.free && <Badge variant="free">Free</Badge>}
          </div>
          <h1 className="mt-5 text-balance font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {module.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {valueProposition}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={SITE.playStoreUrl} size="lg" external className="w-full sm:w-auto">
              Download BharatVow
            </Button>
            <Button to={digitalLifePath()} variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Your Digital Life
            </Button>
          </div>
        </AnimateIn>

        {hasScreen && (
          <AnimateIn delay={80} className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-[320px]">
            <PhoneMockupScreen
              screen={{
                ...heroScreen,
                alt: `${module.name} screen in BharatVow app`,
              }}
              priority
              frameClassName="shadow-xl ring-1 ring-black/5"
            />
          </AnimateIn>
        )}
      </div>
    </header>
  );
}
