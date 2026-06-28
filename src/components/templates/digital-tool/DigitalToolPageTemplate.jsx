import { getScreenshot } from '@/generated/screenshots';
import {
  resolveConnectedDigitalTools,
  resolveDigitalToolScreenshots,
} from '@/utils/digitalToolPage';
import DigitalToolHero from './DigitalToolHero';
import DigitalToolWhyExists from './DigitalToolWhyExists';
import DigitalToolWhoShouldUse from './DigitalToolWhoShouldUse';
import DigitalToolRealBenefits from './DigitalToolRealBenefits';
import DigitalToolFeatures from './DigitalToolFeatures';
import DigitalToolHowItWorks from './DigitalToolHowItWorks';
import DigitalToolRealLifeExamples from './DigitalToolRealLifeExamples';
import DigitalToolScreenshots from './DigitalToolScreenshots';
import DigitalToolConnected from './DigitalToolConnected';
import DigitalToolFaq from './DigitalToolFaq';
import DigitalToolRelatedArticles from './DigitalToolRelatedArticles';
import DigitalToolFinalCta from './DigitalToolFinalCta';
import DigitalToolDashboardNav from './DigitalToolDashboardNav';

/**
 * Approved Digital Tool page template.
 * @see src/data/digitalToolPages/ — per-tool content registry
 *
 * @param {Object} props
 * @param {import('@/data/modules').Module} props.module
 * @param {import('@/data/digitalToolPages/templateSchema.js').DigitalToolTemplateContent} props.content
 * @param {string | null} props.openFaqId
 * @param {(id: string) => void} props.onToggleFaq
 */
export default function DigitalToolPageTemplate({
  module,
  content,
  openFaqId,
  onToggleFaq,
}) {
  const heroScreenshotId = content.screenshots?.[0]?.id ?? module.screenshotId;
  const heroScreenRaw = heroScreenshotId ? getScreenshot(heroScreenshotId) : null;
  const heroScreen = heroScreenRaw && !heroScreenRaw.isPlaceholder ? heroScreenRaw : null;

  const galleryScreens = resolveDigitalToolScreenshots(content.screenshots ?? []);
  const connectedTools = resolveConnectedDigitalTools(content.connectedTools ?? []);

  const showWhoShouldUse =
    (content.whoShouldUse?.audiences?.length ?? 0) > 0
    || (content.whoShouldUse?.situations?.length ?? 0) > 0;

  const showRealBenefits = (content.realBenefits?.length ?? 0) > 0;

  const showRelatedArticles = (content.relatedArticles?.length ?? 0) > 0;

  return (
    <>
      {/* §1 Hero */}
      <DigitalToolHero
        module={module}
        valueProposition={content.valueProposition}
        heroScreen={heroScreen}
      />

      {/* §2 Why Smart Khata? / Why this tool exists */}
      <DigitalToolWhyExists
        toolName={module.name}
        eyebrow={content.whyExists.eyebrow}
        headline={content.whyExists.headline}
        everydayProblem={content.whyExists.everydayProblem}
        whyFamiliesNeedIt={content.whyExists.whyFamiliesNeedIt}
      />

      {/* §3 Key Features */}
      <DigitalToolFeatures
        toolName={module.name}
        title={content.sectionTitles?.features}
        eyebrow={content.sectionTitles?.featuresEyebrow}
        description={content.sectionTitles?.featuresDescription}
        variant={content.featuresVariant}
        features={content.features}
      />

      {/* §4 How It Works / Connected workflow */}
      <DigitalToolHowItWorks
        toolName={module.name}
        steps={content.howItWorks}
        title={content.sectionTitles?.howItWorks}
        eyebrow={content.sectionTitles?.howItWorksEyebrow}
        description={content.sectionTitles?.howItWorksDescription}
      />

      {/* §5 Real App Screenshots */}
      <DigitalToolScreenshots toolName={module.name} screens={galleryScreens} />

      {/* §6 Everyday Use Cases */}
      <DigitalToolRealLifeExamples
        toolName={module.name}
        title={content.sectionTitles?.useCases}
        examples={content.realLifeExamples}
      />

      {/* §7 Works With */}
      <DigitalToolConnected
        title={content.sectionTitles?.worksWith}
        connections={connectedTools}
      />

      {/* Optional — only when authored */}
      {showWhoShouldUse && (
        <DigitalToolWhoShouldUse
          toolName={module.name}
          headline={content.whoShouldUse.headline}
          audiences={content.whoShouldUse.audiences}
          situations={content.whoShouldUse.situations}
        />
      )}

      {showRealBenefits && (
        <DigitalToolRealBenefits
          toolName={module.name}
          title={content.sectionTitles?.realBenefits}
          benefits={content.realBenefits}
        />
      )}

      {/* §8 FAQs */}
      <DigitalToolFaq
        toolName={module.name}
        toolSlug={module.slug}
        faq={content.faq}
        openFaqId={openFaqId}
        onToggleFaq={onToggleFaq}
      />

      {showRelatedArticles && (
        <DigitalToolRelatedArticles
          title={content.sectionTitles?.relatedArticles}
          articles={content.relatedArticles}
        />
      )}

      {/* §9 Final CTA */}
      <DigitalToolFinalCta module={module} finalCta={content.finalCta} />

      {/* §10 Main Dashboard prev / next navigation */}
      <DigitalToolDashboardNav slug={module.slug} />
    </>
  );
}
