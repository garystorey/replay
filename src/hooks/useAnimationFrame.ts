import { useEffect, useRef } from "react"

export function useRAF(loop: () => void, isPlaying: boolean) {
  const loopRef = useRef(0)

  useEffect(() => {
    if (isPlaying) loopRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(loopRef.current)
  }, [loop, isPlaying])
}
