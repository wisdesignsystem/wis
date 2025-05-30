import type { ColumnProps, PlainObject } from "../table";

function Column<R extends PlainObject = PlainObject>(_props: ColumnProps<R>) {
  return null;
}

Column.displayName = "Column";

export default Column;
