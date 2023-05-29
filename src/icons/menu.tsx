import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function MenuIcon({
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
      <path
        data-color
        d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
        fill={color}
      />
    </svg>
  );
}
