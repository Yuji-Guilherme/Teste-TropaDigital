import Image from 'next/image';
import { inter } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card3Table() {
  return (
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
      <S.TableText className={`${inter.className} text-[9px] justify-self-end`}>
        120
      </S.TableText>
    </div>
  );
}

export { Card3Table };
