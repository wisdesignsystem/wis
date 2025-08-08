import { useEffect, useRef } from "react";

export default function useUnmount(callback: () => void) {
  const mount = useRef(false);

  useEffect(() => {
    mount.current = true;

    return () => {
      if (mount.current) {
        callback();
      }
    };
  }, []);
}
