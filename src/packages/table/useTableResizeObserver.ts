import { useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const useResizeObserver = <E extends HTMLElement>(
  element: E | null,
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

    return () => {
      debounceResize.cancel();
      resizeObserver.current?.disconnect?.();
    };
  }, [delayTime]);

  useEffect(() => {
    if (!element) {
      return;
    }

    resizeObserver.current?.observe?.(element);
    const table = element.querySelector("table");
    if (table) {
      resizeObserver.current?.observe?.(table);
    }

    return () => {
      resizeObserver.current?.disconnect?.();
    };
  }, [element]);
};

export default useResizeObserver;
