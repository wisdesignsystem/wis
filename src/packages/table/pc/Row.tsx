import type { RowProps, PlainObject } from "../table";

function Row<R extends PlainObject = PlainObject>({ children }: RowProps<R>) {
  return <tr>{children}</tr>;
}

export default Row;
