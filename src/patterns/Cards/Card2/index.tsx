import { inter, roboto } from '@/fonts';
import Image from 'next/image';

import * as S from '../style';

function Card2() {
  return (
    <S.CardMd className="w-[332px] pb-6">
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
            width={18}
            height={18}
          />
        </S.InfoButton>
      </S.CardHeader>
      <S.BreakLine className="mb-8 mt-5" />
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
    </S.CardMd>
  );
}

export { Card2 };
