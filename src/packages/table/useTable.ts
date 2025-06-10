import type { ReactElement } from "react";

import type { TableProps, ColumnProps, PlainObject, ColumnMeta } from "./table";
import useColumns from "./useColumns";
import useSorter from "./useSorter";

interface Option<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
interface Result<R extends PlainObject = PlainObject> {
  getRowKey: (record: R) => string;
  data: R[];
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
}
function useTable<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(
  { rowKey = (row: R) => row.key, data = [], sortMode }: TableProps<R, P>,
  option: Option<R>,
): Result<R> {
  const { columns, leafColumns, layerColumns, sorters } = useColumns(
    option.columnElements,
  );
  const sorter = useSorter({
    sortMode,
    sorters,
  });

  function getRowKey(record: R) {
    if (typeof rowKey === "string") {
      return record[rowKey];
    }

    return rowKey(record);
  }

  return {
    getRowKey,
    columns,
    leafColumns,
    layerColumns,
    data: Array.isArray(data) ? data : [],
  };
}

export default useTable;
