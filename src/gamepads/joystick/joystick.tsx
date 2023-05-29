import { cssclass } from "../../utils"
import css from "./joystick.module.css"

export type JoystickProps = {
  user: string
  playback: string
  animation?: string
}

export default function Joystick({
  user,
  playback,
  animation = "",
}: JoystickProps) {
  const btns = user.split("")
  const playbackPressed = playback.split("")
  const isActive =
    btns[12] === "1" || btns[13] === "1" || btns[14] === "1" || btns[15] === "1"
  const playbackActive =
    playbackPressed[12] === "1" ||
    playbackPressed[13] === "1" ||
    playbackPressed[14] === "1" ||
    playbackPressed[15] === "1"

  const classes = cssclass(css.stick, {
    "is-up": btns[12] === "1" || playbackPressed[12] === "1",
    "is-down": btns[13] === "1" || playbackPressed[13] === "1",
    "is-left": btns[14] === "1" || playbackPressed[14] === "1",
    "is-right": btns[15] === "1" || playbackPressed[15] === "1",
    "is-active": isActive,
    "is-playback-active": playbackActive,
    [`${animation}`]: !!animation,
  })

  return (
    <span className={css.joystick}>
      <span className={classes}>
        <span className={css.inner} />
      </span>
    </span>
  )
}
