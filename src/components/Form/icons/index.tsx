import { HTMLInputTypeAttribute, MouseEvent } from 'react';
import Image from 'next/image';

import * as S from './style';

type FormIconType = 'mail' | 'eye' | 'default';

type FormIconProps = {
  type: FormIconType;
  isValid?: boolean;
  inputType?: HTMLInputTypeAttribute;
  onClick?: (e: MouseEvent) => void;
};

function FormIcon({ type, isValid, inputType, onClick }: FormIconProps) {
  const components: Record<FormIconType, JSX.Element> = {
    mail: (
      <>
        {!isValid && (
          <div className={S.iconWrapperClassName}>
            <Image
              width={26}
              height={26}
              src="/icon/mail.svg"
              alt="icone de email"
              className={S.iconClassName}
            />
          </div>
        )}
        {isValid && (
          <div className={S.iconWrapperClassName}>
            <Image
              width={26}
              height={26}
              src="/icon/check.svg"
              alt="icone de validado"
              className={S.iconClassName}
            />
          </div>
        )}
      </>
    ),
    eye: (
      <>
        {inputType === 'password' && (
          <button
            tabIndex={-1}
            className={S.iconWrapperClassName}
            onClick={onClick}
          >
            <Image
              width={26}
              height={26}
              src="/icon/eye.svg"
              alt="icone de olho"
              className={S.iconClassName}
            />
          </button>
        )}
        {inputType === 'text' && (
          <button
            tabIndex={-1}
            className={S.iconWrapperClassName}
            onClick={onClick}
          >
            <Image
              width={26}
              height={26}
              src="/icon/eye-hidden.svg"
              alt="icone de olho fechado"
              className={S.iconClassName}
            />
          </button>
        )}
      </>
    ),
    default: (
      <>
        {' '}
        {isValid && (
          <div className={S.iconWrapperClassName}>
            <Image
              width={26}
              height={26}
              src="/icon/check.svg"
              alt="icone de validado"
              className={S.iconClassName}
            />
          </div>
        )}
      </>
    )
  };

  return components[type] || null;
}

export { FormIcon };
export type { FormIconType };
