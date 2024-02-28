import { Card3Head } from './Head';
import { Card3Table } from './Table';
import { Card3Description } from './Description';

import * as S from '../style';

function Card3() {
  return (
    <S.CardMd className="w-[298px] pb-6">
      <Card3Head />
      <S.BreakLine className="mb-3" />
      <Card3Table />
      <Card3Description />
    </S.CardMd>
  );
}

export { Card3 };
