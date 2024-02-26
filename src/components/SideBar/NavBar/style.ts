import tw from 'tailwind-styled-components';

const Nav = tw.nav`
  w-full
  mt-12

  md:mt-4
  sm:mt-8
`;

const NavBreakLine = tw.span`
  h-px
  w-[262px]
  my-5
  bg-light-gray
  rounded

  md:w-3/4
  md:my-2
`;

const Ul = tw.ul`
  h-full
  w-full
  flex
  flex-col
  items-center
`;

export { Nav, NavBreakLine, Ul };
