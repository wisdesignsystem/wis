import { useRef } from "react";
import type { RefObject, UIEventHandler } from "react";
import EventEmitter from "@/utils/EventEmitter";
import useScrollbar from "@/hooks/useScrollbar";

import type { PlainObject } from "./table";
import useTableResizeObserver from "./useTableResizeObserver";
import type { Datasource } from "./useDatasource";
import { useReady } from "./useReady";

type ScrollerEvents = {
  scroll: (x: number, y: number) => void;
};

export interface Scroller {
  x: number;
  y: number;
  onScroll: UIEventHandler<HTMLDivElement>;
  eventEmitter: EventEmitter<ScrollerEvents>;
}

interface Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  tableRef: RefObject<HTMLDivElement>;
  tableMainRef: RefObject<HTMLDivElement>;
  tableHeaderRef: RefObject<HTMLDivElement>;
  datasource: Datasource<R, P>;
}

export function useScroller<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({
  tableRef,
  tableMainRef,
  tableHeaderRef,
  datasource,
}: Option<R, P>): Scroller {
  const scrollbar = useScrollbar();
  const eventEmitter = useRef<EventEmitter<ScrollerEvents>>(
    new EventEmitter<ScrollerEvents>(),
  );

  function flagScrollable() {
    if (!tableRef.current || !tableMainRef.current) {
      return;
    }

    const table = tableMainRef.current.querySelector("table");

    if (!table) {
      return;
    }

    const isScrollX = tableMainRef.current.offsetWidth < table.offsetWidth;
    const isScrollY = tableMainRef.current.offsetHeight < table.offsetHeight;

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
  }

  function flagScrollXPosition(target: HTMLDivElement) {
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

    flagScrollXPosition(target);
  };

  function resize() {
    if (!tableMainRef.current) {
      return;
    }

    flagScrollable();
    flagScrollXPosition(tableMainRef.current);
  }

  useReady<R, P>(() => {
    if (!tableMainRef.current) {
      return;
    }
    flagScrollable();
    flagScrollXPosition(tableMainRef.current);
  }, datasource);

  useTableResizeObserver<HTMLDivElement>(tableMainRef, resize, 50, {
    before() {
      if (!datasource.ready) {
        return false;
      }

      return true;
    },
  });

  return {
    x: scrollbar.x,
    y: scrollbar.y,
    onScroll: handleScroll,
    eventEmitter: eventEmitter.current,
  };
}
