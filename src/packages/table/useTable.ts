import type { ReactElement, RefObject, Ref } from "react";
import { useRef, useImperativeHandle, useMemo } from "react";
import useMount from "@/hooks/useMount";

import type {
  TableProps,
  TableRef,
  ColumnProps,
  PlainObject,
  ColumnMeta,
} from "./table";
import { useColumns } from "./useColumns";
import { useSorter, type Sorter } from "./useSorter";
import { useDatasource, type Datasource } from "./useDatasource";
import { useMeasure, type Measure } from "./useMeasure";
import { useScroller, type Scroller } from "./useScroller";

interface Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  ref: Ref<TableRef<R, P>>;
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
  data: R[];
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  datasource: Datasource<R, P>;
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
    rowKey = (record: R) => record.key,
    separator = "stripe",
    height,
    params,
    data,
    sortMode,
    manual,
    onSortChange,
    onLoad,
  }: TableProps<R, P>,
  option: Option<R, P>,
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

  const column = useColumns<R>(option.columnElements);
  const datasource = useDatasource<R, P>({
    data,
    params,
    leafColumns: column.leafColumns,
    onLoad,
  });
  const sorter = useSorter<R, P>({
    datasource,
    sortMode,
    leafColumnMap: column.leafColumnMap,
    sortsController: column.sortsController,
    onSortChange,
  });
  const sortedTableData = useMemo(() => {
    if (datasource.data.length <= 0) {
      return datasource.data;
    }
    return sorter.operator.sort(datasource.data);
  }, [datasource.data, sorter.key]);
  const measure = useMeasure<R>({
    leafColumns: column.leafColumns,
    leafColumnMap: column.leafColumnMap,
    leftPinnedColumns: column.leftPinnedColumns,
    rightPinnedColumns: column.rightPinnedColumns,
  });
  const scroller = useScroller({ tableRef, tableHeaderRef, tableMainRef });

  useImperativeHandle(option.ref, () => {
    return {
      query: (option) => {
        return datasource.operator.query({ ...option, sort: sorter.sort });
      },
      getData: () => sortedTableData,
      setColumnVisible: column.operator.setVisible,
      setColumnsVisible: column.operator.batchSetVisible,
      setColumnPinned: column.operator.setPinned,
      setColumnsPinned: column.operator.batchSetPinned,
      setColumnSort: sorter.operator.set,
    };
  });

  useMount(() => {
    if (manual) {
      return;
    }
    datasource.operator.query({ sort: sorter.sort });
  });

  return {
    tableRef,
    tableHeaderRef,
    tableMainRef,
    getRowKey,
    data: sortedTableData,
    height: getHeight(),
    columns: column.columns,
    leafColumns: column.leafColumns,
    layerColumns: column.layerColumns,
    datasource,
    sorter,
    measure,
    scroller,
    separator: column.layerColumns.length > 1 ? "grid" : separator,
  };
}

export default useTable;
