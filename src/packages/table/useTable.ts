import type { ReactElement, RefObject } from "react";
import { useRef } from "react";

import type { TableProps, ColumnProps, PlainObject, ColumnMeta } from "./table";
import { useColumns } from "./useColumns";
import { useSorter, type Sorter } from "./useSorter";
import { useDatasource, type Datasource } from "./useDatasource";
import { useMeasure, type Measure } from "./useMeasure";
import { useScroller, type Scroller } from "./useScroller";

interface Option<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
interface Result<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  tableRef: RefObject<HTMLDivElement>;
  tableHeaderRef: RefObject<HTMLDivElement>;
  tableMainRef: RefObject<HTMLDivElement>;
  height: string;
  getRowKey: (record: R) => string;
  datasource: Datasource<R, P>;
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  sorter: Sorter<R>;
  measure: Measure<R>;
  scroller: Scroller;
  separator: "border" | "stripe" | "grid";
}
function useTable<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(
  {
    rowKey = (row: R) => row.key,
    separator = "stripe",
    height,
    data,
    sortMode,
    onSortChange,
  }: TableProps<R, P>,
  option: Option<R>,
): Result<R, P> {
  const tableRef = useRef<HTMLDivElement>(null);
  const tableHeaderRef = useRef<HTMLDivElement>(null);
  const tableMainRef = useRef<HTMLDivElement>(null);

  function getRowKey(record: R): string {
    if (typeof rowKey === "string") {
      return record[rowKey];
    }

    return rowKey(record);
  }

  function getHeight() {
    if (height === "auto") {
      return "100%";
    }

    if (typeof height === "number") {
      return `${height}px`;
    }

    return "auto";
  }

  const {
    columns,
    columnMap,
    leafColumns,
    leafColumnMap,
    layerColumns,
    sortsController,
    leftPinnedColumns,
    rightPinnedColumns,
  } = useColumns<R>(option.columnElements);
  const sorter = useSorter<R>({
    sortMode,
    columnMap,
    sortsController,
    onSortChange,
  });
  const datasource = useDatasource<R, P>({
    data,
    leafColumns,
    sorter,
  });
  const measure = useMeasure<R>({
    leafColumns,
    leafColumnMap,
    leftPinnedColumns,
    rightPinnedColumns,
  });
  const scroller = useScroller({ tableRef, tableHeaderRef, tableMainRef });

  return {
    tableRef,
    tableHeaderRef,
    tableMainRef,
    getRowKey,
    height: getHeight(),
    columns,
    leafColumns,
    layerColumns,
    datasource,
    sorter,
    measure,
    scroller,
    separator: layerColumns.length > 1 ? "grid" : separator,
  };
}

export default useTable;
