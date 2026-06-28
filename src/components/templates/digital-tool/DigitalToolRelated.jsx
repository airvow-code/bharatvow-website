import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/common/AnimateIn';
import Badge from '@/components/ui/Badge';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { modulePath } from '@/utils/routes';
import DigitalToolSection from './DigitalToolSection';

export default function DigitalToolRelated({ relatedTools }) {
  if (!relatedTools?.length) return null;

  return (
    <DigitalToolSection
      id="tool-related"
      tone="surface"
      eyebrow="Related tools"
      title="More Digital Tools in BharatVow"
      description="Tools that families often use together."
      align="left"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedTools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <AnimateIn key={tool.slug} delay={i * 40} as="li" className="list-none">
              <SurfaceCard hover="lift" className="h-full p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-semibold text-heading">{tool.name}</h3>
                      {tool.free && <Badge variant="free">Free</Badge>}
                    </div>
                    <p className="mt-1 text-sm text-muted">{tool.purpose ?? tool.tagline}</p>
                  </div>
                </div>
                <Link
                  to={modulePath(tool.slug)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight size={16} strokeWidth={2} aria-hidden />
                </Link>
              </SurfaceCard>
            </AnimateIn>
          );
        })}
      </ul>
    </DigitalToolSection>
  );
}
