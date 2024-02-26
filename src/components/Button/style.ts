import tw from 'tailwind-styled-components';

const buttonBase = tw.button`
  h-[62px]
  bg-main-orange
  text-white
  font-bold
  text-3xl
  tracking-wide

  md:text-lg
  md:h-10
  sm:h-10
  sm:text-lg
`;

const buttonMd = tw(buttonBase)`
  w-[194px]
  md:w-32
  sm:w-28
`;

const buttonLg = tw(buttonBase)`
  w-[260px]
`;

export { buttonMd, buttonLg };
