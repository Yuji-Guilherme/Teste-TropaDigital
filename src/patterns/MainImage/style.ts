import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  w-1/2
  max-w-[738px]
  h-screen
  bg-main-orange
  bg-[url('/main-image.png')]
  bg-cover
  bg-no-repeat
  bg-center
  bg-blend-multiply
  flex
  flex-col
  justify-end
  gap-2
  pl-16
  pb-[74px]

  sm:w-full
  sm:h-auto
  sm:px-6
  sm:py-9
  sm:bg-top
  sm:gap-6
`;

const Title = tw.h1`
  text-5xl
  text-white
  font-bold
  leading-normal
  w-1/2

  md:text-4xl
  md:leading-relaxed

  sm:text-3xl
  sm:leading-snug
  sm:w-full
`;

const SubTitle = tw.h2`
  text-2xl
  text-white
  leading-11
  tracking-wider
  max-w-lg

  md:text-base
  md:w-2/3
  md:leading-8
  sm:w-full
  sm:text-base
`;

export { Wrapper, Title, SubTitle };
