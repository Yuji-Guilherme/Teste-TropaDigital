import { inter, roboto } from '@/fonts';
import Image from 'next/image';

import * as S from '../style';

function Card3() {
  return (
    <S.CardMd className="w-[298px] pb-6">
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
      <S.BreakLine className="mb-3" />
      <div className="w-full pr-3 pl-5 grid grid-cols-8 grid-rows-7 gap-x-2 gap-y-[2px]">
        <S.TableText
          className={`${inter.className} text-[10px] self-start justify-self-end`}
        >
          Jan
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[10px] mb-1 self-center justify-self-end`}
        >
          Feb
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[10px] self-center justify-self-end`}
        >
          Mar
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[10px] mt-1 self-center justify-self-end`}
        >
          Apr
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[10px] mt-1 self-center justify-self-end`}
        >
          Mai
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[10px] self-end justify-self-end`}
        >
          Jun
        </S.TableText>
        <Image
          src="/dashboard/HorizontalBarChart.svg"
          alt=""
          width={220}
          height={116}
          className="col-start-2 row-start-1 col-end-9 row-end-7 mt-2"
        />
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-start col-start-2`}
        >
          0
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-center`}
        >
          20
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-center`}
        >
          40
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-center`}
        >
          60
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-center`}
        >
          80
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-center`}
        >
          100
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[9px] justify-self-end`}
        >
          120
        </S.TableText>
      </div>
      <S.DescriptionsArea>
        <S.DescriptionWrapper>
          <span className="w-4 h-[6px] mb-[2px] bg-new-blue" />
          <S.TableText className={`${inter.className} text-[9px]`}>
            Product 1
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-4 h-[6px] mb-[2px] bg-new-purple" />
          <S.TableText className={`${inter.className} text-[9px]`}>
            Product 2
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-4 h-[6px] mb-[2px] bg-new-pink" />
          <S.TableText className={`${inter.className} text-[9px]`}>
            Product 3
          </S.TableText>
        </S.DescriptionWrapper>
      </S.DescriptionsArea>
    </S.CardMd>
  );
}

export { Card3 };
