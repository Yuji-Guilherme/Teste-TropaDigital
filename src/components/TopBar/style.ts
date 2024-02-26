import tw from 'tailwind-styled-components';

const Section = tw.section`
  w-full
  mt-12
  pr-20
  flex
  gap-8
  justify-end

  md:pr-10
  md:gap-4
  md:mt-8
  sm:mt-6
  sm:pr-6
  sm:gap-4
`;

const InputWrapper = tw.div`
  w-[420px]
  h-[46px]
  bg-white
  drop-shadow-md
  flex
  items-center
  rounded-3xl
  px-5
  gap-3

  md:h-9
  md:w-96
  md:gap-1
  sm:w-60
  sm:h-9
`;

const Input = tw.input`
  w-full
  px-2
  tracking-wider
  text-main-gray
  font-medium
  text-sm
  outline-none
  placeholder:text-main-gray
  placeholder:font-normal

  md:text-xs
`;

const NotificationWrapper = tw.div`
  relative
  flex
  justify-center
`;

const NotificationArea = tw.div`
  w-40
  h-32
  rounded-3xl
  shadow-md
  p-2
  absolute
  right-0
  top-16
  bg-white
  flex
  flex-col
  items-center
  z-9
`;

const NotificationText = tw.p`
  text-main-gray
  text-sm
`;

const notificationIconClassName = 'md:w-5 md:h-5 sm:w-6 sm:h-6';

const searchIconClassName = 'md:w-4 md:h-4';

export {
  Section,
  InputWrapper,
  Input,
  NotificationWrapper,
  NotificationArea,
  NotificationText,
  notificationIconClassName,
  searchIconClassName
};
