import tw from 'tailwind-styled-components';

type TwMainProps = {
  minimized: boolean;
};

const Main = tw.main<TwMainProps>`
  w-full
  h-auto
  mt-8
  pr-12
  pl-16
  pb-12
  transition-all

  ${(p) => (p.minimized ? 'ml-40 sm:ml-9' : 'ml-[350px] md:ml-[288px] sm:ml-9')}
`;

const Title = tw.h1`
  text-main-gray
  font-bold
  text-[43px]
  tracking-wider

  sm:text-4xl
`;

export { Main, Title };
