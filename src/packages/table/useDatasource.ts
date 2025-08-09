import { useState, useRef } from "react";

import type {
  TableProps,
  TableRequest,
  PlainObject,
  TableResponse,
  Sort,
} from "./table";
import type { Columns } from "./useColumns";

type Option<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> = Pick<TableProps<R, P>, "data" | "params" | "onLoad"> & {
  columns: Columns<R>;
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
  ready: boolean;
  isRemote: boolean;
  data: R[];
  operator: Operator<R, P>;
}
export function useDatasource<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({
  data = [],
  columns,
  params,
  onLoad = () => {},
}: Option<R, P>): Datasource<R, P> {
  const [datasource, setDatasource] = useState<R[]>([]);
  const storeParams = useRef<P>();
  const isRemote = typeof data === "function";
  const [ready, setReady] = useState(!isRemote);

  const tableData = isRemote ? datasource : data;

  const query: Operator<R, P>["query"] = async (option) => {
    if (!isRemote) {
      return { data };
    }

    const requestOption: TableRequest<R, P> = {
      columns: columns.leafColumns,
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

    const res = await data(requestOption).catch((e) => {
      setReady(true);
      throw e;
    });

    if (option?.params !== undefined) {
      storeParams.current = option.params;
    }

    setDatasource(res.data);
    setReady(true);
    onLoad(res);

    return res;
  };

  return { ready, isRemote, data: tableData, operator: { query } };
}
