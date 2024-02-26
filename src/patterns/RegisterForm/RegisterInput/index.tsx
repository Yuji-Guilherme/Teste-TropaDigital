import { InputHTMLAttributes, forwardRef } from 'react';

import { Form } from '@/components/Form';
import { FormIconType } from '@/components/Form/icons';
import { useRegisterInput } from '../hook/useRegisterInput';

type RegisterInputProps = {
  label: string;
  errorText: string | undefined;
  buttonType: FormIconType;
  touched?: boolean | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const RegisterInput = forwardRef<HTMLInputElement, RegisterInputProps>(
  ({ label, errorText, buttonType, touched, type = 'text', ...rest }, ref) => {
    const {
      hasErrorText,
      isCorrectly,
      inputId,
      inputType,
      handleChangeInputType
    } = useRegisterInput({
      type,
      errorText,
      touched
    });

    return (
      <>
        <Form.Label htmlFor={inputId}>{label}</Form.Label>
        <Form.InputWrapper tabIndex={-1} hasError={hasErrorText}>
          <Form.Input
            id={inputId}
            type={inputType}
            ref={ref}
            hasError={hasErrorText}
            {...rest}
          />
          <Form.Icon
            type={buttonType}
            inputType={inputType}
            onClick={handleChangeInputType}
            isValid={isCorrectly}
          />
        </Form.InputWrapper>
        {hasErrorText && <Form.ErrorMessage>{errorText}</Form.ErrorMessage>}
      </>
    );
  }
);

export { RegisterInput };
