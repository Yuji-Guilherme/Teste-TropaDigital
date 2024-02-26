import Image, { ImageProps } from 'next/image';

function ExitIcon({ ...props }: Partial<ImageProps>) {
  return (
    <Image
      src="/icon/dashboard/exit.svg"
      alt="imagem de ícone para sair"
      width={28}
      height={28}
      {...props}
    />
  );
}

export { ExitIcon };
