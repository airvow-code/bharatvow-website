import Container from '@/components/ui/Container';
import PageCtaBand from '@/components/templates/PageCtaBand';
import { digitalLifePath } from '@/utils/routes';

export default function DigitalToolFinalCta({ module, finalCta }) {
  const title =
    finalCta?.title
    ?? (module.free
      ? `Try ${module.name} free on Google Play`
      : `Try ${module.name} with a 7-day free trial`);

  const description =
    finalCta?.description
    ?? (module.free
      ? `${module.name} is free without a subscription.`
      : `Explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.`);

  return (
    <Container className="pb-section-y md:pb-section-y-lg">
      <PageCtaBand
        title={title}
        description={description}
        primaryLabel="Download BharatVow"
        secondaryLabel={finalCta?.secondaryLabel ?? 'Explore Your Digital Life'}
        secondaryTo={finalCta?.secondaryTo ?? digitalLifePath()}
      />
    </Container>
  );
}
