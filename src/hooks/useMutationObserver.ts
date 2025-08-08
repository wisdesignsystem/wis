import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import debounce from "lodash.debounce";

const defaultOptions: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

const useMutationObserver = <E extends HTMLElement>(
  ref: RefObject<E | null | (E | null)[]>,
  callback: MutationCallback,
  debounceTime = 0,
  options: MutationObserverInit = defaultOptions,
) => {
  const mutationObserver = useRef<MutationObserver>();

  const mutationHandle = useRef<MutationCallback>();
  mutationHandle.current = callback;

  useEffect(() => {
    const debounceMutation = debounce((entries, observer) => {
      mutationHandle.current?.(entries, observer);
    }, debounceTime);

    mutationObserver.current = new MutationObserver(debounceMutation);

    if (Array.isArray(ref.current)) {
      for (const el of ref.current) {
        if (el === null) {
          continue;
        }
        mutationObserver.current?.observe?.(el, options);
      }
    } else if (ref.current) {
      mutationObserver.current?.observe?.(ref.current, options);
    }

    return () => {
      debounceMutation.cancel();
      mutationObserver.current?.disconnect?.();
    };
  }, [options, debounceTime]);
};

export default useMutationObserver;
