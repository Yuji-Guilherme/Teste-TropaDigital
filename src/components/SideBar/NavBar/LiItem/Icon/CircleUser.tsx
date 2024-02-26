import type { SideBarIconsProps } from '.';

function CircleUserIcon({
  svgClassName,
  pathClassName,
  pathStyle,
  ...props
}: SideBarIconsProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
      {...props}
    >
      <path
        d="M27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C21.9036 27.5 27.5 21.9036 27.5 15Z"
        className={pathClassName}
        style={pathStyle}
      />
      <path
        d="M18.75 12.5C18.75 14.5711 17.071 16.25 15 16.25C12.929 16.25 11.25 14.5711 11.25 12.5C11.25 10.4289 12.929 8.75 15 8.75C17.071 8.75 18.75 10.4289 18.75 12.5Z"
        className={pathClassName}
        style={pathStyle}
      />
      <path
        d="M22.5 25C22.5 22.2386 19.1421 20 15 20C10.8579 20 7.5 22.2386 7.5 25"
        className={pathClassName}
        style={pathStyle}
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CircleUserIcon };
