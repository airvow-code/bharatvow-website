import { PATHS } from '@/config/paths';
import { SITE } from '@/utils/constants';
import { MARKETING_COUNT_COPY } from '@/data/homepageCopy';

const { premiumToolsPhrase } = MARKETING_COUNT_COPY;

export const DOWNLOAD_PAGE = {
  path: PATHS.download,
  title: 'Download',
  headline: 'Get BharatVow on Google Play',
  lead: `Start with two free Digital Tools — Link Vault and Status Saver. Explore all ${premiumToolsPhrase} with a 7-day free trial, then choose a Monthly or Yearly plan.`,
  description:
    'Download BharatVow on Google Play — Personal Digital Life Platform for Android. Free tools to start; optional subscription for premium Digital Tools.',
  keywords:
    'Download BharatVow, BharatVow Google Play, Personal Digital Life Platform Android, BharatVow free trial',
  seo: {
    ogTitle: 'Download BharatVow on Google Play',
    ogDescription:
      `Get BharatVow on Google Play. Link Vault and Status Saver are free; ${premiumToolsPhrase} include a 7-day free trial before subscribing.`,
  },
  steps: [
    'Open Google Play Store on your Android device',
    'Search for "BharatVow" or use the official Play Store link below',
    'Tap Install and open the app',
    'Sign in with your mobile number using OTP and set your PIN',
    'Open any Digital Tool from the main dashboard to start organizing your records',
  ],
  freeTools: {
    heading: 'Free without a subscription',
    tools: ['Link Vault', 'Status Saver'],
  },
  trialNote:
    `A 7-day free trial lets you explore all ${premiumToolsPhrase} before choosing a Monthly (₹300/month) or Yearly (₹2,000/year) plan billed through Google Play. GST and applicable taxes are added before you confirm purchase.`,
  inAppBalanceNote:
    'If you have an in-app balance from the distributor referral program, review the Cancellation & Refund Policy before deleting your account. Balance handling follows that policy and is separate from Google Play subscription billing.',
  playStorePending:
    'The official Google Play link will appear here as soon as the listing is live. Set VITE_PLAY_STORE_URL for production builds, or use the header download button when available.',
  helpLinks: [
    { label: 'Pricing', path: PATHS.pricing },
    { label: 'FAQ', path: PATHS.faq },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Delete Account', path: PATHS.deleteAccount },
  ],
  primaryCta: 'Download on Google Play',
  secondaryCta: 'Explore Digital Life',
  secondaryHref: PATHS.digitalLife,
  company: SITE.company,
};
