import tw from 'tailwind-styled-components';

const FormWrapper = tw.div`
  mx-auto
  mt-[217px]
  w-3/4
  flex
  flex-col
  items-center

  md:mt-12
  md:w-3/5
  sm:mt-12
  sm:w-4/5
  sm:min-w-72
`;

const Field = tw.div`
  w-full
  flex
  flex-col
  mt-12

  first-of-type:mt-[70px]
  md:first-of-type:mt-14
  md:mt-12
  sm:first-of-type:mt-12
`;

const CheckBoxWrapper = tw.div`
  w-full
  flex
  items-center
  mt-5
`;

const ButtonWrapper = tw.div`
  w-full
  flex
  flex-col
  items-center
  mt-20

  md:mt-16
  sm:mt-12
`;

const OpenDialogButton = tw.button`
  mt-5
  text-lg
  text-main-orange
  bg-transparent
  outline-none
  font-medium
  tracking-wide

  md:text-sm
  sm:text-sm
`;

const LinkWrapper = tw.div`
  w-fit
  absolute
  bottom-10

  md:bottom-5
  sm:static
  sm:mt-16
  sm:mb-10
`;

const LinkMessage = tw.p`
  text-lg
  text-main-gray
  tracking-wide
  md:text-sm
  sm:text-sm
`;

const linkClassName = 'text-main-orange font-medium';

export {
  FormWrapper,
  Field,
  ButtonWrapper,
  OpenDialogButton,
  CheckBoxWrapper,
  LinkWrapper,
  LinkMessage,
  linkClassName
};
