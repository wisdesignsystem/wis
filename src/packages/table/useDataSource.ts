import { useState } from "react";

import type {
  PlainObject,
  TableAjax,
  TableRequest,
  TableResponse,
} from "./table";

function useDataSource<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>({ data = [] }: { data?: R[] | TableAjax<R, P> }) {
  const [dataSource, setDataSource] = useState<R[]>([]);

  async function query(option: TableRequest<R, P>) {
    if (typeof data !== "function") {
      return;
    }

    await data(option);
  }

  return [typeof data === "function" ? dataSource : data, query];
}

export default useDataSource;
