import { useEffect, useState } from 'react';
import { fakeFetchCard } from '@/services/cardFetch';

const useCard1 = () => {
  const [textNumberState, setTextNumber] = useState('');

  const mountFetch = async () => {
    const { textNumber } = await fakeFetchCard();
    setTextNumber(textNumber);
  };

  useEffect(() => {
    mountFetch();
  });

  return { textNumberState };
};

export { useCard1 };
