import tw from 'tailwind-styled-components';

const DialogButtonWrapper = tw.div`
  flex
  flex-col
  items-center
  gap-5
  mt-5
`;

const UserEmail = tw.strong`
  text-main-orange
`;

export { DialogButtonWrapper, UserEmail };
