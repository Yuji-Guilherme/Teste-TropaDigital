import { InputHTMLAttributes, forwardRef } from 'react';

import { Form } from '@/components/Form';
import { FormIconType } from '@/components/Form/icons';
import { useLoginInput } from '../hook/useLoginInput';
import { dmSans } from '@/fonts';

type LoginInputProps = {
  label: string;
  errorText: string | undefined;
  buttonType: FormIconType;
  hasFetchError: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  (
    { label, errorText, hasFetchError, buttonType, type = 'text', ...rest },
    ref
  ) => {
    const { hasErrorText, inputId, inputType, handleChangeInputType } =
      useLoginInput({
        type,
        errorText
      });

    return (
      <>
        <Form.Label className={dmSans.className} htmlFor={inputId}>
          {label}
        </Form.Label>
        <Form.InputWrapper
          tabIndex={-1}
          hasError={hasErrorText || hasFetchError}
        >
          <Form.Input
            className={dmSans.className}
            id={inputId}
            type={inputType}
            ref={ref}
            hasError={hasErrorText || hasFetchError}
            {...rest}
          />
          <Form.Icon
            type={buttonType}
            inputType={inputType}
            onClick={handleChangeInputType}
          />
        </Form.InputWrapper>
        {hasErrorText && <Form.ErrorMessage>{errorText}</Form.ErrorMessage>}
        {hasFetchError && (
          <Form.ErrorMessage>E-mail e/ou senha incorretas</Form.ErrorMessage>
        )}
      </>
    );
  }
);

export { LoginInput };
