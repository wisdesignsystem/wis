import type { ReactElement } from "react";

import type { TableProps, ColumnProps, PlainObject } from "./table";

interface UseTableOption<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
function useTable<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(props: TableProps<R, P>, option: UseTableOption<R>) {}

export default useTable;
