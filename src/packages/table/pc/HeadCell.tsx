import type { ReactNode } from "react";
import {
  TriangleUpFilledIcon,
  TriangleDownFilledIcon,
} from "@wisdesign/lsicon";
import useBooleanValue from "@/hooks/useBooleanValue";

import type { HeadCellProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function HeadCell<R extends PlainObject = PlainObject>({
  column,
}: HeadCellProps<R>) {
  const [visible] = useBooleanValue({
    defaultValue: column.defaultVisible,
    value: column.visible,
    onChange: () => {},
  });

  if (column.colSpan === 0 || !visible) {
    return null;
  }

  function renderSortContainer(children: ReactNode) {
    if (column.sortable) {
      return (
        <button type="button">
          {children}
          <div>
            <TriangleUpFilledIcon />
            <TriangleDownFilledIcon />
          </div>
        </button>
      );
    }

    return children;
  }

  return (
    <th
      className={styles["head-cell"]}
      colSpan={column.colSpan}
      rowSpan={column.rowSpan}
      data-align={column.align}
    >
      {renderSortContainer(column.title)}
    </th>
  );
}

export default HeadCell;
