import Image from 'next/image';
import { roboto } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card4Head() {
  return (
    <S.CardHeader className="pl-12 pr-10">
      <S.CardTitleWrapper className="gap-2">
        <S.CardTitle className={`${roboto.className} text-lg`}>
          PRIMARY TEXT
        </S.CardTitle>
        <S.CardSubTitle className={`${roboto.className} text-[15px]`}>
          Secondary text
        </S.CardSubTitle>
      </S.CardTitleWrapper>
      <S.InfoButton>
        <Image
          src="/icon/dashboard/info.svg"
          alt="ícone de informação"
          width={26}
          height={26}
        />
      </S.InfoButton>
    </S.CardHeader>
  );
}

export { Card4Head };
