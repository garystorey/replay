import { createRef, useEffect, RefObject } from "react";

function useHeadingFocus(): RefObject<HTMLHeadingElement> {
  const ref = createRef<HTMLHeadingElement>();
  useEffect(() => {
    try {
      if (ref?.current) {
        const headerTags = ["H1", "H2", "H3", "H4", "H5", "H6"];
        if (headerTags.includes(ref.current.tagName)) {
          ref.current.focus();
        } else {
          throw new Error(
            "useHeadingFocus - RefObject must be a HTMLHeadingElement"
          );
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [ref]);
  return ref;
}

export default useHeadingFocus;
