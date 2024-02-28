import { inter } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card4Description() {
  return (
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
  );
}

export { Card4Description };
