import type { ReactElement } from "react";

import type { TableProps, ColumnProps, PlainObject, ColumnMeta } from "./table";
import useColumns from "./useColumns";

interface UseTableOption<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
interface UseTableResult<R extends PlainObject = PlainObject> {
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
  { rowKey = (row: R) => row.key, data }: TableProps<R, P>,
  option: UseTableOption<R>,
): UseTableResult<R> {
  const { columns, leafColumns, layerColumns } = useColumns(
    option.columnElements,
  );

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
