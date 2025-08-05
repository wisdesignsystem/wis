import { useState, useRef, useEffect } from "react";
import type { RefObject } from "react";
import useMutationObserver from "@/hooks/useMutationObserver";
import useResizeObserver from "@/hooks/useResizeObserver";
import useDidMount from "@/hooks/useMount";
import nextTick from "@/utils/nextTick";

import type { ColumnMeta, PlainObject } from "./table";

interface PinnedWidth {
  head: number;
  body: number;
  isLatest?: boolean;
}

export interface Measure<R extends PlainObject = PlainObject> {
  ready: boolean;
  measureRef: RefObject<HTMLTableRowElement>;
  columnWidthMap: Record<string, number>;
  totalColumnWidth: number;
  columnPinnedWidthMap: Record<string, PinnedWidth>;
  pinnedSeparator: boolean;
  getColumnWidth: (column: ColumnMeta<R>) => number | undefined;
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
  const mutationOption = useRef<MutationObserverInit>({ childList: true });
  const [ready, setReady] = useState(false);
  const resizing = useRef(false);
  const measureRef = useRef<HTMLTableRowElement>(null);
  const [totalColumnWidth, setTotalColumnWidth] = useState<number>(0);
  const [columnWidthMap, setColumnWidthMap] = useState<Record<string, number>>(
    {},
  );
  const [columnPinnedWidthMap, setColumnPinnedWidthMap] = useState<
    Record<string, PinnedWidth>
  >({});
  const [pinnedSeparator, setPinnedSeparator] = useState(true);

  function collectColumnWidth() {
    if (!measureRef.current) {
      return;
    }

    resizing.current = true;

    let currentTotalColumnWidth = 0;
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
        width = Math.min(column.maxWidth, width);
      }

      widthMap[name] = width;

      currentTotalColumnWidth += width;
    }

    // none size changed, resizing end.
    if (totalColumnWidth === currentTotalColumnWidth) {
      resizing.current = false;
    }

    setColumnWidthMap(widthMap);
    setTotalColumnWidth(currentTotalColumnWidth);
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

      if (nextColumnPinnedWidthMap[column.parent.name] === undefined) {
        nextColumnPinnedWidthMap[column.parent.name] = {
          head: pinnedWidth,
          body: pinnedWidth,
          isLatest: nextColumnPinnedWidthMap[column.name].isLatest,
        };
      } else {
        nextColumnPinnedWidthMap[column.parent.name].isLatest =
          nextColumnPinnedWidthMap[column.name].isLatest ||
          nextColumnPinnedWidthMap[column.parent.name].isLatest;
      }

      collectParentColumnPinnedWidth(column.parent, pinnedWidth);
    }

    let nextHeadPinnedWidth = 0;
    let nextBodyPinnedWidth = 0;

    let preColumnIndex: number | undefined;
    let showPinnedSeparator = true;
    for (let i = 0; i < leftPinnedColumns.length; i++) {
      const column = leftPinnedColumns[i];
      if (!column.visible) {
        continue;
      }

      if (preColumnIndex !== undefined && column.index !== preColumnIndex + 1) {
        showPinnedSeparator = false;
      }
      preColumnIndex = column.index;

      nextColumnPinnedWidthMap[column.name] = {
        head: nextHeadPinnedWidth,
        body: nextBodyPinnedWidth,
        isLatest: i === leftPinnedColumns.length - 1,
      };
      collectParentColumnPinnedWidth(column, nextHeadPinnedWidth);
      if (column.colSpan !== 0) {
        nextHeadPinnedWidth += getColumnShowWidth(column);
      }
      nextBodyPinnedWidth += getColumnWidth(column);
    }

    nextHeadPinnedWidth = 0;
    nextBodyPinnedWidth = 0;
    preColumnIndex = undefined;
    for (let i = rightPinnedColumns.length - 1; i >= 0; i--) {
      const column = rightPinnedColumns[i];
      if (!column.visible) {
        continue;
      }

      if (preColumnIndex !== undefined && column.index !== preColumnIndex - 1) {
        showPinnedSeparator = false;
      }
      preColumnIndex = column.index;

      nextColumnPinnedWidthMap[column.name] = {
        head: nextHeadPinnedWidth,
        body: nextBodyPinnedWidth,
        isLatest: i === 0,
      };
      collectParentColumnPinnedWidth(column, nextHeadPinnedWidth);
      if (column.colSpan !== 0) {
        nextHeadPinnedWidth += getColumnShowWidth(column);
      }
      nextBodyPinnedWidth += getColumnWidth(column);
    }

    setColumnPinnedWidthMap(nextColumnPinnedWidthMap);
    setPinnedSeparator(showPinnedSeparator);
  }

  function resize() {
    if (resizing.current) {
      return;
    }

    collectColumnWidth();
  }

  useDidMount(() => {
    collectColumnWidth();
    if (!ready) {
      setReady(true);
    }
  });

  useEffect(() => {
    nextTick(() => {
      resizing.current = false;
    }, true);
  }, [totalColumnWidth]);

  useResizeObserver<HTMLTableRowElement>(measureRef.current, resize, 50, {
    before: () => {
      if (resizing.current) {
        return false;
      }

      return true;
    },
  });
  useMutationObserver<HTMLTableRowElement>(
    measureRef.current,
    resize,
    50,
    mutationOption.current,
  );

  const getColumnWidth: Measure<R>["getColumnWidth"] = (column) => {
    if (column.width !== undefined) {
      return column.width;
    }

    if (column.minWidth !== undefined || column.maxWidth !== undefined) {
      return columnWidthMap[column.name];
    }
  };

  return {
    ready,
    measureRef,
    columnWidthMap,
    columnPinnedWidthMap,
    totalColumnWidth,
    pinnedSeparator,
    getColumnWidth,
  };
}
