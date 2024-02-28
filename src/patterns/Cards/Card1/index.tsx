import { Card1Head } from './Head';
import { Card1Description } from './Description';
import { Card1Table } from './Table';
import { useCard1 } from './hook';

import * as S from '../style';

function Card1() {
  const { textNumberState } = useCard1();

  return (
    <S.CardMd className="rounded-[14px] w-[262px] py-4">
      <Card1Head textNumber={textNumberState} />
      <S.BreakLine className="mb-2" />
      <Card1Table />
      <Card1Description />
    </S.CardMd>
  );
}

export { Card1 };
