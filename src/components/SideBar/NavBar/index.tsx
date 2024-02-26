import { LiItem } from './LiItem';

import * as S from './style';

function NavBar() {
  return (
    <S.Nav>
      <S.Ul>
        <LiItem text={'DashBoard'} href="/dashboard" iconType="dashboard" />
        <S.NavBreakLine />
        <LiItem
          text={'LoremIpsum'}
          href="/dashboard/lorem1"
          iconType="newFile"
        />
        <LiItem
          text={'LoremIpsum'}
          href="/dashboard/lorem2"
          iconType="document"
        />
        <LiItem
          text={'LoremIpsum'}
          href="/dashboard/lorem3"
          iconType="dupleChat"
        />
        <S.NavBreakLine />
        <LiItem
          text={'LoremIpsum'}
          href="/dashboard/lorem4"
          iconType="circleUser"
        />
      </S.Ul>
    </S.Nav>
  );
}

export { NavBar };
