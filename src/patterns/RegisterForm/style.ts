import tw from 'tailwind-styled-components';

const FormWrapper = tw.div`
  mx-auto
  mt-[85px]
  w-3/4
  flex
  flex-col
  items-center

  md:mt-8
  md:w-3/5
  sm:mt-10
  sm:w-4/5
  sm:min-w-72
`;

const Field = tw.div`
  w-full
  flex
  flex-col
  mt-11

  first-of-type:mt-5
  md:mt-7
  sm:mt-10
`;

const CheckBoxContainer = tw.div`
  w-full
  flex
  flex-col
  gap-4
  mt-8

  md:mt-9
  md:gap-3
`;

const ButtonWrapper = tw.div`
  w-full
  flex
  flex-col
  items-center
  mt-12

  md:mt-7
  sm:mt-12
  sm:mb-10
`;

const linkClassName =
  'text-lg text-main-gray font-medium self-start tracking-wide md:text-base';

export { FormWrapper, Field, ButtonWrapper, CheckBoxContainer, linkClassName };
