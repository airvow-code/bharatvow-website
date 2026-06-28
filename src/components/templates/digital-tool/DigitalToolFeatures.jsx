import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';
import { resolveSectionHeading } from '@/data/digitalToolPages/framework';
import { getScreenshot } from '@/generated/screenshots';

export default function DigitalToolFeatures({
  toolName,
  title: titleOverride,
  eyebrow: eyebrowOverride,
  description: descriptionOverride,
  features,
  variant = 'default',
}) {
  const title = titleOverride || resolveSectionHeading('What {toolName} helps you do', toolName);
  const eyebrow = eyebrowOverride || 'Key features';
  const isEcosystem =
    variant === 'ecosystem' || features.some((feature) => feature.problemSolved);

  return (
    <DigitalToolSection
      id="tool-features"
      tone="surface"
      eyebrow={eyebrow}
      title={title}
      description={descriptionOverride}
      align="left"
    >
      <ul
        className={`grid gap-4 ${isEcosystem ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
      >
        {features.map((feature, i) => {
          const Icon = feature.icon;
          const screen =
            feature.screenshotId
              ? getScreenshot(feature.screenshotId)
              : null;
          const showScreenshot = screen && !screen.isPlaceholder;

          return (
            <AnimateIn key={feature.title} delay={i * 40} as="li" className="list-none">
              <SurfaceCard hover="lift" className="h-full p-5 md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-heading">{feature.title}</h3>

                {isEcosystem ? (
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-heading">Purpose</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                    </div>
                    {feature.problemSolved && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-heading">
                          Problem solved
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{feature.problemSolved}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                )}

                {showScreenshot && (
                  <figure className="mt-4 overflow-hidden rounded-xl border border-border bg-canvas">
                    <img
                      src={screen.src}
                      srcSet={screen.srcSet}
                      sizes={screen.sizes}
                      width={screen.width}
                      height={screen.height}
                      alt={`${feature.title} in BharatVow Home Vault`}
                      className="h-auto w-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                )}
              </SurfaceCard>
            </AnimateIn>
          );
        })}
      </ul>
    </DigitalToolSection>
  );
}
