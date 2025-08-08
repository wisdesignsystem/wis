import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import debounce from "lodash.debounce";

const useResizeObserver = <E extends HTMLElement>(
  ref: RefObject<E | null>,
  callback: ResizeObserverCallback,
  delayTime = 0,
) => {
  const resizeObserver = useRef<ResizeObserver>();

  const resizeHandle = useRef<ResizeObserverCallback>();
  resizeHandle.current = callback;

  useEffect(() => {
    const debounceResize = debounce((entries, observer) => {
      resizeHandle.current?.(entries, observer);
    }, delayTime);

    resizeObserver.current = new ResizeObserver(debounceResize);

    if (ref.current) {
      resizeObserver.current?.observe?.(ref.current);
      const table = ref.current.querySelector("table");
      if (table) {
        resizeObserver.current?.observe?.(table);
      }
    }

    return () => {
      debounceResize.cancel();
      resizeObserver.current?.disconnect?.();
    };
  }, [delayTime]);
};

export default useResizeObserver;
