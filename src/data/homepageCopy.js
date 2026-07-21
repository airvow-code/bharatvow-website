/**
 * Homepage marketing copy derived from MODULE_COUNTS — no hardcoded tool numbers.
 * Used by homepage sections, Digital Life hub, FAQ, pricing, download, about, and routeMeta.
 */
import { MODULE_COUNTS } from '@/config/moduleCounts';

const { dashboard, premium, free } = MODULE_COUNTS;

export const HOMEPAGE_MODULE_COPY = {
  connectedToolsTitle: `${dashboard} connected Digital Tools. One digital life ecosystem.`,
  connectedToolsDescription: `Start free with Link Vault and Status Saver. Try all ${premium} premium software features with a 7-day free trial — then choose a Monthly or Yearly subscription plan.`,
  digitalLifeHeadline: `${dashboard} connected tools. One digital life ecosystem.`,
  digitalLifeIntro:
    'These are not isolated apps. Each tool connects inside BharatVow — so your reminders, personal records, documents, home upkeep, grocery, vehicles, celebrations, and daily life stay organized in one place. Start free with Link Vault and Status Saver. Try premium software features with a 7-day free trial.',
  downloadBandDescription: `Link Vault and Status Saver are free. ${premium} premium software features include a 7-day free trial — subscribe monthly or yearly when you are ready.`,
  premiumCountLabel: `${premium} premium`,
  freeCountLabel: `${free} free`,
};

/** Shared subscription / dashboard count phrases — import instead of hardcoding 10, 12, etc. */
export const MARKETING_COUNT_COPY = {
  premiumToolsPhrase: `${premium} premium Digital Tools`,
  premiumBenefitTitle: `${premium} Premium Digital Tools`,
  dashboardToolsPhrase: `${dashboard} Digital Tools on the main dashboard`,
  dashboardToolsShort: `${dashboard} tools`,
  pricingIntro: `${premium} premium software features with a subscription. ${free} free tools to start.`,
  pricingDescription: `BharatVow subscription plans — ₹300/month or ₹2,000/year for ${premium} premium software features. Link Vault and Status Saver are free. Start with a 7-day free trial.`,
  subscriptionUnlockNote: `Subscriptions unlock all ${premium} premium software features on the dashboard. Link Vault and Status Saver remain free without a subscription.`,
  trialExploreNote: `Explore all ${premium} premium software features before choosing a subscription. Link Vault and Status Saver remain free without a subscription.`,
  ecosystemIntro: `BharatVow includes ${dashboard} Digital Tools on the main dashboard — each designed for a specific part of everyday life. Link Vault and Status Saver are free without a subscription. The other ${premium} premium software features are available with a 7-day free trial before choosing a Monthly (₹300/month) or Yearly (₹2,000/year) subscription billed through Google Play. Subscriptions renew automatically unless cancelled in Google Play subscription settings. An optional distributor referral program is available in-app under separate program rules and the Distributor Agreement.`,
  freeToolsLabel: `Link Vault and Status Saver — ${free} free tools without a subscription`,
};
