import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SEO from '@/seo/SEO';
import { digitalLifePath } from '@/utils/routes';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <SEO
        title="Page not found"
        description="The page you requested could not be found on BharatVow."
        path={pathname}
        noIndex
      />
      <Container className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-eyebrow">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-heading">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          We couldn&apos;t find the page you requested. Try the homepage or contact support if you need help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="outline">
            Contact support
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted">
          <Link to={digitalLifePath()} className="text-primary-light hover:text-primary">
            Digital Life
          </Link>
          {' · '}
          <Link to="/privacy-policy" className="text-primary-light hover:text-primary">
            Privacy
          </Link>
        </p>
      </Container>
    </>
  );
}
