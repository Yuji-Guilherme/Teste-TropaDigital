import tw from 'tailwind-styled-components';

type TwLiProps = {
  isActive: boolean;
  minimized: boolean;
};

type TwTextProps = {
  minimized: boolean;
};

const Li = tw.li<TwLiProps>`
  w-full
  h-[62px]
  flex
  items-center
  transition-all
  text-main-gray

  md:h-12

  ${(p) => p.isActive && 'bg-main-orange text-white'}
  ${(p) => (p.minimized ? 'px-0 sm:px-0' : 'px-11 sm:px-0')}
`;

const Text = tw.p<TwTextProps>`
  text-lg
  font-medium
  transition-all
  overflow-hidden

  md:text-sm
  ${(p) => (p.minimized ? 'w-0' : 'w-fit')}
`;

const linkClassName =
  'w-full h-full flex items-center justify-center transition-all';

export { Li, Text, linkClassName };
