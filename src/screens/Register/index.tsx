import { MainImage } from '@/patterns/MainImage';
import { RegisterForm } from '@/patterns/RegisterForm';

import * as S from '../Form/style';

function RegisterScreen() {
  return (
    <S.Main>
      <MainImage />
      <S.FormSection>
        <RegisterForm />
      </S.FormSection>
    </S.Main>
  );
}

export { RegisterScreen };
