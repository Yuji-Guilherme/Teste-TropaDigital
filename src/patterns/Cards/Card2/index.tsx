import { Card2Head } from './Head';
import { Card2Table } from './Table';

import * as S from '../style';

function Card2() {
  return (
    <S.CardMd className="w-[332px] pb-6">
      <Card2Head />
      <S.BreakLine className="mb-8 mt-5" />
      <Card2Table />
    </S.CardMd>
  );
}

export { Card2 };
