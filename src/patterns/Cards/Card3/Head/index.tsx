import Image from 'next/image';
import { roboto } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card3Head() {
  return (
    <S.CardHeader className="pl-8 pr-7">
      <S.CardTitleWrapper>
        <S.CardTitle className={`${roboto.className} text-xs`}>
          PRIMARY TEXT
        </S.CardTitle>
        <S.CardSubTitle className={`${roboto.className} text-[10px]`}>
          Secondary text
        </S.CardSubTitle>
      </S.CardTitleWrapper>
      <S.InfoButton>
        <Image
          src="/icon/dashboard/info.svg"
          alt="ícone de informação"
          width={16}
          height={16}
        />
      </S.InfoButton>
    </S.CardHeader>
  );
}

export { Card3Head };
