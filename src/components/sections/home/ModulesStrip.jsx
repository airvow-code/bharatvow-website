import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/common/AnimateIn';
import { getDashboardModules } from '@/data/modules';
import { HOME_ANCHORS } from '@/utils/anchors';
import { digitalLifePath } from '@/utils/routes';
import { cn } from '@/utils/cn';
import { HOMEPAGE_MODULE_COPY } from '@/data/homepageCopy';

function ModuleRow({ module, delay }) {
  const Icon = module.icon;

  return (
    <AnimateIn delay={delay}>
      <Link
        to={digitalLifePath(module.slug)}
        className={cn(
          'flex min-h-[44px] gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-primary-mid hover:bg-primary-soft/30',
          module.free && 'border-accent-green/25 bg-accent-green-soft/30',
        )}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <Icon size={18} strokeWidth={2} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-sm font-bold text-heading">{module.name}</h4>
            {module.free && <Badge variant="free">Free</Badge>}
          </div>
          <p className="mt-0.5 text-sm leading-relaxed text-muted">{module.tagline}</p>
        </div>
      </Link>
    </AnimateIn>
  );
}

export default function ModulesStrip() {
  const tools = getDashboardModules();

  return (
    <Section id={HOME_ANCHORS.modules} tone="default" labelledBy="modules-heading">
      <SectionHeading
        id="modules-heading"
        eyebrow="Tools inside the app"
        title={HOMEPAGE_MODULE_COPY.connectedToolsTitle}
        description={HOMEPAGE_MODULE_COPY.connectedToolsDescription}
        align="left"
        className="mb-10 md:mb-12"
      />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((mod, i) => (
          <li key={mod.slug} className="list-none">
            <ModuleRow module={mod} delay={i * 40} />
          </li>
        ))}
      </ul>

      <AnimateIn delay={200} className="mt-10 text-center md:mt-12">
        <Button to={digitalLifePath()} variant="outline" className="gap-2">
          Explore Digital Life
          <ArrowRight size={18} strokeWidth={2} aria-hidden />
        </Button>
      </AnimateIn>
    </Section>
  );
}
