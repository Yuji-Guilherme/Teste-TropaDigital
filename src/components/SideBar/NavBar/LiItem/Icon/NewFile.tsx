import type { SideBarIconsProps } from '.';

function NewFileIcon({
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
        d="M3.75 25.5V4.5C3.75 3.39543 4.64543 2.5 5.75 2.5H17.9216C18.452 2.5 18.9607 2.71071 19.3358 3.08579L25.6642 9.41421C26.0393 9.78929 26.25 10.298 26.25 10.8284V25.5C26.25 26.6046 25.3546 27.5 24.25 27.5H5.75C4.64543 27.5 3.75 26.6046 3.75 25.5Z"
        className={pathClassName}
        style={pathStyle}
      />
      <path
        d="M15 11.25V20"
        className={pathClassName}
        style={pathStyle}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.375 15.625L10.625 15.625"
        className={pathClassName}
        style={pathStyle}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { NewFileIcon };
