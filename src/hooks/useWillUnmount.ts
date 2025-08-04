import { useLayoutEffect, useRef } from "react";

export default function useWillUnmount(callback: () => void) {
  const mount = useRef(false);

  useLayoutEffect(() => {
    mount.current = true;

    return () => {
      if (mount.current) {
        callback();
      }
    };
  }, []);
}
