import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import SurfaceCard from '@/components/ui/SurfaceCard';
import { getDashboardToolNeighbors } from '@/config/mainDashboard';
import { digitalLifePath } from '@/utils/routes';
import { getModule } from '@/data/modules';

/**
 * Previous / next navigation — Main Dashboard order (MY_SERVICES).
 * First tool: next only. Last tool: previous only.
 */
export default function DigitalToolDashboardNav({ slug }) {
  const { previous, next } = getDashboardToolNeighbors(slug);

  if (!previous && !next) return null;

  const prevModule = previous ? getModule(previous.slug) : null;
  const nextModule = next ? getModule(next.slug) : null;
  const PrevIcon = prevModule?.icon;
  const NextIcon = nextModule?.icon;

  return (
    <Container className="border-t border-border pb-section-y pt-10 md:pb-section-y-lg md:pt-12">
      <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">
        Digital Tool navigation
      </p>
      <div
        className={`mt-4 grid gap-4 ${previous && (next || !next) ? 'sm:grid-cols-2' : 'max-w-md'}`}
      >
        {previous && prevModule && (
          <Link to={digitalLifePath(previous.slug)} className="group block h-full">
            <SurfaceCard
              hover="lift"
              className="flex h-full flex-col p-5 md:p-6"
            >
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                <ArrowLeft size={16} strokeWidth={2} aria-hidden />
                Previous Digital Tool
              </span>
              <div className="mt-4 flex items-center gap-3">
                {PrevIcon && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <PrevIcon size={20} strokeWidth={1.75} aria-hidden />
                  </div>
                )}
                <p className="min-w-0 font-display text-base font-bold text-heading sm:text-lg">{previous.label}</p>
              </div>
            </SurfaceCard>
          </Link>
        )}

        {next && nextModule && (
          <Link
            to={digitalLifePath(next.slug)}
            className={`group block h-full ${previous ? '' : 'sm:col-start-1'}`}
          >
            <SurfaceCard
              hover="lift"
              className="flex h-full flex-col p-5 md:p-6"
            >
              <span className="inline-flex items-center gap-1.5 self-end text-sm font-semibold text-primary">
                Next Digital Tool
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </span>
              <div className="mt-4 flex items-center justify-end gap-3 text-right">
                <p className="min-w-0 font-display text-base font-bold text-heading sm:text-lg">{next.label}</p>
                {NextIcon && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <NextIcon size={20} strokeWidth={1.75} aria-hidden />
                  </div>
                )}
              </div>
            </SurfaceCard>
          </Link>
        )}

        {!next && previous && (
          <Link to={digitalLifePath()} className="group block h-full">
            <SurfaceCard
              hover="lift"
              className="flex h-full flex-col p-5 md:p-6"
            >
              <span className="inline-flex items-center gap-1.5 self-end text-sm font-semibold text-primary">
                Return to Digital Life
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </span>
              <div className="mt-4 flex items-center justify-end gap-3 text-right">
                <p className="min-w-0 font-display text-base font-bold text-heading sm:text-lg">All Digital Tools</p>
              </div>
            </SurfaceCard>
          </Link>
        )}
      </div>
    </Container>
  );
}
