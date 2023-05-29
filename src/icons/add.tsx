import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function AddIcon({
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
      viewBox="0 0 24 24"
    >
      <polygon
        stroke={color}
        fill={color}
        points="11 4 11 11 4 11 4 13 11 13 11 20 13 20 13 13 20 13 20 11 13 11 13 4"
      />
    </svg>
  );
}
