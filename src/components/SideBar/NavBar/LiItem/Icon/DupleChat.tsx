import type { CSSProperties } from 'react';
import type { SideBarIconsProps } from '.';

type DupleChatProps = {
  circleStyle: CSSProperties;
  circleClassName: string;
} & SideBarIconsProps;

function DupleChatIcon({
  svgClassName,
  pathClassName,
  circleClassName,
  pathStyle,
  circleStyle,
  ...props
}: DupleChatProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
      {...props}
    >
      <path
        d="M6.875 26.7393V8.875C6.875 7.77043 7.77043 6.875 8.875 6.875H25.5C26.6046 6.875 27.5 7.77043 27.5 8.875V23.2083C27.5 24.3129 26.6046 25.2083 25.5 25.2083H12.5922C12.3193 25.2083 12.0494 25.2642 11.7989 25.3724L7.57333 27.1983C7.24323 27.3409 6.875 27.0989 6.875 26.7393Z"
        className={pathClassName}
        style={pathStyle}
      />
      <path
        d="M22.9161 17.1875C23.5489 17.1875 24.0619 16.6745 24.0619 16.0417C24.0619 15.4089 23.5489 14.8959 22.9161 14.8959C22.2833 14.8959 21.7703 15.4089 21.7703 16.0417C21.7703 16.6745 22.2833 17.1875 22.9161 17.1875Z"
        className={circleClassName}
        style={circleStyle}
      />
      <path
        d="M17.1873 17.1875C17.8202 17.1875 18.3332 16.6745 18.3332 16.0417C18.3332 15.4089 17.8202 14.8959 17.1873 14.8959C16.5545 14.8959 16.0415 15.4089 16.0415 16.0417C16.0415 16.6745 16.5545 17.1875 17.1873 17.1875Z"
        className={circleClassName}
        style={circleStyle}
      />
      <path
        d="M11.4583 17.1875C12.0912 17.1875 12.6042 16.6745 12.6042 16.0417C12.6042 15.4089 12.0912 14.8959 11.4583 14.8959C10.8255 14.8959 10.3125 15.4089 10.3125 16.0417C10.3125 16.6745 10.8255 17.1875 11.4583 17.1875Z"
        className={circleClassName}
        style={circleStyle}
      />
      <path
        d="M23.125 6.25V4.5C23.125 3.39543 22.2296 2.5 21.125 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V22.3643C2.5 22.7239 2.86823 22.9659 3.19833 22.8233L6.25 21.5046"
        className={pathClassName}
        style={pathStyle}
      />
    </svg>
  );
}

export { DupleChatIcon };
