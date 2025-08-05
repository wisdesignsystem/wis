import { useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const defaultOptions: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

const useMutationObserver = <E extends HTMLElement>(
  element: E | E[] | null,
  callback: MutationCallback,
  delayTime = 0,
  options: MutationObserverInit = defaultOptions,
) => {
  const mutationObserver = useRef<MutationObserver>();

  const mutationHandle = useRef<MutationCallback>();
  mutationHandle.current = callback;

  useEffect(
    () => {
      const debounceMutation = debounce((entries, observer) => {
        mutationHandle.current?.(entries, observer);
      }, delayTime);

      mutationObserver.current = new MutationObserver(debounceMutation);

      if (Array.isArray(element)) {
        for (const el of element) {
          mutationObserver.current?.observe?.(el, options);
        }
      } else if (element) {
        mutationObserver.current?.observe?.(element, options);
      }

      return () => {
        debounceMutation.cancel();
        mutationObserver.current?.disconnect?.();
      };
    },
    Array.isArray(element)
      ? [...element, options, delayTime]
      : [element, options, delayTime],
  );
};

export default useMutationObserver;
