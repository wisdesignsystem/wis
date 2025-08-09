import { useEffect, useRef } from "react";

export default function useDidMount(callback: () => void) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      callback();
      isMounted.current = true;
    }
  }, []);
}
