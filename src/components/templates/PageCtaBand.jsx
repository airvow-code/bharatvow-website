import Button from '@/components/ui/Button';
import { SITE } from '@/utils/constants';
import { digitalLifePath } from '@/utils/routes';

export default function PageCtaBand({
  title = 'Ready to organize your digital life?',
  description = 'Download BharatVow — Link Vault and Status Viewer are free without a subscription.',
  primaryLabel = 'Download on Google Play',
  secondaryLabel = 'Explore Your Digital Life',
  secondaryTo = digitalLifePath(),
}) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-br from-primary-soft/40 to-canvas px-5 py-8 text-center sm:px-6 md:px-10 md:py-12">
      <p className="font-display text-xl font-bold text-heading md:text-2xl">{title}</p>
      {description && (
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      )}
      <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <Button href={SITE.playStoreUrl} size="lg" external className="w-full sm:w-auto">
          {primaryLabel}
        </Button>
        <Button to={secondaryTo} variant="outline" size="lg" className="w-full sm:w-auto">
          {secondaryLabel}
        </Button>
      </div>
    </div>
  );
}
