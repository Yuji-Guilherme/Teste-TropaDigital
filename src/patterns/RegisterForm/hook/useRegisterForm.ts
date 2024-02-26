import { useCustomForm } from '@/hook/useCustomForm';
import { registerSchema as schema } from '@/schemas/registerSchema';
import { useState } from 'react';

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  conditionsTerms: boolean;
  rememberLogin: boolean;
};

const useRegisterForm = () => {
  const [openDialog, setDialog] = useState(false);
  const [userEmail, setEmail] = useState('');

  const { register, handleSubmit, errors, touchedFields } = useCustomForm({
    schema,
    mode: 'onBlur'
  });

  const handleRegister = (data: RegisterData) => {
    //fn de fetch recebendo data
    setEmail(data.email);
    setDialog(true);
  };

  const resendEmail = () => {
    //fetch para o email do usuário - userEmail
    setTimeout(() => {
      setDialog(false);
    }, 300);
  };

  return {
    errors,
    touchedFields,
    register,
    handleSubmit,
    handleRegister,
    userEmail,
    resendEmail,
    openDialog,
    setDialog
  };
};

export { useRegisterForm };
