import { useEffect, useCallback, useRef, RefObject } from "react";

function useOutside<T extends Node>(onOutside: () => void): RefObject<T> {
  const ref = useRef<T>(null);

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && onOutside(),
    [onOutside]
  );
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current && ref.current?.contains(e.target as HTMLElement))) {
        onOutside();
      }
    },
    [onOutside]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("click", handleClick);
    };
  }, [handleKeyUp, handleClick]);

  return ref;
}

export default useOutside;
