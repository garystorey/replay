const NO_BUTTONS_PRESSED: string = "0000000000000000"
export const emptyButtons = () => NO_BUTTONS_PRESSED.slice(0)

export type Frame = {
  sn: string
  buttons: number
  ts: number
}

const EMPTY_FRAME: Frame = {
  sn: "",
  buttons: 0,
  ts: 0,
}

export const empty = () => ({ ...EMPTY_FRAME })

export const addFrame = (replay: Frame[], index: number, frame: Frame): Frame[] => {
  const newFrame: Frame = frame ?? { ...empty() }
  return [...replay.slice(0, index), newFrame, ...replay.slice(index)]
}

export const buttonsToString = (buttons: GamepadButton[]) =>
  buttons.map((btn) => (btn.pressed ? "1" : "0")).join("")

export const btnArrayToString = (buttons: string[]) => {
  const arr = emptyButtons()
    .split("")
    .map((_: string, i: number) => {
      const curr = buttons[i]
      return curr === "0" || !curr ? 0 : 1
    })
  return arr.join("")
}

export const btnStringToArray = (buttons: string) =>
  buttons.split("").map((i) => (!i ? 0 : Number(i)))

export const mergeButtons = (a: string, b: string) => {
  const first = btnStringToArray(a)
  const second = btnStringToArray(b)
  return first.map((val, i) => (val + second[i] === 1 ? 1 : 0)).join("")
}

export const priorityMerge = (a: string, b: string) => {
  const first = btnStringToArray(a)
  const second = btnStringToArray(b)
  return first.map((val, i) => (val === second[i] ? 0 : 1)).join("")
}

export const toFrames = (time: number) => Math.ceil(time / 16.6666667)
export const toMS = (frame: number) => Math.ceil(frame * 16.6666667)

export const frameRateFromVideoSpeed = (videoSpeed: number) =>
  videoSpeed === 0.25 ? 4 : videoSpeed === 0.5 ? 2 : videoSpeed === 0.75 ? 1.35 : 1

export const buttonsFromBinary = (buttons: number) => {
  return Number(buttons).toString(2).padStart(16, "0").slice(0, 16)
}
export const buttonsToBinary = (buttons: string) => {
  return parseInt(buttons, 2)
}
