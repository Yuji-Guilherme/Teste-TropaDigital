import { useId, useState, MouseEvent, HTMLInputTypeAttribute } from 'react';

type UseLoginInputProps = {
  type: HTMLInputTypeAttribute;
  errorText: string | undefined;
};

const useLoginInput = ({ type, errorText }: UseLoginInputProps) => {
  const inputId = useId();
  const [typeState, setType] = useState<HTMLInputTypeAttribute>('');

  const inputType = typeState || type;

  const handleChangeInputType = (e: MouseEvent) => {
    e.preventDefault();
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const hasErrorText = !!errorText;

  return { inputId, inputType, handleChangeInputType, hasErrorText };
};

export { useLoginInput };
