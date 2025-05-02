import { useEffect, useRef } from "react";

export default function useDidMount(fn: () => void) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      fn();
      isMounted.current = true;
    }
  }, []);
}
