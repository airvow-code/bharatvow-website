import PageLayout from '@/layouts/PageLayout';
import { PATHS } from '@/config/paths';
import { getRouteMeta } from '@/seo/routeMeta';

const meta = getRouteMeta(PATHS.download);
const crumbs = [
  { label: 'Home', path: PATHS.home },
  { label: 'Download', path: PATHS.download },
];

export default function Download() {
  return (
    <PageLayout
      seo={{
        title: meta?.title ?? 'Download',
        description: meta?.description,
        keywords: meta?.keywords,
        path: PATHS.download,
      }}
      breadcrumbs={crumbs}
      hero={{
        title: 'Get BharatVow on Google Play',
        lead: 'Free tools to start. Explore all Digital Tools with a 7-day free trial — then choose a Monthly or Yearly plan.',
      }}
      showCta={false}
    >
      <div className="mx-auto max-w-2xl py-10 text-center md:py-14">
        <p className="text-muted leading-relaxed">
          Detailed download instructions and Play Store link will appear here.
          Use the header download button or homepage CTA in the meantime.
        </p>
      </div>
    </PageLayout>
  );
}
