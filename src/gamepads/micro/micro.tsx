import { useEffect, useRef } from "react"
import { buttonsFromBinary } from "../../utils"
import { SnackboxProps } from "../controllerprops"
import css from "./micro.module.css"

const defaultButtonColor = "#999999"
const defaultButtonHighlight = "#cccccc"
const defaultButtons = 0
const defaultBackgroundColor = "#666666"
const buttonPressed = "#ae3ec9"
const highlightPressed = "#339af0"
const bothPressed = "#51cf66"

const snackboxWidth = 500
const snackboxHeight = snackboxWidth / 2
const snackboxHighlightButtonSize = snackboxWidth / 10 / 2
const snackboxButtonSize = snackboxHighlightButtonSize - 2
const snackboxHighlightLargeButtonSize = snackboxHighlightButtonSize + 5
const snackboxLargeButtonSize = snackboxHighlightLargeButtonSize - 2

type CircleProps = {
  ctx: CanvasRenderingContext2D
  x: number
  y: number
  buttonColor?: string
  buttonHighlight?: string
  isLarge?: boolean
}

function circle({
  ctx,
  x,
  y,
  buttonColor = defaultButtonColor,
  buttonHighlight = defaultButtonHighlight,
  isLarge = false,
}: CircleProps) {
  ctx.beginPath()
  ctx.arc(
    x,
    y,
    isLarge ? snackboxHighlightLargeButtonSize : snackboxHighlightButtonSize,
    0,
    Math.PI * 2
  )
  ctx.closePath()
  ctx.fillStyle = buttonHighlight
  ctx.fill()

  ctx.beginPath()
  ctx.arc(
    x,
    y,
    isLarge
      ? snackboxHighlightLargeButtonSize - 2
      : snackboxHighlightButtonSize - 2,
    0,
    Math.PI * 2
  )
  ctx.closePath()
  ctx.fillStyle = defaultBackgroundColor
  ctx.fill()

  ctx.beginPath()
  ctx.arc(
    x,
    y,
    isLarge ? snackboxLargeButtonSize - 1 : snackboxButtonSize - 1,
    0,
    Math.PI * 2
  )
  ctx.closePath()
  ctx.fillStyle = buttonColor
  ctx.fill()
}

function areBothPressed(btn: string, usr: string) {
  return btn === "1" && usr === "1"
}
function isPressed(str: string) {
  return str === "1"
}

function Micro({
  id,
  playback = defaultButtons,
  user = defaultButtons,
}: SnackboxProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D>()

  const btn = buttonsFromBinary(playback)
  const usr = buttonsFromBinary(user)

  useEffect(() => {
    const sb = canvasRef.current
    if (sb) {
      sb.width = snackboxWidth
      sb.height = snackboxHeight
      const ctx = sb.getContext("2d") as CanvasRenderingContext2D
      contextRef.current = ctx
      ctx.fillStyle = defaultBackgroundColor
      ctx.fillRect(0, 0, snackboxWidth, snackboxHeight)

      /* Directional */
      circle({
        ctx,
        x: 85,
        y: 70,
        buttonColor: areBothPressed(usr[14], btn[14])
          ? bothPressed
          : isPressed(btn[14])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[14], btn[14])
          ? bothPressed
          : isPressed(usr[14])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 145,
        y: 70,
        buttonColor: areBothPressed(usr[13], btn[13])
          ? bothPressed
          : isPressed(btn[13])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[13], btn[13])
          ? bothPressed
          : isPressed(usr[13])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 200,
        y: 100,
        buttonColor: areBothPressed(usr[15], btn[15])
          ? bothPressed
          : isPressed(btn[15])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[15], btn[15])
          ? bothPressed
          : isPressed(usr[15])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 225,
        y: 210,
        isLarge: true,
        buttonColor: areBothPressed(usr[12], btn[12])
          ? bothPressed
          : isPressed(btn[12])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[12], btn[12])
          ? bothPressed
          : isPressed(usr[12])
          ? highlightPressed
          : defaultButtonHighlight,
      })

      /* Button Row Top */
      circle({
        ctx,
        x: 255,
        y: 70,
        buttonColor: areBothPressed(usr[2], btn[2])
          ? bothPressed
          : isPressed(btn[2])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[2], btn[2])
          ? bothPressed
          : isPressed(usr[2])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 315,
        y: 50,
        buttonColor: areBothPressed(usr[2], btn[3])
          ? bothPressed
          : isPressed(btn[3])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[3], btn[3])
          ? bothPressed
          : isPressed(usr[3])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 380,
        y: 50,
        buttonColor: areBothPressed(usr[5], btn[5])
          ? bothPressed
          : isPressed(btn[5])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[5], btn[5])
          ? bothPressed
          : isPressed(usr[5])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 445,
        y: 70,
        buttonColor: areBothPressed(usr[4], btn[4])
          ? bothPressed
          : isPressed(btn[4])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[4], btn[4])
          ? bothPressed
          : isPressed(usr[4])
          ? highlightPressed
          : defaultButtonHighlight,
      })

      // /* Button Row Bottom */
      circle({
        ctx,
        x: 255,
        y: 135,
        buttonColor: areBothPressed(usr[0], btn[0])
          ? bothPressed
          : isPressed(btn[0])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[0], btn[0])
          ? bothPressed
          : isPressed(usr[0])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 315,
        y: 115,
        buttonColor: areBothPressed(usr[1], btn[1])
          ? bothPressed
          : isPressed(btn[1])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[1], btn[1])
          ? bothPressed
          : isPressed(usr[1])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 380,
        y: 115,
        buttonColor: areBothPressed(usr[7], btn[7])
          ? bothPressed
          : isPressed(btn[7])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[7], btn[7])
          ? bothPressed
          : isPressed(usr[7])
          ? highlightPressed
          : defaultButtonHighlight,
      })
      circle({
        ctx,
        x: 445,
        y: 135,
        buttonColor: areBothPressed(usr[6], btn[6])
          ? bothPressed
          : isPressed(btn[6])
          ? buttonPressed
          : defaultButtonColor,
        buttonHighlight: areBothPressed(usr[6], btn[6])
          ? bothPressed
          : isPressed(usr[6])
          ? highlightPressed
          : defaultButtonHighlight,
      })
    }
  }, [btn, usr])

  return (
    <div className={css.micro} id={id}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Micro
