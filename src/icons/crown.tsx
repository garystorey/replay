import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function CrownIcon({
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
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill={color} d="M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z" />
    </svg>
  );
}
