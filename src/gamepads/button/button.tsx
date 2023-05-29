import { MouseEvent } from "react"
import { noop } from "../../utils"

export type ButtonClick = {
  name: string
  pressed: boolean
  playbackPressed: boolean
}
export type ButtonProps = {
  index: number
  title: string
  className?: string
  pressed?: boolean
  playbackPressed?: boolean
  name: string
  size: "sm" | "md" | "lg"
  animation?: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void
}

export default function Button({
  title,
  index,
  className = "",
  pressed = false,
  playbackPressed = false,
  name,
  size = "md",
  animation = "",
  onClick = noop,
}: ButtonProps) {
  const bothPressed = pressed && playbackPressed
  return (
    <span
      title={title}
      className={className ?? ``}
      data-name={name}
      data-size={size}
      data-user={pressed}
      data-playback={playbackPressed}
      data-animation={animation}
      data-both={bothPressed}
      data-index={index}
      onClick={onClick}
    >
      <span data-inner />
    </span>
  )
}
