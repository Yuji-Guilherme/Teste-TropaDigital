import { LoginForm } from '@/patterns/LoginForm';
import { MainImage } from '@/patterns/MainImage';

import * as S from '../Form/style';

function LoginScreen() {
  return (
    <S.Main>
      <MainImage />
      <S.FormSection>
        <LoginForm />
      </S.FormSection>
    </S.Main>
  );
}

export { LoginScreen };
