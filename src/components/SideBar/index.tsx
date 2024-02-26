'use client';

import Image from 'next/image';
import { useSideBar } from './hook';
import { NavBar } from './NavBar';
import { MenuIcon, ExitIcon } from './Icon';

import * as S from './style';

type SidebarProps = {
  username: string;
  email: string;
};
function Sidebar({ username, email }: SidebarProps) {
  const { minimized, changeMinimizeState, handleExit } = useSideBar();

  return (
    <S.Aside minimized={minimized}>
      <S.SecondBg />
      <S.MenuButtonWrapper minimized={minimized}>
        <button onClick={() => changeMinimizeState(!minimized)}>
          <MenuIcon className={S.menuIconClassName} />
        </button>
      </S.MenuButtonWrapper>
      <S.UserAreaWrapper minimized={minimized}>
        <S.UserTextWrapper>
          <S.UserTitle>{username}</S.UserTitle>
          <S.UserEmail>{email}</S.UserEmail>
        </S.UserTextWrapper>
        <Image
          src="/user-image.png"
          alt="image do usuário"
          width={118}
          height={118}
          className={S.userImageClassName}
        />
      </S.UserAreaWrapper>
      <NavBar />
      <S.ExitButtonWrapper minimized={minimized}>
        <button onClick={handleExit}>
          <ExitIcon className={S.exitIconClassName} />
        </button>
      </S.ExitButtonWrapper>
    </S.Aside>
  );
}

export { Sidebar };
