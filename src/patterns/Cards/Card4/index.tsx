import { Card4Head } from './Head';
import { Card4Table } from './Table';
import { Card4Description } from './Description';

import * as S from '../style';

function Card4() {
  return (
    <S.CardLg className="pt-8 pb-9">
      <Card4Head />
      <S.BreakLine className="mt-7 mb-5 h-[2px]" />
      <Card4Table />
      <Card4Description />
    </S.CardLg>
  );
}

export { Card4 };
