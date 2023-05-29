import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function DottedLineIcon({
  className = "",
  height,
  width = "1rem",
  onClick = noop,
  label,
  role = "none",
  color = "currentColor",
  ...iconProps
}: IconProps) {
  const updatedHeight = height || width;
  return (
    <svg
      {...iconProps}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      height={updatedHeight}
      width={width}
      onClick={onClick}
      aria-label={label}
      role={role}
      fill="none"
      viewBox="0 0 24 138"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd" strokeDasharray="3,8">
        <line
          x1="12"
          y1="2"
          x2="12"
          y2="137.000002"
          stroke={color}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
