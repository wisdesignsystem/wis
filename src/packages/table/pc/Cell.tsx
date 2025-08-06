import type { CSSProperties } from "react";
import { isValidElement } from "react";
import attrs from "@/utils/attrs";

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

  const node = column.render?.({
    name: column.name as R extends PlainObject ? keyof R : string,
    rowIndex,
    rowNo,
    data: record[column.name],
    rowData: record,
  });

  let title: string | undefined;
  if (typeof node === "string") {
    title = node;
  } else if (isValidElement(node) && typeof node.props.children === "string") {
    title = node.props.children;
  }

  return (
    <td
      className={styles.cell}
      style={style}
      {...attrs({
        "data-align": column.align,
        "data-pinned": column.pinned,
        "data-pinned-latest":
          measure.columnPinnedWidthMap[column.name]?.isLatest,
        "data-ellipsis": column.ellipsis,
      })}
      title={title}
    >
      <div className={styles["cell-label"]}>{node}</div>
    </td>
  );
}

export default Cell;
