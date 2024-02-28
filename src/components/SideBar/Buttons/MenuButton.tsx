import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';
import { menuIconClassName } from '../style';

function MenuButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <Image
        src="/icon/dashboard/menu.svg"
        alt="imagem de ícone do menu"
        width={24}
        height={24}
        className={menuIconClassName}
      />
    </button>
  );
}

export { MenuButton };
