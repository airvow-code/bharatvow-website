import AnimateIn from '@/components/common/AnimateIn';
import SurfaceCard from '@/components/ui/SurfaceCard';
import DigitalToolSection from './DigitalToolSection';

export default function DigitalToolRelatedArticles({ title: titleOverride, articles }) {
  const title = titleOverride || 'Related Articles';

  return (
    <DigitalToolSection
      id="tool-related-articles"
      eyebrow="Blog"
      title={title}
      description="Practical guides and checklists — articles coming soon on the BharatVow blog."
      align="left"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <AnimateIn key={article.slug} delay={i * 40} as="li" className="list-none">
            <SurfaceCard className="h-full p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Coming soon</p>
              <h3 className="mt-2 font-display text-base font-bold text-heading">{article.title}</h3>
              {article.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{article.description}</p>
              )}
            </SurfaceCard>
          </AnimateIn>
        ))}
      </ul>
    </DigitalToolSection>
  );
}
