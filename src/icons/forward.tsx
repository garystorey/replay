import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function ForwardIcon({
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
        fill={color}
        d="M12 13.333l-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416v-5.733z"
      />
    </svg>
  );
}
