import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/common/OptimizedImage';
import HeaderNavMenu from '@/components/layout/HeaderNavMenu';
import { SITE } from '@/utils/constants';
import { HEADER_LOGO, HEADER_LOGO_HEIGHT, HEADER_LOGO_WIDTH } from '@/utils/images';
import { cn } from '@/utils/cn';

export default function Header() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const solidBar = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const handleMobileNavClick = useCallback(() => {
    closeMenu();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  }, [closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return undefined;

    const focusable = drawerRef.current.querySelectorAll(
      'a[href], button:not([disabled])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onTab = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    drawerRef.current.addEventListener('keydown', onTab);
    return () => drawerRef.current?.removeEventListener('keydown', onTab);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-entrance',
        solidBar
          ? 'border-b border-border/80 bg-surface/95 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-cream/60 backdrop-blur-[2px]',
      )}
    >
      <Container className="relative flex h-[72px] min-w-0 items-center justify-between gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-6 xl:gap-8">
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          <OptimizedImage
            src={HEADER_LOGO}
            alt={SITE.name}
            width={HEADER_LOGO_WIDTH}
            height={HEADER_LOGO_HEIGHT}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav
          className="hidden min-w-0 justify-center lg:flex"
          aria-label="Main navigation"
        >
          <HeaderNavMenu pathname={pathname} hash={hash} />
        </nav>

        <div className="hidden items-center justify-end lg:flex">
          <Button
            href={SITE.playStoreUrl}
            size="sm"
            variant="secondary"
            external
            className="rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
          >
            Download App
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary transition-colors hover:bg-primary-soft/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={2} aria-hidden />
          ) : (
            <Menu size={24} strokeWidth={2} aria-hidden />
          )}
        </button>
      </Container>

      <div
        aria-hidden
        className={cn(
          'fixed inset-0 z-40 bg-primary/15 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeMenu}
      />

      <aside
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-[min(100vw-2.5rem,20rem)] min-w-0 flex-col border-l border-border bg-surface shadow-lg backdrop-blur-md transition-transform duration-300 ease-entrance lg:hidden',
          menuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full',
        )}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <span className="font-display text-sm font-bold text-heading">Menu</span>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={22} strokeWidth={2} aria-hidden />
          </button>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile navigation"
        >
          <HeaderNavMenu
            pathname={pathname}
            hash={hash}
            mobile
            onItemClick={handleMobileNavClick}
          />
        </nav>
      </aside>
    </header>
  );
}
