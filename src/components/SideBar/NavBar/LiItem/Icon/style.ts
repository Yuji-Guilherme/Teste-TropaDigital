import type { CSSProperties } from 'react';

const svgIconClassName = 'w-[30px] h-[30px] md:w-5 md:h-5';

const pathIconClassName = 'stroke-2 transition-colors';

const circleIconClassName = 'transition-colors';

const pathStyleFn = (bool: boolean) => {
  return {
    stroke: `${bool ? '#fff' : '#333'}`
  } as CSSProperties;
};

const circleStyleFn = (bool: boolean) => {
  return {
    fill: `${bool ? '#fff' : '#333'}`
  } as CSSProperties;
};

export {
  svgIconClassName,
  pathIconClassName,
  circleIconClassName,
  pathStyleFn,
  circleStyleFn
};
