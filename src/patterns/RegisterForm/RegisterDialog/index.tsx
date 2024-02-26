import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { dmSans } from '@/fonts';
import type { DialogHTMLAttributes } from 'react';

import * as S from './style';

type RegisterDialogProps = {
  isOpen: boolean;
  setDialog: (bool: boolean) => void;
  resendEmail: () => void;
  userEmail: string;
} & DialogHTMLAttributes<HTMLDialogElement>;

function RegisterDialog({
  isOpen,
  setDialog,
  resendEmail,
  userEmail
}: RegisterDialogProps) {
  return (
    isOpen && (
      <Dialog.Root>
        <Dialog.Component className="px-[68px]">
          <Dialog.Title>Confirme seu E-mail</Dialog.Title>
          <Dialog.Text className="mt-6">
            Para finalizar seu cadastro, enviamos um e-mail de confirmação para
            <S.UserEmail>
              {` ${userEmail}` || ' teste.tes@gmail.com'}
            </S.UserEmail>
            . Verifique sua caixa de entrada e clique no link “Confirmar
            E-mail”.
          </Dialog.Text>
          <Dialog.Text className="mt-10 sm:mt-7">
            Caso não tenha recebido o e-mail clique em “Enviar e-mail novamente”
            que enviaremos um novo e-mail.
          </Dialog.Text>
          <S.DialogButtonWrapper>
            <Button.md
              className={dmSans.className}
              onClick={() => setDialog(false)}
            >
              Fechar
            </Button.md>
            <Dialog.SecondButton onClick={() => resendEmail()}>
              Enviar e-mail novamente
            </Dialog.SecondButton>
          </S.DialogButtonWrapper>
        </Dialog.Component>
      </Dialog.Root>
    )
  );
}

export { RegisterDialog };
