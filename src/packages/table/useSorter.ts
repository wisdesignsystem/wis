import { useState } from "react";

import type {
  ColumnMeta,
  Sort,
  SorterStore,
  PlainObject,
  TableProps,
  SortType,
} from "./table";

type Option<R extends PlainObject = PlainObject> =
  | Pick<TableProps<R>, "sortMode">
  | { sorters: SorterStore<R>[] };

interface Result<R extends PlainObject = PlainObject> {
  get: () => Sort[];
  set: (column: ColumnMeta<R>, sortType: SortType) => void;
  reset: () => void;
  clear: () => void;
  sort: () => R[];
}

function useSorter<R extends PlainObject = PlainObject>(
  option: Option<R>,
): Result<R> {
  const [sorters, setSorters] = useState<SorterStore<R>[]>([]);

  function get(): Sort[] {
    return [];
  }

  function set(column: ColumnMeta<R>, sortType: SortType) {}

  function reset() {}

  function clear() {}

  function sort(): R[] {
    return [];
  }

  return { get, set, reset, clear, sort };
}

export default useSorter;
