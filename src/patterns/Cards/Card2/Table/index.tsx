import Image from 'next/image';
import { inter } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card2Table() {
  return (
    <div className="w-full pr-12 pl-10 flex items-start justify-between">
      <Image
        src="/dashboard/MultiSeriesPie.svg"
        alt="imagem de gráfico de pizza"
        width={143}
        height={143}
        className="scale-150"
      />
      <S.DescriptionsArea className="flex-col mt-0 w-fit gap-2">
        <S.DescriptionWrapper>
          <span className="w-4 h-[6px] gap-2 bg-new-blue" />
          <S.TableText className={`${inter.className} text-[9px]`}>
            Product 1
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-4 h-[6px] gap-2 bg-new-purple" />
          <S.TableText className={`${inter.className} text-[9px]`}>
            Product 2
          </S.TableText>
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>
          <span className="w-4 h-[6px] gap-2 bg-new-pink" />
          <S.TableText className={`${inter.className} text-[9px]`}>
            Product 3
          </S.TableText>
        </S.DescriptionWrapper>
      </S.DescriptionsArea>
    </div>
  );
}

export { Card2Table };
