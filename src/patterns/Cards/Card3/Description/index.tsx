import { inter } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card3Description() {
  return (
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
  );
}

export { Card3Description };
