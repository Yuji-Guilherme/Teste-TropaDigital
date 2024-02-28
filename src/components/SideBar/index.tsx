'use client';

import { useSideBar } from './hook';
import { NavBar } from './NavBar';
import { ExitButton, MenuButton } from './Buttons';
import { UserImage } from './UserImage';

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
        <MenuButton onClick={() => changeMinimizeState(!minimized)} />
      </S.MenuButtonWrapper>
      <S.UserAreaWrapper minimized={minimized}>
        <S.UserTextWrapper>
          <S.UserTitle>{username}</S.UserTitle>
          <S.UserEmail>{email}</S.UserEmail>
        </S.UserTextWrapper>
        <UserImage />
      </S.UserAreaWrapper>
      <NavBar />
      <S.ExitButtonWrapper minimized={minimized}>
        <ExitButton onClick={handleExit} />
      </S.ExitButtonWrapper>
    </S.Aside>
  );
}

export { Sidebar };
