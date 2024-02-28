import Image from 'next/image';
import { roboto } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card1Head({ textNumber }: { textNumber: string }) {
  return (
    <S.CardHeader className="px-6">
      <S.CardTitleWrapper>
        <S.CardTitle className={`${roboto.className} text-[10px]`}>
          LoremIpsum
        </S.CardTitle>
        <S.CardNumber className={`${roboto.className}`}>
          {textNumber}
        </S.CardNumber>
        <S.CardSubTitle className={`${roboto.className} text-[9px]`}>
          LoremIpsum
        </S.CardSubTitle>
      </S.CardTitleWrapper>
      <S.InfoButton>
        <Image
          src="/icon/dashboard/info.svg"
          alt="ícone de informação"
          width={15}
          height={15}
        />
      </S.InfoButton>
    </S.CardHeader>
  );
}

export { Card1Head };
