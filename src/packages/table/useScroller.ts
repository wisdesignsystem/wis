import { useRef } from "react";
import type { RefObject, UIEventHandler } from "react";
import EventEmitter from "@/utils/EventEmitter";

type ScrollerEvents = {
  scroll: (x: number, y: number) => void;
};

export interface Scroller {
  onScroll: UIEventHandler<HTMLDivElement>;
  eventEmitter: EventEmitter<ScrollerEvents>;
}

interface Option {
  tableMainRef: RefObject<HTMLDivElement>;
  tableHeaderRef: RefObject<HTMLDivElement>;
}

export function useScroller({
  tableHeaderRef,
  tableMainRef,
}: Option): Scroller {
  const eventEmitter = useRef<EventEmitter<ScrollerEvents>>(
    new EventEmitter<ScrollerEvents>(),
  );

  const handleScroll: Scroller["onScroll"] = (event) => {
    const target = event.target as HTMLDivElement;
    eventEmitter.current.emit("scroll", target.scrollLeft, target.scrollTop);

    if (tableHeaderRef.current !== null && tableHeaderRef.current !== target) {
      tableHeaderRef.current.scrollLeft = target.scrollLeft;
    }

    if (tableMainRef.current !== null && tableMainRef.current !== target) {
      tableMainRef.current.scrollLeft = target.scrollLeft;
    }
  };

  return {
    onScroll: handleScroll,
    eventEmitter: eventEmitter.current,
  };
}
