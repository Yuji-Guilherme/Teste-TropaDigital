import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { Form } from '@/components/Form';
import { dmSans } from '@/fonts';

import * as S from '../style';

type LoginCheckBoxProps = InputHTMLAttributes<HTMLInputElement>;

const LoginCheckBox = forwardRef<HTMLInputElement, LoginCheckBoxProps>(
  ({ ...props }, ref) => {
    const id = useId();

    return (
      <S.CheckBoxWrapper>
        <Form.CheckBoxLabel className={dmSans.className} htmlFor={id}>
          Lembrar e-mail e senha
          <Form.CheckBox type="checkbox" id={id} ref={ref} {...props} />
          <Form.CheckMark />
        </Form.CheckBoxLabel>
      </S.CheckBoxWrapper>
    );
  }
);

export { LoginCheckBox };
