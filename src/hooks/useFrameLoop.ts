import { useRef, useCallback } from "react"

import { Frame } from "../types"
import { useRAF } from "./useAnimationFrame"

const FRAME_MS = 16.6667

export default function useFrameLoop(
  // eslint-disable-next-line no-unused-vars
  callback: (f: Frame, index: number) => void,
  data: Frame[] = [],
  isPlaying: boolean,
  frameRate: number
) {
  const currentFrame = useRef(0)
  const timer = useRef(Date.now())

  const restart = useCallback(() => {
    currentFrame.current = 0
  }, [])

  const loop = useCallback(() => {
    const frame: Frame = data[currentFrame.current]
    if (!frame) {
      currentFrame.current = 0
      return
    }

    const ts = currentFrame.current === 0 ? 0 : Math.round(frame.frames * FRAME_MS) * frameRate

    const now = Date.now()
    const timeDiff = now - timer.current
    if (ts <= timeDiff) {
      callback(frame, currentFrame.current)
      timer.current = now
      currentFrame.current++
    }
  }, [callback, data, frameRate])

  useRAF(loop, isPlaying)

  return { restart }
}
