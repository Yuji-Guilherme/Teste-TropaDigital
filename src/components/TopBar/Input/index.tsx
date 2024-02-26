import Image from 'next/image';
import { useRef } from 'react';

import * as S from '../style';

type InputTopBarProps = {
  setInputState: (value: string) => void;
};

function InputTopBar({ setInputState }: InputTopBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.InputWrapper>
      <button onClick={() => inputRef.current?.focus()}>
        <Image
          src="/icon/dashboard/search.svg"
          alt="ícone de lupa"
          width={24}
          height={24}
          className={S.searchIconClassName}
        />
      </button>
      <S.Input
        type="text"
        onChange={(e) => setInputState(e.target.value)}
        placeholder="Pesquisar"
        ref={inputRef}
      />
    </S.InputWrapper>
  );
}

export { InputTopBar };
