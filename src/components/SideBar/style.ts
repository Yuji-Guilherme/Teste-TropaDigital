import tw from 'tailwind-styled-components';

type TwExtendProps = {
  minimized: boolean;
};

const Aside = tw.aside<TwExtendProps>`
  h-screen
  bg-white
  py-10
  flex
  flex-col
  items-center
  fixed
  top-0
  left-0
  transition-all
  overflow-hidden
  drop-shadow-lg

  md:py-5
  sm:z-10
  sm:h-full
  ${(p) => (p.minimized ? 'w-[62px]' : 'w-[350px] md:w-72 sm:w-screen')}
`;

const SecondBg = tw.span`
  absolute
  h-[224px]
  w-full
  top-0
  left-0
  z-10
  bg-new-white

  md:h-[150px]
  sm:z-20
`;

const MenuButtonWrapper = tw.div<TwExtendProps>`
  w-full
  flex
  items-center
  transition-all
  z-20
  sm:z-30
  ${(p) => (p.minimized ? 'pr-0 justify-center' : 'pr-8 justify-end')}
`;

const menuIconClassName = 'md:w-5 md:h-5';

const UserAreaWrapper = tw.div<TwExtendProps>`
  flex
  flex-col
  items-center
  gap-8
  z-20
  transition-all
  overflow-hidden

  md:gap-4
  ${(p) => (p.minimized ? 'w-0' : 'w-full')}
`;

const UserTextWrapper = tw.div`
  flex
  flex-col
  items-center
  gap-2

  md:gap-1
`;

const UserTitle = tw.h2`
  font-bold
  text-2xl
  text-main-gray

  md:text-lg
`;

const UserEmail = tw.h3`
  text-main-gray
  text-sm

  md:text-xs
`;

const userImageClassName =
  'w-[118px] h-[118px] rounded-full border-solid border-white border-[12px] object-cover md:w-24 md:h-24 md:border-[8px]';

const ExitButtonWrapper = tw.div<TwExtendProps>`
  w-full
  mt-auto
  flex
  items-center
  transition-all

  sm:mt-12
  ${(p) => (p.minimized ? 'pr-0 justify-center' : 'pr-8 justify-end')}
`;

const exitIconClassName = 'md:w-5 md:h-5';

export {
  Aside,
  SecondBg,
  MenuButtonWrapper,
  UserAreaWrapper,
  UserTextWrapper,
  UserTitle,
  UserEmail,
  userImageClassName,
  ExitButtonWrapper,
  menuIconClassName,
  exitIconClassName
};
