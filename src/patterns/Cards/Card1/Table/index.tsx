import Image from 'next/image';
import { inter } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card1Table() {
  return (
    <div className="w-full pl-1 pr-5 grid grid-cols-7 grid-rows-8 gap-y-1 gap-x-1">
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
        100
      </S.TableText>
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
        60
      </S.TableText>
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
        20
      </S.TableText>
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
        0
      </S.TableText>
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
        -20
      </S.TableText>
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
        -60
      </S.TableText>
      <S.TableText className={`${inter.className} text-[7px] justify-self-end`}>
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
  );
}

export { Card1Table };
