'use client';

import { Cards } from '@/patterns/Cards';
import { useSidebarStore } from '@/store/sidebar';

import * as S from './style';

function DashBoardScreen() {
  const {
    state: { minimized }
  } = useSidebarStore();

  return (
    <S.Main minimized={minimized}>
      <S.Title>Dashboard</S.Title>
      <Cards />
    </S.Main>
  );
}

export { DashBoardScreen };
