import type { SideBarIconsProps } from '.';

function DashBoardIcon({
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
        d="M3.125 25.375V4.625C3.125 3.79657 3.79657 3.125 4.625 3.125H11.5208C12.3493 3.125 13.0208 3.79657 13.0208 4.625V25.375C13.0208 26.2034 12.3493 26.875 11.5208 26.875H4.625C3.79657 26.875 3.125 26.2034 3.125 25.375Z"
        style={pathStyle}
        className={pathClassName}
      />
      <path
        d="M16.9789 11.5208V4.625C16.9789 3.79657 17.6505 3.125 18.4789 3.125H25.3747C26.2031 3.125 26.8747 3.79657 26.8747 4.625V11.5208C26.8747 12.3493 26.2031 13.0208 25.3747 13.0208H18.4789C17.6505 13.0208 16.9789 12.3493 16.9789 11.5208Z"
        style={pathStyle}
        className={pathClassName}
      />
      <path
        d="M16.9789 25.3752V18.4794C16.9789 17.6509 17.6505 16.9794 18.4789 16.9794H25.3747C26.2031 16.9794 26.8747 17.6509 26.8747 18.4794V25.3752C26.8747 26.2036 26.2031 26.8752 25.3747 26.8752H18.4789C17.6505 26.8752 16.9789 26.2036 16.9789 25.3752Z"
        style={pathStyle}
        className={pathClassName}
      />
    </svg>
  );
}

export { DashBoardIcon };
