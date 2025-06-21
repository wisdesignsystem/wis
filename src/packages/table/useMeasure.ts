import type { RefObject } from "react";
import { useRef } from "react";

import type { ColumnMeta, PlainObject } from "./table";

interface Operator<R extends PlainObject = PlainObject> {
  set: (column: ColumnMeta<R>, width: number) => void;
}

export interface Measure<R extends PlainObject = PlainObject> {
  measureMap: Record<string, number>;
  operator: Operator<R>;
}
export function useMeasure<R extends PlainObject = PlainObject>(
  tableRef: RefObject<HTMLDivElement>,
): Measure<R> {
  const measureTotalWidth = useRef<number>(0);
  const measureMap = useRef<Record<string, number>>({});

  function setHeaderColumn(column: ColumnMeta<R>, width: number) {
    if (tableRef.current === null) {
      return;
    }

    const headerTableElement = tableRef.current.querySelector<HTMLTableElement>(
      'table[data-type="header-table"]',
    );
    if (headerTableElement === null) {
      return;
    }

    headerTableElement.style.width = `${measureTotalWidth.current}px`;
    const colElement = headerTableElement.querySelector<HTMLTableColElement>(
      `colgroup > col[data-name="${column.name}"]`,
    );
    if (colElement !== null) {
      colElement.style.width = `${width}px`;
    }
  }

  function setMainColumn(column: ColumnMeta<R>, width: number) {
    if (tableRef.current === null) {
      return;
    }

    if (column.ignoreWidth) {
      return;
    }

    if (column.minWidth === undefined && column.maxWidth === undefined) {
      return;
    }

    const mainTableElement = tableRef.current.querySelector<HTMLTableElement>(
      'table[data-type="main-table"]',
    );
    if (mainTableElement === null) {
      return;
    }

    const colElement = mainTableElement.querySelector<HTMLTableColElement>(
      `colgroup > col[data-name="${column.name}"]`,
    );
    if (colElement === null) {
      return;
    }

    colElement.style.width = `${width}px`;
  }

  const set: Operator<R>["set"] = (column: ColumnMeta<R>, width: number) => {
    let columnWidth = width;
    if (column.width === undefined) {
      columnWidth = Math.min(
        columnWidth,
        column.maxWidth ?? Number.MAX_SAFE_INTEGER,
      );
      columnWidth = Math.max(
        columnWidth,
        column.minWidth ?? Number.MIN_SAFE_INTEGER,
      );
    }

    const oldWidth = measureMap.current[column.name];
    measureMap.current[column.name] = columnWidth;
    if (oldWidth === undefined) {
      measureTotalWidth.current = measureTotalWidth.current + columnWidth;
    } else {
      const diffWidth = columnWidth - oldWidth;
      measureTotalWidth.current = measureTotalWidth.current + diffWidth;
    }

    setHeaderColumn(column, columnWidth);
    setMainColumn(column, columnWidth);
  };

  return { measureMap: measureMap.current, operator: { set } };
}
