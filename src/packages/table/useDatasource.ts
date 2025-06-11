import { useState } from "react";

import type {
  PlainObject,
  TableAjax,
  TableRequest,
  SortState,
  Sort,
  ColumnMeta,
} from "./table";

interface Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  data?: R[] | TableAjax<R, P>;
  leafColumns: ColumnMeta<R>[];
  sort: undefined | Sort | Sort[];
  onSortChange: (sort: SortState | SortState[]) => void;
}
export function useDatasource<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({ data = [], leafColumns, sort, onSortChange = () => {} }: Option<R, P>) {
  const [datasource, setDatasource] = useState<R[]>([]);

  const isRemoteData = typeof data === "function";

  async function query(option: TableRequest<R, P>) {
    if (!isRemoteData) {
      return;
    }

    const { data: remoteData = [], sort: nextSort } = await data({
      columns: leafColumns,
      sort,
    });
    setDatasource(remoteData);

    if (nextSort !== undefined && nextSort !== null) {
      onSortChange(nextSort);
    }
  }

  return { datasource: isRemoteData ? datasource : data, query };
}
