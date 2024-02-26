import { useState } from 'react';

const useTopBar = () => {
  const [inputState, setInputState] = useState('');

  return {
    inputState,
    setInputState
  };
};

export { useTopBar };
