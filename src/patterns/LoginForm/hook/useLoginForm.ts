import { useCustomForm } from '@/hook/useCustomForm';
import { loginSchema as schema } from '@/schemas/loginSchema';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type LoginData = {
  email: string;
  password: string;
  rememberLogin: boolean;
};

const useLoginForm = () => {
  const [hasFetchError, setFetchError] = useState(false);
  const [openDialog, setDialog] = useState(false);
  const route = useRouter();

  const { register, handleSubmit, errors } = useCustomForm({
    schema,
    mode: 'onBlur'
  });

  const handleLogin = (data: LoginData) => {
    try {
      //fn de fetch recebendo data
      setFetchError(false);
      route.push('/dashboard');
    } catch {
      setFetchError(true);
    }
  };

  return {
    errors,
    register,
    handleSubmit,
    handleLogin,
    hasFetchError,
    openDialog,
    setDialog
  };
};

export { useLoginForm };
