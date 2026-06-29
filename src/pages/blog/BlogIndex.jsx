import PageLayout from '@/layouts/PageLayout';
import { PATHS } from '@/config/paths';
import { getRouteMeta } from '@/seo/routeMeta';

const meta = getRouteMeta(PATHS.blog);
const crumbs = [
  { label: 'Home', path: PATHS.home },
  { label: 'Blog', path: PATHS.blog },
];

export default function BlogIndex() {
  return (
    <PageLayout
      seo={{
        title: meta?.title ?? 'Blog',
        description: meta?.description,
        keywords: meta?.keywords,
        path: PATHS.blog,
        noIndex: true,
      }}
      breadcrumbs={crumbs}
      hero={{
        title: 'Stories for everyday digital life',
        lead: 'Guides, updates, and practical tips from BharatVow — articles coming soon.',
      }}
    >
      <div className="mx-auto max-w-2xl py-10 text-center md:py-14">
        <p className="text-muted leading-relaxed">
          The BharatVow blog is being prepared. Check back for digital life organization guides and product updates.
        </p>
      </div>
    </PageLayout>
  );
}
