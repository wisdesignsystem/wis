import type { ReactElement, RefObject, Ref } from "react";
import { useRef, useImperativeHandle, useMemo } from "react";
import useMount from "@/hooks/useMount";

import type { TableProps, TableRef, ColumnProps, PlainObject } from "./table";
import { useColumns, type Columns } from "./useColumns";
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
  columns: Columns<R>;
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

  const columns = useColumns<R>(option.columnElements);
  const datasource = useDatasource<R, P>({
    data,
    params,
    columns,
    onLoad,
  });
  const scroller = useScroller<R, P>({
    tableRef,
    tableHeaderRef,
    tableMainRef,
    datasource,
  });
  const sorter = useSorter<R, P>({
    datasource,
    sortMode,
    columns,
    onSortChange,
  });
  const sortedTableData = useMemo(() => {
    if (datasource.data.length <= 0) {
      return datasource.data;
    }
    return sorter.operator.sort(datasource.data);
  }, [datasource.data, sorter.key]);
  const measure = useMeasure<R, P>({
    tableRef,
    datasource,
    columns,
  });

  useImperativeHandle(option.ref, () => {
    return {
      query: (option) => {
        return datasource.operator.query({ ...option, sort: sorter.sort });
      },
      getData: () => sortedTableData,
      setColumnVisible: columns.operator.setVisible,
      setColumnsVisible: columns.operator.batchSetVisible,
      setColumnPinned: columns.operator.setPinned,
      setColumnsPinned: columns.operator.batchSetPinned,
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
    separator: columns.layerColumns.length > 1 ? "grid" : separator,
    columns,
    datasource,
    sorter,
    measure,
    scroller,
  };
}

export default useTable;
