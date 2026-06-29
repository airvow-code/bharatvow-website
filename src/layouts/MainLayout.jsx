import { Outlet, useLocation } from 'react-router-dom';
import SkipLink from '@/components/common/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyDownloadBar from '@/components/layout/StickyDownloadBar';
import HashScroll from '@/router/HashScroll';
import ScrollToTop from '@/router/ScrollToTop';
import { cn } from '@/utils/cn';

export default function MainLayout() {
  const { pathname } = useLocation();
  const showStickyDownload = pathname === '/';

  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip">
      <ScrollToTop />
      <HashScroll />
      <SkipLink />
      <Header />
      <main
        id="main-content"
        className={cn('min-w-0 flex-1 scroll-mt-[72px]', showStickyDownload && 'pb-20 lg:pb-0')}
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <Footer />
      {showStickyDownload && <StickyDownloadBar />}
    </div>
  );
}
