import type { ReactElement } from "react";

import type { TableProps, ColumnProps, PlainObject, ColumnMeta } from "./table";
import useColumns from "./useColumns";

interface UseTableOption<R extends PlainObject = PlainObject> {
  columnElements: ReactElement<ColumnProps<R>>[];
}
function useTable<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(
  props: TableProps<R, P>,
  option: UseTableOption<R>,
): {
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
} {
  const { columns, leafColumns, layerColumns } = useColumns(
    option.columnElements,
  );

  console.log(columns);
  console.log(leafColumns);
  console.log(layerColumns);

  return { columns, leafColumns, layerColumns };
}

export default useTable;
