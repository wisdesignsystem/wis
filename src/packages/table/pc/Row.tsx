import type { RowProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function Row<R extends PlainObject = PlainObject>({ children }: RowProps<R>) {
  return <tr className={styles.row}>{children}</tr>;
}

export default Row;
