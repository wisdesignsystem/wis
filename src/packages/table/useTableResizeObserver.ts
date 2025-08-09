import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import debounce from "lodash.debounce";

interface ResizeObserverOption {
  before?: () => boolean;
}

const useResizeObserver = <E extends HTMLElement>(
  ref: RefObject<E | null>,
  callback: ResizeObserverCallback,
  debounceTime = 0,
  options?: ResizeObserverOption,
) => {
  const resizeObserver = useRef<ResizeObserver>();

  const resizeHandle = useRef<ResizeObserverCallback>();
  resizeHandle.current = callback;

  const beforeHandle = useRef<ResizeObserverOption["before"]>();
  beforeHandle.current = options?.before;

  useEffect(() => {
    const debounceResize = debounce((entries, observer) => {
      if (beforeHandle.current) {
        if (beforeHandle.current() === false) {
          return;
        }
      }

      resizeHandle.current?.(entries, observer);
    }, debounceTime);

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
  }, [debounceTime]);
};

export default useResizeObserver;
