import { useState, useEffect } from "react";

import type {
  TableProps,
  TableRequest,
  PlainObject,
  SortState,
  Sort,
  ColumnMeta,
  QueryOption,
} from "./table";

type Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> = Pick<TableProps<R, P>, "data" | "params" | "autoQuery" | "onLoad"> & {
  leafColumns: ColumnMeta<R>[];
  sort?: Sort | Sort[];
  onSortChange?: (sort: SortState | SortState[]) => void;
};

export function useDatasource<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({
  data = [],
  leafColumns,
  sort,
  params,
  autoQuery = true,
  onSortChange = () => {},
}: Option<R, P>) {
  const [datasource, setDatasource] = useState<R[]>([]);

  const isRemote = typeof data === "function";

  async function query(option?: QueryOption<P>) {
    if (!isRemote) {
      return { data };
    }

    const requestOption: TableRequest<R, P> = {
      columns: leafColumns,
    };

    if (sort !== undefined) {
      requestOption.sort = sort;
    }

    if (params !== undefined) {
      requestOption.params = params;
    }

    if (option?.params !== undefined) {
      requestOption.params = {
        ...requestOption.params,
        ...option.params,
      };
    }

    const res = await data(requestOption);

    setDatasource(res.data);

    if (res.sort !== undefined && res.sort !== null) {
      onSortChange(res.sort);
    }

    return res;
  }

  function getData() {
    return isRemote ? datasource : data;
  }

  useEffect(() => {
    if (autoQuery) {
      query();
    }
  }, []);

  return { datasource: isRemote ? datasource : data, query, getData };
}
