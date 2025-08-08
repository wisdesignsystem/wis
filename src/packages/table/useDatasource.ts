import { useState, useRef } from "react";

import type {
  TableProps,
  TableRequest,
  PlainObject,
  ColumnMeta,
  TableResponse,
  Sort,
} from "./table";

type Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> = Pick<TableProps<R, P>, "data" | "params" | "onLoad"> & {
  leafColumns: ColumnMeta<R>[];
};

interface Operator<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  query: (option?: { params?: P; sort?: Sort | Sort[] }) => Promise<
    TableResponse<R>
  >;
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
  params,
  onLoad = () => {},
}: Option<R, P>): Datasource<R, P> {
  const [datasource, setDatasource] = useState<R[]>([]);
  const storeParams = useRef<P>();
  const isRemote = typeof data === "function";
  const tableData = isRemote ? datasource : data;

  const query: Operator<R, P>["query"] = async (option) => {
    if (!isRemote) {
      return { data };
    }

    const requestOption: TableRequest<R, P> = {
      columns: leafColumns,
    };

    if (option?.sort !== undefined) {
      requestOption.sort = option.sort;
    }

    if (params !== undefined) {
      requestOption.params = params;
    }

    if (storeParams.current) {
      requestOption.params = {
        ...requestOption.params,
        ...storeParams.current,
      };
    }

    if (option?.params !== undefined) {
      requestOption.params = {
        ...requestOption.params,
        ...option.params,
      };
    }

    const res = await data(requestOption);

    if (option?.params !== undefined) {
      storeParams.current = option.params;
    }

    setDatasource(res.data);
    onLoad(res);

    return res;
  };

  return { data: tableData, operator: { query } };
}
