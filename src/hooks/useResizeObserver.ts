import { useEffect, useRef } from "react";
import debounce from "lodash.debounce";

interface ResizeObserverOption {
  before?: () => boolean;
}

const useResizeObserver = <E extends HTMLElement>(
  element: E | E[] | null,
  callback: ResizeObserverCallback,
  delayTime = 0,
  options?: ResizeObserverOption,
) => {
  const resizeObserver = useRef<ResizeObserver>();

  const resizeHandle = useRef<ResizeObserverCallback>();
  resizeHandle.current = callback;

  const beforeHandle = useRef<ResizeObserverOption["before"]>();
  beforeHandle.current = options?.before;

  useEffect(
    () => {
      const debounceResize = debounce((entries, observer) => {
        resizeHandle.current?.(entries, observer);
      }, delayTime);

      resizeObserver.current = new ResizeObserver((entries, observer) => {
        if (beforeHandle.current) {
          if (beforeHandle.current() === false) {
            return;
          }
        }

        return debounceResize(entries, observer);
      });

      if (Array.isArray(element)) {
        for (const el of element) {
          resizeObserver.current?.observe?.(el);
        }
      } else if (element) {
        resizeObserver.current?.observe?.(element);
      }

      return () => {
        debounceResize.cancel();
        resizeObserver.current?.disconnect?.();
      };
    },
    Array.isArray(element) ? [...element, delayTime] : [element, delayTime],
  );
};

export default useResizeObserver;
