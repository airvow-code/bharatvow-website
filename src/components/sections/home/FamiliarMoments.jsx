import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SurfaceCard from '@/components/ui/SurfaceCard';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/common/AnimateIn';
import {
  FAMILIAR_MOMENTS,
  FAMILIAR_MOMENTS_INTRO,
  FAMILIAR_MOMENTS_CLOSING,
} from '@/data/home';
import { HOME_ANCHORS } from '@/utils/anchors';
import { digitalLifePath } from '@/utils/routes';
import { chipWrap } from '@/utils/chipStyles';
import { cn } from '@/utils/cn';

function MomentCard({ icon: Icon, title, story, tone, delay }) {
  return (
    <AnimateIn delay={delay}>
      <Link to={digitalLifePath()} className="block h-full">
        <SurfaceCard
          variant="default"
          className={cn(
            'group h-full p-6 transition-all duration-200',
            'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md motion-safe:hover:border-primary-mid',
          )}
        >
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 motion-safe:group-hover:scale-110',
            chipWrap(tone),
          )}
        >
          <Icon size={24} strokeWidth={1.75} aria-hidden />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-heading">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted">{story}</p>
        </SurfaceCard>
      </Link>
    </AnimateIn>
  );
}

export default function FamiliarMoments() {
  return (
    <Section id={HOME_ANCHORS.moments} tone="cream" labelledBy="familiar-heading">
      <SectionHeading
        id="familiar-heading"
        eyebrow="We've all been there"
        title="The small daily moments that pile up in every Indian home"
        description={FAMILIAR_MOMENTS_INTRO}
        align="left"
        className="mb-10 md:mb-12"
      />

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {FAMILIAR_MOMENTS.map((moment, i) => (
          <li key={moment.title} className="list-none">
            <MomentCard {...moment} delay={i * 60} />
          </li>
        ))}
      </ul>

      <AnimateIn delay={FAMILIAR_MOMENTS.length * 60 + 80}>
        <p className="mx-auto mt-12 max-w-prose text-center font-display text-lg font-medium leading-relaxed text-heading md:mt-14 md:text-xl">
          {FAMILIAR_MOMENTS_CLOSING}
        </p>
        <p className="mx-auto mt-3 max-w-prose text-center text-sm text-muted">
          Each moment connects to a life area inside BharatVow.
        </p>
        <div className="mt-6 text-center">
          <Button to={digitalLifePath()} variant="outline">
            Explore Digital Life
          </Button>
        </div>
      </AnimateIn>
    </Section>
  );
}
