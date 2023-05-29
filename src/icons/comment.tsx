import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function CommentIcon({
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
        d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17H12.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"
      />
    </svg>
  );
}
