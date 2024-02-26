import { inter, roboto } from '@/fonts';
import Image from 'next/image';

import * as S from '../style';

function Card4() {
  return (
    <S.CardLg className="pt-8 pb-9">
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
      <S.BreakLine className="mt-7 mb-5 h-[2px]" />
      <div className="w-fit ml-auto mr-[30px] pr-3 pl-5 grid grid-cols-lg-table grid-rows-7 gap-x-2 gap-y-[2px]">
        <S.TableText
          className={`${inter.className} text-[13px] self-start justify-self-start`}
        >
          Jan
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[13px] self-start justify-self-start`}
        >
          Feb
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[13px] self-center mb-2 justify-self-start`}
        >
          Mar
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[13px] self-center mb-1 justify-self-start`}
        >
          Apr
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[13px] self-center mt-1 justify-self-start`}
        >
          Mai
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[13px] self-end justify-self-start`}
        >
          Jun
        </S.TableText>
        <Image
          src="/dashboard/HorizontalBarChartLg.svg"
          alt=""
          width={805}
          height={183}
          className="col-start-2 row-start-1 col-end-9 row-end-7 mt-2 mr-3 ml-4"
        />
        <S.TableText
          className={`${inter.className} text-[11px] justify-self-start col-start-2`}
        >
          60
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[11px] mr-[50px] justify-self-center`}
        >
          40
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[11px] mr-6 justify-self-center`}
        >
          20
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[11px] justify-self-center`}
        >
          0
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[11px] ml-[26px] justify-self-center`}
        >
          20
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[11px] ml-[52px] justify-self-center`}
        >
          40
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[11px] justify-self-end`}
        >
          60
        </S.TableText>
      </div>
      <S.DescriptionsArea className="justify-start pl-[79px] gap-[18px]">
        <S.DescriptionWrapper>
          <span className="w-6 h-2 bg-new-blue" />
          <S.TableText className={`${inter.className} text-[13px]`}>
            Product 1
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-4 h-2 bg-new-purple" />
          <S.TableText className={`${inter.className} text-[13px]`}>
            Product 2
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-4 h-2 bg-new-pink" />
          <S.TableText className={`${inter.className} text-[13px]`}>
            Product 3
          </S.TableText>
        </S.DescriptionWrapper>
      </S.DescriptionsArea>
    </S.CardLg>
  );
}

export { Card4 };
