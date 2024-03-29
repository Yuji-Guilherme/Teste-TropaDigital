import tw from 'tailwind-styled-components';

const Root = tw.div`
  fixed
  h-full
  w-full
  pt-20
  top-0
  left-0
  overflow-auto
  bg-black/40
`;

const Dialog = tw.dialog`
  bg-white
  w-[624px]
  h-[633px]
  mx-auto
  border-solid
  border-1
  border-gray-3
  flex
  flex-col
  items-center
  pt-[76px]
  pb-16
  drop-shadow-lg
  rounded-[40px]
  px-14

  md:w-[400px]
  md:h-[420px]
  md:pt-12
  md:px-10
  sm:px-6
  sm:pb-6
  sm:pt-8
  sm:w-4/5
  sm:h-auto
`;

const Title = tw.h3`
  text-main-orange
  font-bold
  text-[44px]
  tracking-wide

  md:text-2xl
  sm:text-2xl
  sm:text-center
`;

const Text = tw.p`
  text-lg
  text-main-gray
  text-center
  tracking-widest
  leading-9

  md:text-sm
  sm:text-sm
  sm:leading-8
`;

const SecondButton = tw.button`
  font-medium
  text-main-gray
  text-lg
  bg-transparent
  outline-none
  tracking-wide

  md:text-sm
  sm:text-sm
`;

export { Root, Dialog, Title, Text, SecondButton };
