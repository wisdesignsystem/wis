import { useLayoutEffect, useRef } from "react";

export default function useDidMount(callback: () => void) {
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    if (!isMounted.current) {
      callback();
      isMounted.current = true;
    }
  }, []);
}
