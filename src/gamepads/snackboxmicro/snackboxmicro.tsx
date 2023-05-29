import { btnArrayToString, buttonsFromBinary, noop } from "../../utils"
import { Button } from "../button"
import { SnackboxProps } from "../controllerprops"
import { MouseEvent } from "react"
import css from "./snackboxmicro.module.css"

export default function SnackboxMicro({
  user = 0,
  playback = 0,
  id,
  className = "",
  animation = "",
  onClick = noop,
}: SnackboxProps) {
  let btns = buttonsFromBinary(user)
  const defaultBtns = buttonsFromBinary(playback)

  const classes = `${css.snackboxmicro}${className ?? ``}`

  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    const { index } = e.currentTarget.dataset
    const i = Number(index)
    const buttons = btns.split("")
    const current = buttons[i]
    //flip the currently selected buttons to on/off
    onClick(btnArrayToString(buttons.splice(i, 1, current === "1" ? "0" : "1")))
  }

  return (
    <section id={id} className={classes}>
      <Button
        title="K1"
        pressed={btns[0] === "1"}
        playbackPressed={defaultBtns[0] === "1"}
        name="b0"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={0}
      />
      <Button
        title="K2"
        pressed={btns[1] === "1"}
        playbackPressed={defaultBtns[1] === "1"}
        name="b1"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={1}
      />
      <Button
        title="P1"
        pressed={btns[2] === "1"}
        playbackPressed={defaultBtns[2] === "1"}
        name="b2"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={2}
      />
      <Button
        title="P2"
        pressed={btns[3] === "1"}
        playbackPressed={defaultBtns[3] === "1"}
        name="b3"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={3}
      />
      <Button
        title="P4"
        pressed={btns[4] === "1"}
        playbackPressed={defaultBtns[4] === "1"}
        name="b4"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={4}
      />
      <Button
        title="P3"
        pressed={btns[5] === "1"}
        playbackPressed={defaultBtns[5] === "1"}
        name="b5"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={5}
      />
      <Button
        title="K4"
        pressed={btns[6] === "1"}
        playbackPressed={defaultBtns[6] === "1"}
        name="b6"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={6}
      />
      <Button
        title="K3"
        pressed={btns[7] === "1"}
        playbackPressed={defaultBtns[7] === "1"}
        name="b7"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={7}
      />
      <Button
        title="up"
        pressed={btns[12] === "1"}
        playbackPressed={defaultBtns[12] === "1"}
        name="b12"
        size="lg"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={12}
      />
      <Button
        title="down"
        pressed={btns[13] === "1"}
        playbackPressed={defaultBtns[13] === "1"}
        name="b13"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={13}
      />
      <Button
        title="right"
        pressed={btns[14] === "1"}
        playbackPressed={defaultBtns[14] === "1"}
        name="b14"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={14}
      />
      <Button
        title="left"
        pressed={btns[15] === "1"}
        playbackPressed={defaultBtns[15] === "1"}
        name="b15"
        size="md"
        className={css.button}
        animation={animation}
        onClick={handleClick}
        index={15}
      />
    </section>
  )
}
