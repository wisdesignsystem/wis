import type { CSSProperties } from "react";

import type { CellProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function Cell<R extends PlainObject = PlainObject>({
  rowIndex,
  rowNo,
  record,
  column,
  measure,
}: CellProps<R>) {
  if (!column.visible) {
    return null;
  }

  const style: CSSProperties = {};
  if (column.pinned === "left") {
    style.position = "sticky";
    style.left = `${measure.columnPinnedWidthMap[column.name]?.body}px`;
  } else if (column.pinned === "right") {
    style.position = "sticky";
    style.right = `${measure.columnPinnedWidthMap[column.name]?.body}px`;
  }

  return (
    <td className={styles.cell} data-align={column.align} style={style}>
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
