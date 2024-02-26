'use client';

import Link from 'next/link';
import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { useLoginForm } from './hook/useLoginForm';
import { LoginInput } from './LoginInput';
import { LoginCheckBox } from './LoginCheckBox';
import { LoginDialog } from './LoginDialog';

import * as S from './style';

function LoginForm() {
  const {
    hasFetchError,
    errors,
    register,
    handleSubmit,
    handleLogin,
    openDialog,
    setDialog
  } = useLoginForm();

  return (
    <>
      <S.FormWrapper>
        <Form.Root onSubmit={handleSubmit(handleLogin)}>
          <Form.Title>Login</Form.Title>
          <S.Field>
            <LoginInput
              label="E-mail"
              buttonType="mail"
              hasFetchError={hasFetchError}
              errorText={errors.email?.message?.toString()}
              {...register('email')}
              placeholder="Insira seu e-mail"
            />
          </S.Field>
          <S.Field>
            <LoginInput
              label="Senha"
              type="password"
              buttonType="eye"
              hasFetchError={hasFetchError}
              errorText={errors.password?.message?.toString()}
              {...register('password')}
              placeholder="Insira sua senha utilizando apenas números"
            />
          </S.Field>
          <LoginCheckBox {...register('rememberLogin')} />
          <S.ButtonWrapper>
            <Button.md type="submit">Entrar</Button.md>
            <S.OpenDialogButton type="button" onClick={() => setDialog(true)}>
              Esqueceu a senha?
            </S.OpenDialogButton>
          </S.ButtonWrapper>
        </Form.Root>
      </S.FormWrapper>
      <S.LinkWrapper>
        <S.LinkMessage>
          Novo por aqui?{' '}
          <Link href="/register" className={S.linkClassName}>
            Cadastre-se
          </Link>
        </S.LinkMessage>
      </S.LinkWrapper>
      <LoginDialog isOpen={openDialog} setDialog={setDialog} />
    </>
  );
}

export { LoginForm };
