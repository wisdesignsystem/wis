import { useState } from "react";
import type { RefObject } from "react";

import useResizeObserver from "./useResizeObserver";

function useRectObserver<E extends HTMLElement>(
  ref: RefObject<E | null | (E | null)[]>,
  debounceTime = 0,
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
