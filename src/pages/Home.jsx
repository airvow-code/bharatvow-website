import SEO from '@/seo/SEO';
import { getPageMeta } from '@/seo/defaults';
import {
  organizationJsonLd,
  websiteJsonLd,
  webPageJsonLd,
  softwareApplicationJsonLd,
  jsonLdGraph,
} from '@/seo/structuredData';
import LazySection from '@/components/common/LazySection';
import { HOME_SECTIONS } from '@/config/homeSections';
import HeroSection from '@/components/sections/home/HeroSection';
import BusinessIdentityBand from '@/components/sections/home/BusinessIdentityBand';
import TrustBar from '@/components/sections/home/TrustBar';

const meta = getPageMeta('/');

const sectionLoaders = {
  familiar: () => import('@/components/sections/home/FamiliarMoments'),
  lifeAreas: () => import('@/components/sections/home/LifeAreasBento'),
  whyDifferent: () => import('@/components/sections/home/WhyDifferent'),
  everythingConnected: () => import('@/components/sections/home/EverythingConnected'),
  modules: () => import('@/components/sections/home/ModulesStrip'),
  screenshots: () => import('@/components/sections/home/ProductShowcase'),
  morning: () => import('@/components/sections/home/MorningStory'),
  /** Re-enable when HOME_SECTIONS.testimonials is true */
  testimonials: () => import('@/components/sections/home/Testimonials'),
  faq: () => import('@/components/sections/home/HomeFaq'),
  download: () => import('@/components/sections/home/DownloadBand'),
};

export default function Home() {
  return (
    <>
      <SEO
        fullTitle={meta.fullTitle}
        description={meta.description}
        keywords={meta.keywords}
        path="/"
        ogType={meta.ogType}
        jsonLd={jsonLdGraph(
          organizationJsonLd(),
          websiteJsonLd(),
          softwareApplicationJsonLd(),
          webPageJsonLd({
            title: meta.fullTitle,
            description: meta.description,
            path: '/',
          }),
        )}
      />

      <HeroSection />
      <BusinessIdentityBand />
      <TrustBar />
      <LazySection loader={sectionLoaders.familiar} minHeight={420} fallbackLabel="Loading familiar moments" />
      <LazySection loader={sectionLoaders.lifeAreas} minHeight={520} fallbackLabel="Loading life areas" />
      <LazySection loader={sectionLoaders.whyDifferent} minHeight={680} fallbackLabel="Loading why BharatVow" />
      <LazySection loader={sectionLoaders.everythingConnected} minHeight={720} fallbackLabel="Loading connected flows" />
      <LazySection loader={sectionLoaders.modules} minHeight={480} fallbackLabel="Loading modules" />
      <LazySection loader={sectionLoaders.screenshots} minHeight={560} fallbackLabel="Loading product showcase" />
      <LazySection loader={sectionLoaders.morning} minHeight={280} fallbackLabel="Loading story" />
      {HOME_SECTIONS.testimonials && (
        <LazySection loader={sectionLoaders.testimonials} minHeight={320} fallbackLabel="Loading testimonials" />
      )}
      <LazySection loader={sectionLoaders.faq} minHeight={360} fallbackLabel="Loading questions" />
      <LazySection loader={sectionLoaders.download} minHeight={420} fallbackLabel="Loading download" />
    </>
  );
}
