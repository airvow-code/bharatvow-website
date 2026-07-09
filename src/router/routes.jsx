/**
 * BharatVow website route tree.
 *
 * Structure:
 *   /                     → pages/Home.jsx (homepage — do not move)
 *   /digital-life         → Digital Tools hub (dashboard order)
 *   /digital-life/:slug   → Tool detail pages
 *   /about, /pricing, etc → pages/marketing/ | support/
 *   /legal                → pages/legal/
 *   /blog                 → pages/blog/
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import LazyBoundary from '@/components/common/LazyBoundary';
import LegacyModuleRedirect from '@/router/LegacyModuleRedirect';
import LegacyDigitalToolRedirect from '@/router/LegacyDigitalToolRedirect';
import LegacyLegalRedirect from '@/router/LegacyLegalRedirect';
import { PATHS, LEGAL_PATHS, digitalLifePath } from '@/config/paths';
import { RENAMED_DIGITAL_TOOL_SLUGS } from '@/config/legacyRoutes';

/* Homepage — kept at root pages/ per project convention */
const Home = lazy(() => import('@/pages/Home'));

/* Marketing */
const About = lazy(() => import('@/pages/marketing/About'));
const Pricing = lazy(() => import('@/pages/marketing/Pricing'));
const Download = lazy(() => import('@/pages/marketing/Download'));

/* Digital Life hub + tool detail */
const DigitalToolsHub = lazy(() => import('@/pages/digital-tools/DigitalToolsHub'));
const DigitalToolDetail = lazy(() => import('@/pages/digital-tools/DigitalToolDetail'));

/* Support */
const Faq = lazy(() => import('@/pages/support/Faq'));
const Contact = lazy(() => import('@/pages/support/Contact'));
const DeleteAccount = lazy(() => import('@/pages/support/DeleteAccount'));

/* Legal */
const LegalHub = lazy(() => import('@/pages/legal/LegalHub'));
const LegalDocument = lazy(() => import('@/pages/legal/LegalDocument'));

/* Blog */
const BlogIndex = lazy(() => import('@/pages/blog/BlogIndex'));

const NotFound = lazy(() => import('@/pages/NotFound'));

function lazyPage(Component) {
  return (
    <LazyBoundary>
      <Component />
    </LazyBoundary>
  );
}

export const routeConfig = [
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      { index: true, element: lazyPage(Home) },

      /* Marketing */
      { path: 'about', element: lazyPage(About) },
      { path: 'pricing', element: lazyPage(Pricing) },
      { path: 'download', element: lazyPage(Download) },

      /* Digital Life */
      { path: 'digital-life', element: lazyPage(DigitalToolsHub) },
      {
        path: 'digital-life/home-assets',
        element: <Navigate to={digitalLifePath('home-vault')} replace />,
      },
      ...RENAMED_DIGITAL_TOOL_SLUGS.map(({ legacy, canonical }) => ({
        path: `digital-life/${legacy}`,
        element: <Navigate to={digitalLifePath(canonical)} replace />,
      })),
      { path: 'digital-life/:slug', element: lazyPage(DigitalToolDetail) },

      /* Support */
      { path: 'faq', element: lazyPage(Faq) },
      { path: 'contact', element: lazyPage(Contact) },

      /* Legal Center */
      { path: 'legal', element: lazyPage(LegalHub) },
      { path: 'legal/:doc', element: <LegacyLegalRedirect /> },
      { path: 'privacy-policy', element: lazyPage(LegalDocument) },
      { path: 'terms', element: lazyPage(LegalDocument) },
      { path: 'disclaimer', element: lazyPage(LegalDocument) },
      { path: 'legal-information', element: lazyPage(LegalDocument) },
      { path: 'refund-policy', element: lazyPage(LegalDocument) },
      { path: 'grievance-redressal', element: lazyPage(LegalDocument) },
      { path: 'distributor-agreement', element: lazyPage(LegalDocument) },
      { path: 'delete-account', element: lazyPage(DeleteAccount) },

      /* Blog */
      { path: 'blog', element: lazyPage(BlogIndex) },

      /* Legacy redirects — preserve old URLs */
      { path: 'life-areas', element: <Navigate to={PATHS.digitalLife} replace /> },
      { path: 'life-areas/:slug', element: <Navigate to={PATHS.digitalLife} replace /> },
      { path: 'digital-tools', element: <Navigate to={PATHS.digitalLife} replace /> },
      { path: 'digital-tools/:slug', element: <LegacyDigitalToolRedirect /> },
      { path: 'modules', element: <Navigate to={PATHS.digitalLife} replace /> },
      { path: 'module/:slug', element: <LegacyModuleRedirect /> },
      { path: 'support/contact', element: <Navigate to={PATHS.contact} replace /> },
      { path: 'support/delete-account', element: <Navigate to={LEGAL_PATHS.deleteAccount} replace /> },

      { path: '*', element: lazyPage(NotFound) },
    ],
  },
];
