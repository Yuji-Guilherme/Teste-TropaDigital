import tw from 'tailwind-styled-components';

const DialogButtonWrapper = tw.div`
  flex
  flex-col
  items-center
  gap-5
  mt-5

  sm:mt-8
  sm:mb-5
  sm:gap-6
`;

const UserEmail = tw.strong`
  text-main-orange
`;

export { DialogButtonWrapper, UserEmail };
