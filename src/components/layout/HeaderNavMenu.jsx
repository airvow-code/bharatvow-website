import HeaderNavLink from '@/components/layout/HeaderNavLink';
import { HEADER_NAV, isHeaderNavActive } from '@/components/layout/headerNav';
import { cn } from '@/utils/cn';

/**
 * Single source of truth for header navigation — used by desktop and mobile menus.
 */
export default function HeaderNavMenu({ pathname, hash, mobile = false, onItemClick, className }) {
  return (
    <ul
      className={cn(
        mobile ? 'flex w-full flex-col gap-1.5' : 'flex items-center gap-4 xl:gap-7',
        className,
      )}
    >
      {HEADER_NAV.map((item) => (
        <li key={item.id} className={cn(mobile && 'w-full')}>
          <HeaderNavLink
            to={item.to}
            label={item.label}
            active={isHeaderNavActive(item, pathname, hash)}
            mobile={mobile}
            onClick={onItemClick}
          />
        </li>
      ))}
    </ul>
  );
}
