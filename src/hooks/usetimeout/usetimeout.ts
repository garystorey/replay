import { useEffect } from "react";

/** A simple replacement for setTimeout that automatically clears the timer */
function useTimeout(fn: () => void, timeout: number) {
  useEffect(() => {
    const useTimeoutTimer = setTimeout(fn, timeout);
    return () => clearTimeout(useTimeoutTimer);
  }, [fn, timeout]);
}
export default useTimeout;
