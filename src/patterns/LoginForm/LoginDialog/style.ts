import tw from 'tailwind-styled-components';

const DialogForm = tw.form`
  w-full
  mt-9
  flex
  flex-col
  items-center
  gap-16

  md:gap-8
  md:mt-5
`;

const DialogInputWrapper = tw.div`
  w-full
`;

const DialogButtonWrapper = tw.div`
  flex
  flex-col
  gap-5
`;

export { DialogForm, DialogInputWrapper, DialogButtonWrapper };
