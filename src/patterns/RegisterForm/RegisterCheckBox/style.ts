import tw from 'tailwind-styled-components';

const CheckBoxWrapper = tw.div`
  w-full
  flex
  items-center
`;

const CheckBoxTermsContainer = tw.div`
  w-full
  flex
  flex-col
  gap-1
`;

const CheckBoxTermsErrorMessage = tw.p`
  text-sm
  text-main-red
`;

const termsLinkClassName = 'text-main-orange underline';

export {
  CheckBoxWrapper,
  CheckBoxTermsContainer,
  CheckBoxTermsErrorMessage,
  termsLinkClassName
};
