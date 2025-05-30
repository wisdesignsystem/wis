import type { TableProps, PlainObject } from "../table";

function Table<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
>(_props: TableProps<R, P>) {
  return null;
}

Table.displayName = "Table";

export default Table;
