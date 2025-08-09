import { useState, useRef } from "react";
import type { RefObject } from "react";
import useMutationObserver from "@/hooks/useMutationObserver";
import useResizeObserver from "@/hooks/useResizeObserver";
import useUpdateEffect from "@/hooks/useUpdateEffect";

import type { ColumnMeta, PlainObject } from "./table";
import type { Columns } from "./useColumns";
import type { Datasource } from "./useDatasource";
import { useReady } from "./useReady";

interface PinnedWidth {
  head: number;
  body: number;
  isLatest?: boolean;
}

export interface Measure<R extends PlainObject = PlainObject> {
  measureRef: RefObject<HTMLTableRowElement>;
  columnWidthMap: Record<string, number>;
  totalColumnWidth: number;
  columnPinnedWidthMap: Record<string, PinnedWidth>;
  pinnedSeparator: boolean;
  getColumnWidth: (column: ColumnMeta<R>) => number | undefined;
}

interface Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  tableRef: RefObject<HTMLDivElement>;
  datasource: Datasource<R, P>;
  columns: Columns<R>;
}
export function useMeasure<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({ tableRef, datasource, columns }: Option<R, P>): Measure<R> {
  const mutationOption = useRef<MutationObserverInit>({ childList: true });
  const measureRef = useRef<HTMLTableRowElement>(null);
  const [totalColumnWidth, setTotalColumnWidth] = useState<number>(0);
  const [columnWidthKey, setColumnWidthKey] = useState("");
  const [columnWidthMap, setColumnWidthMap] = useState<Record<string, number>>(
    {},
  );
  const [columnPinnedWidthMap, setColumnPinnedWidthMap] = useState<
    Record<string, PinnedWidth>
  >({});
  const [pinnedSeparator, setPinnedSeparator] = useState(true);

  function getFirstVisibleColumn() {
    return columns.leafColumns.find((column) => column.visible);
  }

  function getLatestVisibleColumn() {
    let column: ColumnMeta<R> | undefined;
    for (let i = columns.leafColumns.length - 1; i >= 0; i--) {
      if (columns.leafColumns[i].visible) {
        column = columns.leafColumns[i];
        break;
      }
    }

    return column;
  }

  function collectColumnWidth() {
    if (!tableRef.current || !measureRef.current) {
      return;
    }

    let currentTotalColumnWidth = 0;
    const widthMap: Record<string, number> = {};
    const cells = Array.prototype.slice.call(
      measureRef.current.querySelectorAll("td"),
    );

    for (const cell of cells) {
      let width = cell.offsetWidth;
      const name = cell.getAttribute("data-name");
      const column = columns.leafColumnMap[name];

      if (column.minWidth !== undefined) {
        width = Math.max(column.minWidth, width);
      }

      if (column.maxWidth !== undefined) {
        width = Math.min(column.maxWidth, width);
      }

      widthMap[name] = width;

      currentTotalColumnWidth += width;
    }

    const key = JSON.stringify(widthMap);
    if (key === columnWidthKey) {
      return;
    }

    setColumnWidthKey(key);
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
        const currentColumn = columns.leafColumns[index];

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

    const firstVisibleColumn = getFirstVisibleColumn();
    let preColumnIndex: number | undefined;
    let showPinnedSeparator = true;
    for (let i = 0; i < columns.leftPinnedColumns.length; i++) {
      const column = columns.leftPinnedColumns[i];
      if (!column.visible) {
        continue;
      }

      if (preColumnIndex === undefined) {
        showPinnedSeparator =
          showPinnedSeparator && column.name === firstVisibleColumn?.name;
      } else if (column.index !== preColumnIndex + 1) {
        showPinnedSeparator = false;
      }
      preColumnIndex = column.index;

      nextColumnPinnedWidthMap[column.name] = {
        head: nextHeadPinnedWidth,
        body: nextBodyPinnedWidth,
        isLatest: i === columns.leftPinnedColumns.length - 1,
      };
      collectParentColumnPinnedWidth(column, nextHeadPinnedWidth);
      if (column.colSpan !== 0) {
        nextHeadPinnedWidth += getColumnShowWidth(column);
      }
      nextBodyPinnedWidth += getColumnWidth(column);
    }

    const latestVisibleColumn = getLatestVisibleColumn();
    nextHeadPinnedWidth = 0;
    nextBodyPinnedWidth = 0;
    preColumnIndex = undefined;
    for (let i = columns.rightPinnedColumns.length - 1; i >= 0; i--) {
      const column = columns.rightPinnedColumns[i];
      if (!column.visible) {
        continue;
      }

      if (preColumnIndex === undefined) {
        showPinnedSeparator =
          showPinnedSeparator && column.name === latestVisibleColumn?.name;
      } else if (column.index !== preColumnIndex - 1) {
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
    collectColumnWidth();
  }

  const ready = useReady<R, P>(() => {
    collectColumnWidth();
  }, datasource);

  useResizeObserver<HTMLTableRowElement>(measureRef, resize, 50, {
    before() {
      if (!ready) {
        return false;
      }
      return true;
    },
  });
  useMutationObserver<HTMLTableRowElement>(
    measureRef,
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

  useUpdateEffect(() => {
    if (!ready) {
      return;
    }
    collectColumnPinnedWidth(columnWidthMap);
  }, [columns.pinnedKey]);

  return {
    measureRef,
    columnWidthMap,
    columnPinnedWidthMap,
    totalColumnWidth,
    pinnedSeparator,
    getColumnWidth,
  };
}
