import { useEffect, useRef, useState } from "react"

export default function useShowCountdown() {
  const [countdown, setCountdown] = useState(false)
  const [toggleShowCountdown, setShowCountdown] = useState(false)
  const countdownRef = useRef(false)
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let to: string | number | NodeJS.Timeout | undefined
    if (countdownRef.current) {
      setCountdown(true)
      to = setTimeout(() => {
        setCountdown(false)
      }, 5000)
    } else {
      countdownRef.current = true
    }
    return () => {
      clearTimeout(to)
      countdownRef.current = false
    }
  }, [toggleShowCountdown])

  return { countdown, setShowCountdown }
}
