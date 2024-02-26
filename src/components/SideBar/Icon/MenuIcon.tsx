import Image, { ImageProps } from 'next/image';

function MenuIcon({ ...props }: Partial<ImageProps>) {
  return (
    <Image
      src="/icon/dashboard/menu.svg"
      alt="imagem de ícone do menu"
      width={24}
      height={24}
      {...props}
    />
  );
}

export { MenuIcon };
