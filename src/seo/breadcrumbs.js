import { PATHS } from '@/config/paths';

/** Breadcrumb trail builders for visible nav + BreadcrumbList schema. */

export function homeBreadcrumbs() {
  return [{ label: 'Home', path: PATHS.home }];
}

export function legalBreadcrumbs(title, path) {
  return [
    { label: 'Home', path: PATHS.home },
    { label: 'Legal', path: PATHS.legal },
    { label: title, path },
  ];
}

export function supportBreadcrumbs(title, path) {
  return [
    { label: 'Home', path: PATHS.home },
    { label: 'Support', path: PATHS.contact },
    { label: title, path },
  ];
}

export function faqBreadcrumbs() {
  return [
    { label: 'Home', path: PATHS.home },
    { label: 'FAQ', path: PATHS.faq },
  ];
}

export function digitalLifeBreadcrumbs(title, path) {
  return [
    { label: 'Home', path: PATHS.home },
    { label: 'Digital Life', path: PATHS.digitalLife },
    { label: title, path },
  ];
}

/** @deprecated use digitalLifeBreadcrumbs */
export function digitalToolsBreadcrumbs(title, path) {
  return digitalLifeBreadcrumbs(title, path);
}

/** @deprecated use digitalLifeBreadcrumbs */
export function modulesBreadcrumbs(title, path) {
  return digitalLifeBreadcrumbs(title, path);
}

/** @deprecated life area pages redirect to Digital Life hub */
export function lifeAreasBreadcrumbs(title, path) {
  return digitalLifeBreadcrumbs(title, path);
}

export function aboutBreadcrumbs() {
  return [
    { label: 'Home', path: PATHS.home },
    { label: 'About', path: PATHS.about },
  ];
}
