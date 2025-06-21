import type { RefObject } from "react";
import { useEffect, useRef } from "react";
import EventEmitter from "@/utils/EventEmitter";

export type SizeObserver = EventEmitter<SizeObserverEvents>;

type SizeObserverEvents = {
  resize: () => void;
};

export function useSizeObserver(
  tableRef: RefObject<HTMLDivElement>,
): SizeObserver {
  const sizeObserver = useRef<SizeObserver>(
    new EventEmitter<SizeObserverEvents>(),
  );

  useEffect(() => {
    if (tableRef.current === null) {
      return;
    }

    function handle() {
      sizeObserver.current.emit("resize");
    }

    const observer = new window.ResizeObserver(handle);
    observer.observe(tableRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return sizeObserver.current;
}
