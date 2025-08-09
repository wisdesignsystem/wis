import { useState, useEffect } from "react";

import type { Datasource } from "./useDatasource";
import type { PlainObject } from "./table";

export function useReady<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(callback: () => void, datasource: Datasource<R, P>) {
  const [ready, setReady] = useState(false);

  // remote datasource
  if (datasource.isRemote && datasource.ready && !ready) {
    callback();
    setReady(true);
  }

  // static datasource
  useEffect(() => {
    if (!datasource.isRemote && datasource.ready && !ready) {
      callback();
      setReady(true);
    }
  }, [datasource.ready]);

  return ready;
}
