import type { ReactElement, RefObject } from "react";
import { useRef } from "react";

import type { TableProps, ColumnProps, PlainObject, ColumnMeta } from "./table";
import { useColumns } from "./useColumns";
import { useSorter, type Sorter } from "./useSorter";
import { useDatasource, type Datasource } from "./useDatasource";
import { useMeasure, type Measure } from "./useMeasure";
import { useSizeObserver, type SizeObserver } from "./useSizeObserver";

interface Option<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
interface Result<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  tableRef: RefObject<HTMLDivElement>;
  getRowKey: (record: R) => string;
  datasource: Datasource<R, P>;
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  sorter: Sorter<R>;
  measure: Measure<R>;
  sizeObserver: SizeObserver;
}
function useTable<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(
  { rowKey = (row: R) => row.key, data, sortMode }: TableProps<R, P>,
  option: Option<R>,
): Result<R, P> {
  const tableRef = useRef<HTMLDivElement>(null);

  function getRowKey(record: R): string {
    if (typeof rowKey === "string") {
      return record[rowKey];
    }

    return rowKey(record);
  }

  const { columns, columnMap, leafColumns, layerColumns, sortsController } =
    useColumns<R>(option.columnElements);

  const sorter = useSorter<R>({
    sortMode,
    columnMap,
    sortsController,
  });

  const datasource = useDatasource<R, P>({
    data,
    leafColumns,
    sorter,
  });

  const measure = useMeasure<R>(tableRef);
  const sizeObserver = useSizeObserver(tableRef);

  return {
    tableRef,
    getRowKey,
    columns,
    leafColumns,
    layerColumns,
    datasource,
    sorter,
    measure,
    sizeObserver,
  };
}

export default useTable;
