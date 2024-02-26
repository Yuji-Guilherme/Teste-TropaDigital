'use client';

import Link from 'next/link';
import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { CheckBoxRememberLogin, CheckBoxTerms } from './RegisterCheckBox';
import { RegisterInput } from './RegisterInput';
import { useRegisterForm } from './hook/useRegisterForm';
import { dmSans } from '@/fonts';
import { RegisterDialog } from './RegisterDialog';

import * as S from './style';

function RegisterForm() {
  const {
    errors,
    touchedFields,
    register,
    handleSubmit,
    handleRegister,
    userEmail,
    resendEmail,
    openDialog,
    setDialog
  } = useRegisterForm();

  return (
    <>
      <S.FormWrapper onSubmit={handleSubmit(handleRegister)}>
        <Link href="/" className={S.linkClassName}>
          {'<'} Voltar
        </Link>
        <Form.Root className="mt-9 md:mt-4 sm:mt-6">
          <Form.Title className="md:text-5xl">Cadastro</Form.Title>
          <S.Field>
            <RegisterInput
              label="Nome"
              buttonType="default"
              errorText={errors.name?.message?.toString()}
              touched={touchedFields.name}
              {...register('name')}
              placeholder="Insira seu nome"
            />
          </S.Field>
          <S.Field>
            <RegisterInput
              label="E-mail"
              buttonType="mail"
              type="email"
              errorText={errors.email?.message?.toString()}
              touched={touchedFields.email}
              {...register('email')}
              placeholder="Insira seu e-mail"
            />
          </S.Field>
          <S.Field>
            <RegisterInput
              label="Senha"
              buttonType="eye"
              type="password"
              errorText={errors.password?.message?.toString()}
              {...register('password')}
              placeholder="Insira sua senha utilizando apenas números"
            />
          </S.Field>
          <S.Field>
            <RegisterInput
              label="Confirmar senha"
              buttonType="eye"
              type="password"
              errorText={errors.confirmPassword?.message?.toString()}
              {...register('confirmPassword')}
              placeholder="Repita a senha criada anteriormente"
            />
          </S.Field>
          <S.CheckBoxContainer>
            <CheckBoxTerms
              errorText={errors.conditionsTerms?.message?.toString()}
              {...register('conditionsTerms')}
            />
            <CheckBoxRememberLogin {...register('rememberLogin')} />
          </S.CheckBoxContainer>
          <S.ButtonWrapper>
            <Button.lg className={dmSans.className} type="submit">
              Cadastrar
            </Button.lg>
          </S.ButtonWrapper>
        </Form.Root>
      </S.FormWrapper>
      <RegisterDialog
        isOpen={openDialog}
        resendEmail={resendEmail}
        userEmail={userEmail}
        setDialog={setDialog}
      />
    </>
  );
}

export { RegisterForm };
