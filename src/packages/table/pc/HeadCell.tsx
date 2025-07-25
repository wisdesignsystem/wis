import type { CSSProperties } from "react";
import { useRef } from "react";
import {
  ToggleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  FilterIcon,
} from "@wisdesign/lsicon";
import attrs from "@/utils/attrs";

import type { HeadCellProps, PlainObject } from "../table";
import { SortType } from "../table";

import styles from "./Table.module.scss";

function HeadCell<R extends PlainObject = PlainObject>({
  sorter,
  column,
  measure,
}: HeadCellProps<R>) {
  const sortRef = useRef<HTMLButtonElement>(null);

  if (column.colSpan === 0 || !column.visible) {
    return null;
  }

  const isSortable = column.sortable !== undefined;
  const isFilter = false;

  function renderSort() {
    if (isSortable) {
      const sort = sorter.sortMap[column.name];

      return (
        <button
          className={styles.sort}
          ref={sortRef}
          type="button"
          onClick={() => {
            sorter.operator.next(column.name, sort?.type);
            sorter.operator.emit();
          }}
        >
          <div aria-hidden="true">
            {sort === undefined && <ToggleIcon />}
            {sort?.type === SortType.Asc && <ArrowUpIcon />}
            {sort?.type === SortType.Desc && <ArrowDownIcon />}
          </div>
        </button>
      );
    }

    return null;
  }

  function renderCellTitle() {
    return (
      <div className={styles["head-cell-meta"]}>
        <div className={styles["head-cell-title"]}>
          <span className={styles["head-cell-label"]}>{column.title}</span>
          {renderSort()}
        </div>
      </div>
    );
  }

  function renderCellActions() {
    if (!isFilter) {
      return null;
    }

    return (
      <div className={styles["head-cell-actions"]}>
        <FilterIcon />
      </div>
    );
  }

  function renderCell() {
    if (!isSortable && !isFilter) {
      return column.title;
    }

    return (
      <div className={styles["head-cell-container"]}>
        {renderCellTitle()}
        {renderCellActions()}
      </div>
    );
  }

  function ariaSort() {
    if (!isSortable) {
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

  const style: CSSProperties = {};
  if (column.pinned === "left") {
    style.position = "sticky";
    style.left = `${measure.columnPinnedWidthMap[column.name]?.head}px`;
  } else if (column.pinned === "right") {
    style.position = "sticky";
    style.right = `${measure.columnPinnedWidthMap[column.name]?.head}px`;
  }

  return (
    <th
      className={styles["head-cell"]}
      colSpan={column.colSpan}
      rowSpan={column.rowSpan}
      data-align={column.align}
      style={style}
      {...attrs({
        "data-sortable": isSortable,
        "data-sort": ariaSortLabel,
        "data-ellipse": column.ellipsis,
      })}
      {...attrs(
        {
          "aria-sort": ariaSortLabel,
        },
        { ignoreNone: false },
      )}
      onClick={() => {
        sortRef.current?.click();
      }}
    >
      {renderCell()}
    </th>
  );
}

export default HeadCell;
