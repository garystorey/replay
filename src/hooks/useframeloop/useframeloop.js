import { useRef, useEffect, useCallback } from "react"


const IGNORE_LARGE_TIMESTAMPS = 10000


export default function useFrameLoop(
  callback,
  data = [],
  isPlaying,
  frameRate,
) {
  const requestID = useRef()
  const currentFrame = useRef(0)
  const timer = useRef(Date.now())

  const restart = useCallback(() => {
    currentFrame.current = 0
  }, [])

  const loop = useCallback(async () => {
    let frame = data[currentFrame.current]
    if (!frame) {
      currentFrame.current = 0
      requestID.current = requestAnimationFrame(loop)
      return
    }

    let ts =
      frame.timestamp > IGNORE_LARGE_TIMESTAMPS && currentFrame.current === 0
        ? IGNORE_LARGE_TIMESTAMPS
        : frame.timestamp

    ts = ts * frameRate
    const now = Date.now()
    const timeDiff = now - timer.current
    if (ts <= timeDiff) {
      callback(frame, currentFrame.current)
      timer.current = now
      currentFrame.current++
    }
    requestID.current = requestAnimationFrame(loop)
  }, [callback, data, frameRate])

  useEffect(() => {
    if (isPlaying) requestID.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(requestID.current)
  }, [isPlaying, loop, data])

  return { restart, current: currentFrame.current }
}
