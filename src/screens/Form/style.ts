import tw from 'tailwind-styled-components';

const Main = tw.main`
  w-full
  h-screen
  flex

  sm:flex-col
  sm:h-auto
`;

const FormSection = tw.section`
  w-1/2
  h-screen
  flex
  flex-col
  items-center

  sm:w-full
  sm:h-auto
`;

export { Main, FormSection };
