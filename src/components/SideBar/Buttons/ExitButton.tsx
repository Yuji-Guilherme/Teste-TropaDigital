import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';
import { exitIconClassName } from '../style';

function ExitButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <Image
        src="/icon/dashboard/exit.svg"
        alt="imagem de ícone para sair"
        width={28}
        height={28}
        className={exitIconClassName}
      />
    </button>
  );
}

export { ExitButton };
