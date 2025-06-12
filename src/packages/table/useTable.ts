import type { ReactElement } from "react";

import type {
  TableProps,
  ColumnProps,
  PlainObject,
  ColumnMeta,
  QueryOption,
  TableResponse,
} from "./table";
import { useColumns } from "./useColumns";
import { useSorter } from "./useSorter";
import type { Sorter } from "./useSorter";
import { useDatasource } from "./useDatasource";

interface Option<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
interface Result<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  getRowKey: (record: R) => string;
  getData: () => R[];
  query: (option?: QueryOption<P>) => Promise<TableResponse<R>>;
  datasource: R[];
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  sorter: Sorter<R>;
}
function useTable<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(
  { rowKey = (row: R) => row.key, data, sortMode }: TableProps<R, P>,
  option: Option<R>,
): Result<R, P> {
  function getRowKey(record: R): string {
    if (typeof rowKey === "string") {
      return record[rowKey];
    }

    return rowKey(record);
  }

  const { columns, leafColumns, layerColumns, sortsController } = useColumns<R>(
    option.columnElements,
  );
  const columnMap = leafColumns.reduce(
    (result, column) => {
      result[column.name] = column;
      return result;
    },
    {} as Record<string, ColumnMeta<R>>,
  );
  const sorter = useSorter<R>({
    sortMode,
    columnMap,
    sortsController,
  });
  const { datasource, getData, query } = useDatasource<R, P>({
    data,
    leafColumns,
    sort: sorter.sort,
    onSortChange: (sort) => {
      sorter.operator.set(sort);
    },
  });

  return {
    getRowKey,
    getData,
    query,
    columns,
    leafColumns,
    layerColumns,
    datasource: sorter.operator.sort(datasource),
    sorter,
  };
}

export default useTable;
