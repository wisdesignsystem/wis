import { useEffect, useState, useRef } from "react";
import type { RefObject } from "react";

import type { ColumnMeta, PlainObject } from "./table";

export interface Measure {
  measureRef: RefObject<HTMLTableRowElement>;
  columnWidthMap: Record<string, number>;
  totalColumnWidth: number;
}

interface Option<R extends PlainObject = PlainObject> {
  leafColumnMap: Record<string, ColumnMeta<R>>;
  leftPinnedColumns: ColumnMeta<R>[];
  rightPinnedColumns: ColumnMeta<R>[];
}
export function useMeasure<R extends PlainObject = PlainObject>({
  leafColumnMap,
  leftPinnedColumns,
  rightPinnedColumns,
}: Option<R>) {
  const isMounted = useRef<boolean>(false);
  const measureRef = useRef<HTMLTableRowElement>(null);
  const [columnWidthMap, setColumnWidthMap] = useState<Record<string, number>>(
    {},
  );
  const [totalColumnWidth, setTotalColumnWidth] = useState<number>(0);

  function collectColumnWidth() {
    if (!measureRef.current) {
      return;
    }

    let totalColumnWidth = 0;
    const widthMap: Record<string, number> = {};
    const cells = Array.prototype.slice.call(
      measureRef.current.querySelectorAll("td"),
    );
    for (const cell of cells) {
      let width = cell.offsetWidth;
      const name = cell.getAttribute("data-name");
      const column = leafColumnMap[name];

      if (column.minWidth !== undefined) {
        width = Math.max(column.minWidth, width);
      }

      if (column.maxWidth !== undefined) {
        width = Math.min(column.maxWidth);
      }

      widthMap[name] = width;

      totalColumnWidth += width;
    }

    setColumnWidthMap(widthMap);
    setTotalColumnWidth(totalColumnWidth);
  }

  useEffect(() => {
    if (!measureRef.current) {
      return;
    }

    function resize() {
      collectColumnWidth();
    }

    const observer = new window.ResizeObserver(resize);
    observer.observe(measureRef.current);

    if (isMounted.current) {
      return;
    }
    isMounted.current = true;

    collectColumnWidth();

    return () => {
      observer.disconnect();
    };
  }, []);

  return { measureRef, columnWidthMap, totalColumnWidth };
}
