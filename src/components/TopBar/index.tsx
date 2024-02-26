'use client';

import { useTopBar } from './hook';
import { Notification } from './Notification';

import * as S from './style';
import { InputTopBar } from './Input';

function TopBar() {
  const { setInputState } = useTopBar();

  return (
    <S.Section>
      <InputTopBar setInputState={setInputState} />
      <Notification />
    </S.Section>
  );
}

export { TopBar };
