'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { dmSans } from '@/fonts';
import { useSidebarStore } from '@/store/sidebar';
import { SideBarIcon, SideBarIconType } from './Icon';

import * as S from './style';

type LiItemProps = {
  text: string;
  iconType: SideBarIconType;
} & LinkProps;

function LiItem({ text, href, iconType, ...rest }: LiItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href.toString();
  const {
    state: { minimized }
  } = useSidebarStore();

  return (
    <S.Li isActive={isActive} minimized={minimized}>
      <Link
        href={href}
        className={`${S.linkClassName} ${minimized ? 'gap-0' : 'gap-5'}`}
        {...rest}
      >
        <SideBarIcon isActive={isActive} type={iconType} />
        <S.Text className={dmSans.className} minimized={minimized}>
          {text}
        </S.Text>
      </Link>
    </S.Li>
  );
}

export { LiItem };
