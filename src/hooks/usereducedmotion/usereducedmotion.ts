import { useState, useEffect } from "react";

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => !!window.matchMedia("prefers-reduced-motion: reduce").matches
  );

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(
      "prefers-reduced-motion: reduce"
    );
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!!event.matches);
    };
    mediaQueryList.addListener(listener);
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);
  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
