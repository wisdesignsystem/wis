import { useEffect, useRef } from "react";

export default function useWillUnmount(callback: () => void) {
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
