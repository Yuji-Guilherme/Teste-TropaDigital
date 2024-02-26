import { inter, roboto } from '@/fonts';
import Image from 'next/image';

import * as S from '../style';

function Card1() {
  const textNumber = '5.987,37';

  return (
    <S.CardMd className="rounded-[14px] w-[262px] py-4">
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
      <S.BreakLine className="mb-2" />
      <div className="w-full pl-1 pr-5 grid grid-cols-7 grid-rows-8 gap-y-1 gap-x-1">
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          100
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          60
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          20
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          0
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          -20
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          -60
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-end`}
        >
          -100
        </S.TableText>
        <Image
          src="/dashboard/LineChart.svg"
          alt=""
          width={196}
          height={102}
          className="col-start-2 row-start-1 col-end-8 row-end-8 mt-1"
        />
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-center col-start-2`}
        >
          Jan
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-center`}
        >
          Feb
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] mr-1 justify-self-center`}
        >
          Mar
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] mr-2 justify-self-center`}
        >
          Apr
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-start`}
        >
          Mai
        </S.TableText>
        <S.TableText
          className={`${inter.className} text-[7px] justify-self-start`}
        >
          Jun
        </S.TableText>
      </div>
      <S.DescriptionsArea>
        <S.DescriptionWrapper>
          <span className="w-3 h-[5px] mb-[2px] bg-new-blue" />
          <S.TableText className={`${inter.className} text-[7px]`}>
            Product 1
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-3 h-[5px] mb-[2px] bg-new-purple" />
          <S.TableText className={`${inter.className} text-[7px]`}>
            Product 2
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-3 h-[5px] mb-[2px] bg-new-pink" />
          <S.TableText className={`${inter.className} text-[7px]`}>
            Product 3
          </S.TableText>
        </S.DescriptionWrapper>
      </S.DescriptionsArea>
    </S.CardMd>
  );
}

export { Card1 };
