import tw from 'tailwind-styled-components';

const Section = tw.section`
  w-full
  mt-6
  flex
  flex-wrap
  gap-10

  sm:overflow-x-scroll
  sm:flex-col
  sm:flex-nowrap
`;

const Card = tw.div`
  bg-white
  flex
  flex-col
  drop-shadow-md
`;

const CardMd = tw(Card)`
  rounded-[19px]
  py-5
`;

const CardLg = tw(Card)`
  rounded-[22px]
  w-[967px]
  py-5
`;

const CardHeader = tw.div`
  w-full
  flex
  justify-between
  px-7
`;

const CardTitleWrapper = tw.div`
  flex
  flex-col
  gap-1
`;

const CardTitle = tw.p`
  text-gray-1
  font-semibold
  text-sm
`;

const CardSubTitle = tw.p`
  text-gray-2
  text-xs
`;

const CardNumber = tw.p`
  font-medium
  text-2xl
  text-main-orange
`;

const InfoButton = tw.button`
  self-start
`;

const TableText = tw.p`
  text-gray-2
`;

const BreakLine = tw.span`
  h-px
  w-full
  my-4
  bg-gray-4
`;

const DescriptionsArea = tw.div`
  w-full
  mt-6
  gap-3
  flex
  items-center
  justify-center
`;

const DescriptionWrapper = tw.div`
  flex
  items-center
  gap-1
`;

export {
  Section,
  CardMd,
  CardLg,
  CardHeader,
  CardTitleWrapper,
  CardTitle,
  CardSubTitle,
  CardNumber,
  InfoButton,
  TableText,
  BreakLine,
  DescriptionsArea,
  DescriptionWrapper
};
