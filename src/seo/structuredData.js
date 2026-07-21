import { SITE } from '@/utils/constants';
import { DEFAULT_OG_IMAGE } from '@/seo/defaults';
import { MODULE_COUNTS } from '@/config/moduleCounts';
import { MARKETING_COUNT_COPY } from '@/data/homepageCopy';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.company,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-header.webp`,
    brand: {
      '@type': 'Brand',
      name: SITE.name,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '507, 5th Floor, Gordhansky Tower, Jhotwara',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302012',
      addressCountry: 'IN',
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: SITE.company,
      url: SITE.url,
    },
  };
}

export function webPageJsonLd({ title, description, path }) {
  const url = `${SITE.url}${path === '/' ? '' : path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function breadcrumbListJsonLd(items) {
  if (!items?.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: `${SITE.url}${item.path === '/' ? '' : item.path}` } : {}),
    })),
  };
}

export function softwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE.name,
    operatingSystem: 'Android',
    applicationCategory: 'LifestyleApplication',
    description:
      `Personal Digital Life Platform — ${MODULE_COUNTS.dashboard} connected Digital Tools (${MARKETING_COUNT_COPY.premiumToolsPhrase} with subscription). Organize budgets, home records, vehicles, events, reminders, festivals, and everyday records. BharatVow does not process transactions or move funds.`,
    ...(SITE.androidPackageName
      ? {
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'Android application ID',
            value: SITE.androidPackageName,
          },
        }
      : {}),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '0',
      highPrice: '2000',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          description: `Link Vault and Status Saver — ${MODULE_COUNTS.free} free tools without subscription`,
        },
        {
          '@type': 'Offer',
          price: '300',
          priceCurrency: 'INR',
          description: 'Monthly subscription (before GST)',
        },
        {
          '@type': 'Offer',
          price: '2000',
          priceCurrency: 'INR',
          description: 'Yearly subscription (before GST)',
        },
      ],
    },
    downloadUrl: SITE.playStoreUrl,
    image: DEFAULT_OG_IMAGE,
  };
}

export function contactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BharatVow',
    url: `${SITE.url}/contact`,
    description: 'Contact BharatVow support for app help, feedback, and account questions.',
  };
}

export function faqPageJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/** Merge multiple JSON-LD nodes into a @graph document. */
export function jsonLdGraph(...nodes) {
  const flat = nodes.flat().filter(Boolean);
  if (flat.length === 0) return null;
  if (flat.length === 1) return flat[0];
  return {
    '@context': 'https://schema.org',
    '@graph': flat.map((node) => {
      const { '@context': _ctx, ...rest } = node;
      return rest;
    }),
  };
}
