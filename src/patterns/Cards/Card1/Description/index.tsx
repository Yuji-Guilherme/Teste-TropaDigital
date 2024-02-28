import { inter } from '@/fonts';

import * as S from '@/patterns/Cards/style';

function Card1Description() {
  return (
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
  );
}

export { Card1Description };
