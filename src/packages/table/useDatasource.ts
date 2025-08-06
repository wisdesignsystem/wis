import { useState } from "react";
import useMount from "@/hooks/useMount";

import type {
  TableProps,
  TableRequest,
  PlainObject,
  Sorter,
  ColumnMeta,
  TableRef,
} from "./table";

type Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> = Pick<TableProps<R, P>, "data" | "params" | "manual" | "onLoad"> & {
  leafColumns: ColumnMeta<R>[];
  sorter: Sorter<R>;
};

interface Operator<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  getData: TableRef<R, P>["getData"];
  query: TableRef<R, P>["query"];
}

export interface Datasource<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  data: R[];
  operator: Operator<R, P>;
}
export function useDatasource<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({
  data = [],
  leafColumns,
  sorter,
  params,
  manual = false,
  onLoad = () => {},
}: Option<R, P>): Datasource<R, P> {
  const [datasource, setDatasource] = useState<R[]>([]);

  const isRemote = typeof data === "function";

  const query: Operator<R, P>["query"] = async (option) => {
    if (!isRemote) {
      return { data };
    }

    const requestOption: TableRequest<R, P> = {
      columns: leafColumns,
    };

    if (sorter.sort !== undefined) {
      requestOption.sort = sorter.sort;
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
      sorter.operator.set(res.sort);
    }

    onLoad(res);

    return res;
  };

  const getData: Operator<R, P>["getData"] = () => {
    return sorter.operator.sort(isRemote ? datasource : data);
  };

  useMount(() => {
    if (manual) {
      return;
    }
    query();
  });

  return { data: getData(), operator: { query, getData } };
}
