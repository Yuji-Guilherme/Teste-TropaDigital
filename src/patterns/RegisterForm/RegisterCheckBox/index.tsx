import Link from 'next/link';
import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { Form } from '@/components/Form';

import * as S from './style';

type RegisterCheckBoxProps = InputHTMLAttributes<HTMLInputElement>;

type CheckBoxTermsProps = {
  errorText: string | undefined;
} & RegisterCheckBoxProps;

const CheckBoxRememberLogin = forwardRef<
  HTMLInputElement,
  RegisterCheckBoxProps
>(({ ...props }, ref) => {
  const id = useId();

  return (
    <S.CheckBoxWrapper>
      <Form.CheckBoxLabel htmlFor={id}>
        Lembrar e-mail e senha
        <Form.CheckBox type="checkbox" id={id} ref={ref} {...props} />
        <Form.CheckMark />
      </Form.CheckBoxLabel>
    </S.CheckBoxWrapper>
  );
});

const CheckBoxTerms = forwardRef<HTMLInputElement, CheckBoxTermsProps>(
  ({ errorText, ...props }, ref) => {
    const id = useId();

    return (
      <S.CheckBoxTermsContainer>
        <S.CheckBoxWrapper>
          <Form.CheckBoxLabel className="text-main-gray" htmlFor={id}>
            Li e Concordo com os{' '}
            <Link href="/terms-conditions" className={S.termsLinkClassName}>
              Termos e Condições
            </Link>
            <Form.CheckBox type="checkbox" id={id} ref={ref} {...props} />
            <Form.CheckMark />
          </Form.CheckBoxLabel>
        </S.CheckBoxWrapper>
        {errorText && (
          <S.CheckBoxTermsErrorMessage>{errorText}</S.CheckBoxTermsErrorMessage>
        )}
      </S.CheckBoxTermsContainer>
    );
  }
);

export { CheckBoxRememberLogin, CheckBoxTerms };
