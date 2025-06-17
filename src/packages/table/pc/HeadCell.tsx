import type { ReactNode } from "react";
import {
  TriangleUpFilledIcon,
  TriangleDownFilledIcon,
} from "@wisdesign/lsicon";
import attrs from "@/utils/attrs";

import type { HeadCellProps, PlainObject } from "../table";
import { SortType } from "../table";

import styles from "./Table.module.scss";

function HeadCell<R extends PlainObject = PlainObject>({
  sorter,
  column,
}: HeadCellProps<R>) {
  if (column.colSpan === 0 || !column.visible) {
    return null;
  }

  function renderSortContainer(children: ReactNode) {
    if (column.sortable !== undefined) {
      const sort = sorter.sortMap[column.name];
      return (
        <button
          type="button"
          onClick={() => sorter.operator.next(column.name, sort?.type)}
        >
          {children}
          <div aria-hidden="true">
            <TriangleUpFilledIcon />
            <TriangleDownFilledIcon />
          </div>
        </button>
      );
    }

    return children;
  }

  function ariaSort() {
    if (column.sortable === undefined) {
      return;
    }

    const sort = sorter.sortMap[column.name];
    switch (sort?.type) {
      case SortType.Asc:
        return "ascending";
      case SortType.Desc:
        return "descending";
      default:
        return "none";
    }
  }

  const ariaSortLabel = ariaSort();

  return (
    <th
      className={styles["head-cell"]}
      colSpan={column.colSpan}
      rowSpan={column.rowSpan}
      data-align={column.align}
      {...attrs({
        "data-sort": ariaSortLabel,
      })}
      {...attrs(
        {
          "aria-sort": ariaSortLabel,
        },
        { ignoreNone: false },
      )}
    >
      {renderSortContainer(column.title)}
    </th>
  );
}

export default HeadCell;
