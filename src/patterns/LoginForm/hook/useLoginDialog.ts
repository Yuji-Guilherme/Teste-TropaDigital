import { useId } from 'react';
import { useCustomForm } from '@/hook/useCustomForm';
import { forgetPasswordSchema as schema } from '@/schemas/forgetPasswordSchema';

type ForgetPasswordData = {
  email: string;
};

type UseLoginDialog = {
  setDialog: (bool: boolean) => void;
};

const useLoginDialog = ({ setDialog }: UseLoginDialog) => {
  const inputId = useId();

  const { register, handleSubmit, errors } = useCustomForm({
    schema,
    mode: 'onBlur'
  });

  const handleSubmitEmail = (data: ForgetPasswordData) => {
    //fn para enviar e-mail recebendo data
    setTimeout(() => {
      setDialog(false);
    }, 300);
  };

  const hasError = !!errors.email?.message;

  return {
    inputId,
    register,
    handleSubmit,
    errors,
    handleSubmitEmail,
    hasError
  };
};

export { useLoginDialog };
