import { noop } from "../utils"
import { IconProps } from "./iconprops"

export default function JFReplay({
  className = "",
  height,
  width = "1rem",
  onClick = noop,
  label,
  role = "none",
  ...iconProps
}: IconProps) {
  const updatedHeight = height || width
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
      viewBox="0 0 800 800"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jfrelpay">
          <stop
            stopColor="hsl(305, 77%, 50%)"
            stopOpacity="1"
            offset="0%"
          ></stop>
          <stop
            stopColor="hsl(305, 77%, 80%)"
            stopOpacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g stroke="url(#jfrelpay)" fill="none" strokeLinecap="round">
        <circle
          r="363"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1939 2281"
          transform="rotate(360, 400, 400)"
          opacity="1.00"
        ></circle>
        <circle
          r="346.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1762 2177"
          transform="rotate(343, 400, 400)"
          opacity="0.95"
        ></circle>
        <circle
          r="330"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1595 2073"
          transform="rotate(326, 400, 400)"
          opacity="0.91"
        ></circle>
        <circle
          r="313.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1435 1970"
          transform="rotate(309, 400, 400)"
          opacity="0.86"
        ></circle>
        <circle
          r="297"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1284 1866"
          transform="rotate(291, 400, 400)"
          opacity="0.82"
        ></circle>
        <circle
          r="280.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1141 1762"
          transform="rotate(274, 400, 400)"
          opacity="0.77"
        ></circle>
        <circle
          r="264"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="1007 1659"
          transform="rotate(257, 400, 400)"
          opacity="0.73"
        ></circle>
        <circle
          r="247.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="881 1555"
          transform="rotate(240, 400, 400)"
          opacity="0.68"
        ></circle>
        <circle
          r="231"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="764 1451"
          transform="rotate(223, 400, 400)"
          opacity="0.64"
        ></circle>
        <circle
          r="214.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="655 1348"
          transform="rotate(206, 400, 400)"
          opacity="0.59"
        ></circle>
        <circle
          r="198"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="554 1244"
          transform="rotate(189, 400, 400)"
          opacity="0.55"
        ></circle>
        <circle
          r="181.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="462 1140"
          transform="rotate(171, 400, 400)"
          opacity="0.50"
        ></circle>
        <circle
          r="165"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="378 1037"
          transform="rotate(154, 400, 400)"
          opacity="0.46"
        ></circle>
        <circle
          r="148.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="302 933"
          transform="rotate(137, 400, 400)"
          opacity="0.41"
        ></circle>
        <circle
          r="132"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="235 829"
          transform="rotate(120, 400, 400)"
          opacity="0.37"
        ></circle>
        <circle
          r="115.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="176 726"
          transform="rotate(103, 400, 400)"
          opacity="0.32"
        ></circle>
        <circle
          r="99"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="126 622"
          transform="rotate(86, 400, 400)"
          opacity="0.28"
        ></circle>
        <circle
          r="82.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="84 518"
          transform="rotate(69, 400, 400)"
          opacity="0.23"
        ></circle>
        <circle
          r="66"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="50 415"
          transform="rotate(51, 400, 400)"
          opacity="0.19"
        ></circle>
        <circle
          r="49.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="25 311"
          transform="rotate(34, 400, 400)"
          opacity="0.14"
        ></circle>
        <circle
          r="33"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="8 207"
          transform="rotate(17, 400, 400)"
          opacity="0.10"
        ></circle>
        <circle
          r="16.5"
          cx="400"
          cy="400"
          strokeWidth="7"
          strokeDasharray="0 104"
          opacity="0.05"
        ></circle>
      </g>
    </svg>
  )
}
