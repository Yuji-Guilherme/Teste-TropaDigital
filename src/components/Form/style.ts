import tw from 'tailwind-styled-components';
import type { HTMLFactory, InputHTMLAttributes } from 'react';
import './checkmark.css';

type StyledInputWrapperProps = {
  hasError: boolean;
} & HTMLFactory<HTMLDivElement>;

type StyledInputProps = {
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Root = tw.form`
  flex
  flex-col
  items-center
  w-full
`;

const Title = tw.h3`
  text-main-orange
  text-[80px]
  font-bold
  tracking-wide

  md:text-[52px]
  sm:text-5xl
`;

const Label = tw.label`
  text-main-orange
  text-xl
  font-bold
  cursor-pointer
  tracking-wide

  md:text-lg
`;

const InputWrapper = tw.div<StyledInputWrapperProps>`
  w-full
  h-9
  flex
  border-solid
  border-b-1
  border-main-orange
  transition-colors
  ${(p) => p.hasError && 'border-main-red'}

  md:h-6
  md:mt-1
`;

const Input = tw.input<StyledInputProps>`
  bg-transparent
  w-full
  outline-none
  font-medium
  text-lg
  text-main-gray
  tracking-wide

  placeholder:text-main-gray
  placeholder:text-base
  placeholder:font-normal
  placeholder:tracking-wide

  md:text-sm
  md:placeholder:text-sm

  ${(p) => p.hasError && 'text-main-red'}
`;

const CheckBox = tw.input`
  w-0
  h-0
  opacity-0
  cursor-pointer
  absolute
`;

const CheckMark = tw.span`
  checkmark
`;

const CheckBoxLabel = tw.label`
  text-sm
  text-main-orange
  pl-6
  cursor-pointer
  relative
  tracking-wide
`;

const ErrorMessage = tw.p`
  text-sm
  text-main-red
  tracking-wide

  md:text-xs
  md:mt-1
  `;

export {
  Root,
  Title,
  Label,
  InputWrapper,
  Input,
  CheckBox,
  CheckMark,
  CheckBoxLabel,
  ErrorMessage
};
