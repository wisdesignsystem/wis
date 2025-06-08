import { useState, useEffect } from "react";

import type { PlainObject } from "./table";

function useDataSource<R extends PlainObject = PlainObject>() {
  const [dataSource, setDataSource] = useState<R[]>([]);

  function query() {}

  return () => {};
}

export default useDataSource;
