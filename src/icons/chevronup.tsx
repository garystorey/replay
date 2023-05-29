import { noop } from "../utils";
import { IconProps } from "./iconprops";

export default function ChevronUpIcon({
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
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1052.000000, -277.000000)">
          <g transform="translate(100.000000, 100.000000)">
            <g transform="translate(520.000000, 0.000000)">
              <g transform="translate(0.000000, 57.000000)">
                <g transform="translate(0.000000, 108.000000)">
                  <g transform="translate(44.000000, 12.000000)">
                    <g transform="translate(388.000000, 0.000000)">
                      <g transform="translate(8.000000, 8.000000) scale(1, -1) translate(-8.000000, -8.000000) ">
                        <rect x="0" y="0" width="24" height="24" />
                        <polyline
                          stroke={color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          points="2 6 8 12 14 6"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
