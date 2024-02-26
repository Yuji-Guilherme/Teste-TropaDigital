import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { Form } from '@/components/Form';
import { useLoginDialog } from '../hook/useLoginDialog';
import { dmSans } from '@/fonts';
import type { DialogHTMLAttributes } from 'react';

import * as S from './style';

type LoginDialogProps = {
  isOpen: boolean;
  setDialog: (bool: boolean) => void;
} & DialogHTMLAttributes<HTMLDialogElement>;

function LoginDialog({ isOpen, setDialog }: LoginDialogProps) {
  const {
    inputId,
    register,
    handleSubmit,
    errors,
    handleSubmitEmail,
    hasError
  } = useLoginDialog({ setDialog });

  return (
    isOpen && (
      <Dialog.Root>
        <Dialog.Component>
          <Dialog.Title>Esqueci minha senha</Dialog.Title>
          <Dialog.Text className="mt-5">
            Para redefinir sua senha, informe o e-mail cadastrado na sua conta e
            lhe enviaremos um link com as instruções.
          </Dialog.Text>
          <S.DialogForm onSubmit={handleSubmit(handleSubmitEmail)}>
            <S.DialogInputWrapper>
              <Form.Label className={dmSans.className} htmlFor={inputId}>
                E-mail
              </Form.Label>
              <Form.InputWrapper hasError={hasError}>
                <Form.Input
                  className={dmSans.className}
                  id={inputId}
                  type="email"
                  placeholder="Insira seu e-mail"
                  hasError={hasError}
                  {...register('email')}
                />
                <Form.Icon type="mail" />
              </Form.InputWrapper>
              {hasError && (
                <Form.ErrorMessage>
                  {errors.email?.message?.toString()}
                </Form.ErrorMessage>
              )}
            </S.DialogInputWrapper>
            <S.DialogButtonWrapper>
              <Button.md className={dmSans.className} type="submit">
                Enviar
              </Button.md>
              <Dialog.SecondButton onClick={() => setDialog(false)}>
                Cancelar
              </Dialog.SecondButton>
            </S.DialogButtonWrapper>
          </S.DialogForm>
        </Dialog.Component>
      </Dialog.Root>
    )
  );
}

export { LoginDialog };
