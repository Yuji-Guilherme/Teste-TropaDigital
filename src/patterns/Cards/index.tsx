import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';

import * as S from './style';

function Cards() {
  return (
    <S.Section>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </S.Section>
  );
}

export { Cards };
