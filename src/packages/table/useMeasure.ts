import { useLayoutEffect, useState, useRef } from "react";
import type { RefObject } from "react";
import debounce from "lodash.debounce";

import type { ColumnMeta, PlainObject } from "./table";

interface PinnedWidth {
  head: number;
  body: number;
}

export interface Measure<R extends PlainObject = PlainObject> {
  ready: boolean;
  measureRef: RefObject<HTMLTableRowElement>;
  columnWidthMap: Record<string, number>;
  totalColumnWidth: number;
  columnPinnedWidthMap: Record<string, PinnedWidth>;
  getPrimaryColumnWidth: (column: ColumnMeta<R>) => number | undefined;
  getSecondaryColumnWidth: (column: ColumnMeta<R>) => number | undefined;
}

interface Option<R extends PlainObject = PlainObject> {
  leafColumns: ColumnMeta<R>[];
  leafColumnMap: Record<string, ColumnMeta<R>>;
  leftPinnedColumns: ColumnMeta<R>[];
  rightPinnedColumns: ColumnMeta<R>[];
}
export function useMeasure<R extends PlainObject = PlainObject>({
  leafColumns,
  leafColumnMap,
  leftPinnedColumns,
  rightPinnedColumns,
}: Option<R>): Measure<R> {
  const isMounted = useRef(false);
  const isReady = useRef(false);
  const measureRef = useRef<HTMLTableRowElement>(null);
  const [totalColumnWidth, setTotalColumnWidth] = useState<number>(0);
  const [columnWidthMap, setColumnWidthMap] = useState<Record<string, number>>(
    {},
  );
  const [columnPinnedWidthMap, setColumnPinnedWidthMap] = useState<
    Record<string, PinnedWidth>
  >({});

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
    collectColumnPinnedWidth(widthMap);
  }

  function collectColumnPinnedWidth(widthMap: Record<string, number>) {
    const nextColumnPinnedWidthMap: Record<string, PinnedWidth> = {};

    function getColumnWidth(column: ColumnMeta<R>) {
      return column.width ?? widthMap[column.name];
    }

    function getColumnShowWidth(column: ColumnMeta<R>) {
      let width = getColumnWidth(column);
      if (column.colSpan === undefined || column.colSpan <= 1) {
        return width;
      }

      let count = column.colSpan - 1;
      let index = (column.index as number) + 1;
      while (count > 0) {
        const currentColumn = leafColumns[index];

        if (currentColumn.pinned !== undefined) {
          width += getColumnWidth(currentColumn);
        }

        index++;
        count--;
      }

      return width;
    }

    function collectParentColumnPinnedWidth(
      column: ColumnMeta<R>,
      pinnedWidth: number,
    ) {
      if (column.parent === undefined) {
        return;
      }

      nextColumnPinnedWidthMap[column.parent.name] = {
        head: pinnedWidth,
        body: pinnedWidth,
      };
      collectParentColumnPinnedWidth(column.parent, pinnedWidth);
    }

    let nextHeadPinnedWidth = 0;
    let nextBodyPinnedWidth = 0;
    for (const column of leftPinnedColumns) {
      if (!column.visible) {
        continue;
      }

      nextColumnPinnedWidthMap[column.name] = {
        head: nextHeadPinnedWidth,
        body: nextBodyPinnedWidth,
      };
      collectParentColumnPinnedWidth(column, nextHeadPinnedWidth);
      if (column.colSpan !== 0) {
        nextHeadPinnedWidth += getColumnShowWidth(column);
      }
      nextBodyPinnedWidth += getColumnWidth(column);
    }

    nextHeadPinnedWidth = 0;
    nextBodyPinnedWidth = 0;
    for (let i = rightPinnedColumns.length - 1; i >= 0; i--) {
      const column = rightPinnedColumns[i];
      if (!column.visible) {
        continue;
      }

      nextColumnPinnedWidthMap[column.name] = {
        head: nextHeadPinnedWidth,
        body: nextBodyPinnedWidth,
      };
      collectParentColumnPinnedWidth(column, nextHeadPinnedWidth);
      if (column.colSpan !== 0) {
        nextHeadPinnedWidth += getColumnShowWidth(column);
      }
      nextBodyPinnedWidth += getColumnWidth(column);
    }

    setColumnPinnedWidthMap(nextColumnPinnedWidthMap);
  }

  useLayoutEffect(() => {
    if (!measureRef.current) {
      return;
    }
    const resize = debounce(() => {
      collectColumnWidth();
      if (!isReady.current) {
        isReady.current = true;
      }
    }, 50);

    const resizeObserver = new window.ResizeObserver(resize);
    resizeObserver.observe(measureRef.current);
    const mutationObserver = new window.MutationObserver(resize);
    mutationObserver.observe(measureRef.current, { childList: true });

    if (isMounted.current) {
      return;
    }
    isMounted.current = true;

    collectColumnWidth();

    return () => {
      if (!measureRef.current) {
        return;
      }

      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const getPrimaryColumnWidth: Measure<R>["getPrimaryColumnWidth"] = (
    column,
  ) => {
    if (column.width !== undefined) {
      return column.width;
    }

    if (column.minWidth !== undefined || column.maxWidth !== undefined) {
      return columnWidthMap[column.name];
    }
  };

  const getSecondaryColumnWidth: Measure<R>["getSecondaryColumnWidth"] = (
    column,
  ) => {
    return column.width ?? columnWidthMap[column.name];
  };

  return {
    ready: isReady.current,
    measureRef,
    columnWidthMap,
    columnPinnedWidthMap,
    totalColumnWidth,
    getSecondaryColumnWidth,
    getPrimaryColumnWidth,
  };
}
