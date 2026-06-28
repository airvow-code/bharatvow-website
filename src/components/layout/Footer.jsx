import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import OptimizedImage from '@/components/common/OptimizedImage';
import { FOOTER_COLUMNS, FOOTER_COMPLIANCE, SITE } from '@/utils/constants';
import { FOOTER_LOGO, FOOTER_LOGO_HEIGHT, FOOTER_LOGO_WIDTH } from '@/utils/images';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-section-y md:py-section-y-lg">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <OptimizedImage
              src={FOOTER_LOGO}
              alt=""
              width={FOOTER_LOGO_WIDTH}
              height={FOOTER_LOGO_HEIGHT}
              className="h-10 w-10 object-contain md:h-12 md:w-12"
              aria-hidden
            />
            <p className="mt-4 font-display text-lg font-bold">{SITE.name}</p>
            <p className="mt-1 text-sm text-on-dark-muted">{SITE.tagline}</p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-on-dark-muted">
              {SITE.company}
              <br />
              {SITE.address}
              <br />
              <a href={`mailto:${SITE.email}`} className="text-secondary hover:underline">
                {SITE.email}
              </a>
              <br />
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-secondary hover:underline">
                {SITE.phone}
              </a>
            </address>
          </div>

          {FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-on-dark-muted">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-white/90 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-primary-light/30 pt-5">
          <div className="space-y-1 text-[12px] leading-4 text-on-dark-muted md:text-[13px]">
            <div className="flex flex-col items-center gap-1 md:flex-row md:justify-between">
              <p className="m-0 text-center md:text-left">
                © {new Date().getFullYear()} {SITE.name}. {FOOTER_COMPLIANCE.copyrightSuffix}
              </p>

              <p className="m-0 text-center md:text-right">
                {FOOTER_COMPLIANCE.countryOfOrigin}
              </p>
            </div>

            <div className="space-y-0 text-center">
              <p className="m-0">{FOOTER_COMPLIANCE.productOf}</p>

              <p className="m-0 text-[12px]">
                CIN: {SITE.cin} | GSTIN: {SITE.gstin}
              </p>
            </div>

            <p className="m-0 text-center text-[11px] leading-4 text-on-dark-muted">
              {FOOTER_COMPLIANCE.paymentNotice}
            </p>

            <p className="m-0 text-center text-[11px] leading-4 text-on-dark-muted">
              {FOOTER_COMPLIANCE.serviceDisclaimer}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
