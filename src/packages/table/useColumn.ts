import type { ReactElement } from "react";

import type { ColumnProps, PlainObject } from "./table";

function useColumn<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
) {
  // TODO resolve columnElements
}

export default useColumn;
