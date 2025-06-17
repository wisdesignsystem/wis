import type { CellProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function Cell<R extends PlainObject = PlainObject>({
  rowIndex,
  rowNo,
  record,
  column,
}: CellProps<R>) {
  if (!column.visible) {
    return null;
  }

  return (
    <td className={styles.cell} data-align={column.align}>
      {column.render?.({
        name: column.name as R extends PlainObject ? keyof R : string,
        rowIndex,
        rowNo,
        data: record[column.name],
        rowData: record,
      })}
    </td>
  );
}

export default Cell;
