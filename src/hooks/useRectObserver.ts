import type { RefObject } from "react";
import { useState } from "react";

import useResizeObserver from "./useResizeObserver";

function useRectObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  debounceTime = 100,
) {
  const [rect, setRect] = useState<DOMRectReadOnly>();

  useResizeObserver(
    ref,
    (entries) => {
      const domRect = entries[0].contentRect;
      setRect(domRect);
    },
    debounceTime,
  );

  return rect;
}

export default useRectObserver;
