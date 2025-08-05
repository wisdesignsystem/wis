import { useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const useResizeObserver = <E extends HTMLElement>(
  element: E | E[] | null,
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

  useEffect(
    () => {
      if (!element) {
        return;
      }

      if (Array.isArray(element)) {
        for (const el of element) {
          resizeObserver.current?.observe?.(el);
        }
      } else {
        resizeObserver.current?.observe?.(element);
      }

      return () => {
        resizeObserver.current?.disconnect?.();
      };
    },
    Array.isArray(element) ? [...element] : [element],
  );
};

export default useResizeObserver;
