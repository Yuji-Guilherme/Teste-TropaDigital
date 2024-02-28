import Image from 'next/image';
import { userImageClassName } from '../style';

function UserImage() {
  return (
    <Image
      src="/user-image.png"
      alt="image do usuário"
      width={118}
      height={118}
      className={userImageClassName}
    />
  );
}

export { UserImage };
