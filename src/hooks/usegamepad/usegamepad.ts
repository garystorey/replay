import { useState, useEffect, useRef, useCallback } from "react"
import { Frame } from "../../types"
import { buttonsToBinary, buttonsToString, toFrames } from "../../utils"
const initial = {
  buttons: [],
  timestamp: 0,
}
let animationFrame = -1
let pressed: number[] = [];

type AddEventProps = {
  type: string;
  btn: string;
  timestamp: number;
};

const addEvent = ({ type, btn, timestamp }: AddEventProps) => {
  const event: CustomEvent = new CustomEvent(`gp${type}`, {
    detail: {
      type,
      btn,
      timestamp,
    },
  });
  window.dispatchEvent(event);
};

function useGamepad(controllerId: number) {
  const [isRecording, setIsRecording] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const sessionData = useRef<Frame[]>([])
  const previousFrame = useRef(0)
  const timer = useRef(0)

  const record = useCallback(() => {
    setIsRecording(true)
    sessionData.current.length = 0
    timer.current = 0
  }, [])

  const pause = useCallback(() => setIsRecording(false), [])

  const stop = useCallback(() => {
    setIsRecording(false)
    return sessionData.current
  }, [])

  useEffect(() => {
    const getUpdates = () => {
      const gamepads = navigator.getGamepads()

      const { buttons, timestamp } = gamepads[controllerId] || initial
      buttons.forEach((btn, index) => {
        if (btn.pressed) {
          if (!pressed.includes(index)) {
            pressed.push(index);
            addEvent({
              type: "Down",
              btn: buttonsToString([...buttons]),
              timestamp,
            });
          }
          return;
        }
        if (pressed.includes(index)) {
          pressed = pressed.filter((btn) => btn !== index);
          addEvent({
            timestamp,
            type: "Up",
            btn: buttonsToString([...buttons]),
          });
        }
      });
      const btn = buttonsToBinary(buttonsToString(buttons as GamepadButton[]))
      const millisecs =
        timer.current === 0 ? timestamp : timestamp - timer.current

      if (btn !== previousFrame.current) {
        previousFrame.current = btn
        timer.current = timestamp
        setCurrentFrame(btn)
        const state = {
          buttons: btn,
          frames: millisecs < 0 ? 0 : toFrames(millisecs),
          timestamp: millisecs,
        }
        if (isRecording) {
          sessionData.current.push(state)
        }
      }
      animationFrame = requestAnimationFrame(getUpdates)
    }

    getUpdates()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isRecording, controllerId])

  return {
    currentFrame,
    isRecording,
    record,
    pause,
    stop,
  }
}

export default useGamepad
