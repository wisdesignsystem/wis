import { useLayoutEffect, useRef } from "react";
import type { RefObject, UIEventHandler } from "react";
import debounce from "lodash.debounce";
import EventEmitter from "@/utils/EventEmitter";
import useScrollbar from "@/hooks/useScrollbar";

type ScrollerEvents = {
  scroll: (x: number, y: number) => void;
};

export interface Scroller {
  x?: number;
  y?: number;
  onScroll: UIEventHandler<HTMLDivElement>;
  eventEmitter: EventEmitter<ScrollerEvents>;
}

interface Option {
  tableRef: RefObject<HTMLDivElement>;
  tableMainRef: RefObject<HTMLDivElement>;
  tableHeaderRef: RefObject<HTMLDivElement>;
}

export function useScroller({
  tableRef,
  tableMainRef,
  tableHeaderRef,
}: Option): Scroller {
  const scrollbar = useScrollbar();
  const eventEmitter = useRef<EventEmitter<ScrollerEvents>>(
    new EventEmitter<ScrollerEvents>(),
  );

  function checkScrollXPosition(target: HTMLDivElement) {
    if (!tableRef.current) {
      return;
    }

    const isScrollStartX = target.scrollLeft <= 0;
    const isScrollEndX =
      target.scrollLeft >= target.scrollWidth - target.clientWidth;

    if (isScrollStartX) {
      tableRef.current.setAttribute("data-scroll-x-start", "");
    } else {
      tableRef.current.removeAttribute("data-scroll-x-start");
    }

    if (isScrollEndX) {
      tableRef.current.setAttribute("data-scroll-x-end", "");
    } else {
      tableRef.current.removeAttribute("data-scroll-x-end");
    }
  }

  const handleScroll: Scroller["onScroll"] = (event) => {
    const target = event.target as HTMLDivElement;
    eventEmitter.current.emit("scroll", target.scrollLeft, target.scrollTop);

    if (tableHeaderRef.current && tableHeaderRef.current !== target) {
      tableHeaderRef.current.scrollLeft = target.scrollLeft;
    }

    if (tableMainRef.current && tableMainRef.current !== target) {
      tableMainRef.current.scrollLeft = target.scrollLeft;
    }

    checkScrollXPosition(target);
  };

  useLayoutEffect(() => {
    if (!tableMainRef.current) {
      return;
    }

    const table = tableMainRef.current.querySelector("table");
    if (table === null) {
      return;
    }

    const resize = debounce(() => {
      if (!tableRef.current || !tableMainRef.current || table === null) {
        return;
      }

      const tableMainRect = tableMainRef.current.getBoundingClientRect();
      const tableRect = table.getBoundingClientRect();

      const isScrollX = tableMainRect.width < tableRect.width;
      const isScrollY = tableMainRect.height < tableRect.height;

      if (isScrollX) {
        tableRef.current.setAttribute("data-scroll-x", "");
      } else {
        tableRef.current.removeAttribute("data-scroll-x");
      }

      if (isScrollY) {
        tableRef.current.setAttribute("data-scroll-y", "");
      } else {
        tableRef.current.removeAttribute("data-scroll-y");
      }

      checkScrollXPosition(tableMainRef.current);
    }, 50);

    resize();

    const resizeObserver = new window.ResizeObserver(resize);
    resizeObserver.observe(tableMainRef.current);
    resizeObserver.observe(table);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return {
    x: scrollbar.x,
    y: scrollbar.y,
    onScroll: handleScroll,
    eventEmitter: eventEmitter.current,
  };
}
