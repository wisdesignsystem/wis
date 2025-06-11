import { matchElement } from "wis/core";
import type { ReactElement } from "react";

import type {
  ColumnProps,
  PlainObject,
  ColumnMeta,
  SortController,
} from "./table";

function parseColumnElement<R extends PlainObject = PlainObject>(
  columnElement: ReactElement<ColumnProps<R>>,
  depth = 0,
): { column: ColumnMeta<R>; maxDepth: number } {
  const {
    title,
    name,
    sortable,
    ellipsis,
    width,
    align = "left",
    visible,
    defaultVisible = true,
    fixed,
    defaultFixed,
    colSpan,
    children,
  } = columnElement.props ?? {};

  const {
    elements: { Column: childColumnElements },
  } = matchElement(children, ["Column"], { exclusiveMatch: true });

  const isGroupColumn = !!childColumnElements;

  const column: ColumnMeta<R> = {
    title,
    name,
    visible,
    defaultVisible,
    fixed,
    defaultFixed,
  };

  if (!isGroupColumn && typeof children === "function") {
    column.render = children;
  }

  let maxDepth = depth;
  if (isGroupColumn) {
    const { columns: childColumns, maxDepth: currentMaxDepth } =
      parseColumnElements<R>(childColumnElements, depth + 1);
    maxDepth = currentMaxDepth;
    column.children = childColumns;
    column.align = "center";
  } else {
    column.align = align;
    column.ellipsis = ellipsis;
    column.width = width;
    column.colSpan = colSpan !== undefined && colSpan > 1 ? colSpan : undefined;

    if (typeof sortable === "boolean") {
      column.sortable = sortable ? {} : undefined;
    } else if (typeof sortable === "function") {
      column.sortable = { compare: sortable };
    } else {
      column.sortable = sortable;
    }
  }

  return { maxDepth, column };
}

function parseColumnElements<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
  depth = 0,
): { columns: ColumnMeta<R>[]; maxDepth: number } {
  const columns = [];
  let maxDepth = depth;
  for (const columnElement of columnElements) {
    const { column, maxDepth: currentMaxDepth } = parseColumnElement(
      columnElement,
      depth,
    );
    maxDepth = Math.max(maxDepth, currentMaxDepth);
    columns.push(column);
  }
  return { columns, maxDepth };
}

function isLeafColumn<R extends PlainObject = PlainObject>(
  column: ColumnMeta<R>,
) {
  return (
    column.children === undefined ||
    (Array.isArray(column.children) && column.children.length <= 0)
  );
}

interface FormatColumnsOption<R extends PlainObject = PlainObject> {
  depth?: number;
  maxDepth: number;
  leafColumns?: ColumnMeta<R>[];
  layerColumns?: ColumnMeta<R>[][];
  lastRowSpanCount?: number;
  sortsController?: SortController[];
}

function formatColumns<R extends PlainObject = PlainObject>(
  columns: ColumnMeta<R>[],
  option: FormatColumnsOption<R>,
): {
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  sortsController: SortController[];
  breadth: number;
} {
  const {
    maxDepth,
    depth = 0,
    leafColumns = [],
    layerColumns = [],
    sortsController = [],
  } = option;

  if (layerColumns[depth] === undefined) {
    layerColumns[depth] = [];
    // @ts-ignore
    layerColumns[depth].key = "layer";
  }

  let currentBreadth = 0;
  for (const column of columns) {
    layerColumns[depth].push(column);
    // @ts-ignore
    layerColumns[depth].key = `${layerColumns[depth].key}_${column.name}`;

    if (isLeafColumn<R>(column)) {
      leafColumns.push(column);

      if (column.sortable !== undefined) {
        sortsController.push({
          name: column.name,
          type: column.sortable.type,
          defaultType: column.sortable.defaultType,
        });
      }

      if (
        option.lastRowSpanCount !== undefined &&
        option.lastRowSpanCount > 0
      ) {
        column.colSpan = 0;
        option.lastRowSpanCount--;
      } else if (column.colSpan) {
        option.lastRowSpanCount = column.colSpan - 1;
      }

      const rowSpan = maxDepth - depth + 1;
      if (rowSpan !== 1) {
        column.rowSpan = maxDepth - depth + 1;
      }
      currentBreadth += 1;

      continue;
    }

    const { breadth } = formatColumns<R>(column.children as ColumnMeta<R>[], {
      maxDepth,
      depth: depth + 1,
      leafColumns,
      layerColumns,
      lastRowSpanCount: option.lastRowSpanCount,
      sortsController,
    });

    if (breadth !== 1) {
      column.colSpan = breadth;
    }

    currentBreadth += breadth;
  }

  return {
    columns,
    leafColumns,
    layerColumns,
    sortsController,
    breadth: currentBreadth,
  };
}

export function useColumns<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
): {
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  sortsController: SortController[];
} {
  const { columns: rawColumns, maxDepth } = parseColumnElements(columnElements);
  const { columns, leafColumns, layerColumns, sortsController } = formatColumns(
    rawColumns,
    {
      maxDepth,
    },
  );

  return { columns, leafColumns, layerColumns, sortsController };
}
