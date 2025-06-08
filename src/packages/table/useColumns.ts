/**
 * This module provides utilities for parsing and formatting table columns in a React application.
 * It handles both simple columns and grouped columns with nested structure.
 */

import { matchElement } from "wis/core";
import type { ReactElement } from "react";

import type { ColumnProps, PlainObject, ColumnMeta } from "./table";
import { isColumnFn } from "./table";

/**
 * Parses a single column element and its children recursively
 * @param columnElement - The React element representing a column
 * @param depth - Current depth in the column hierarchy
 * @returns Object containing the parsed column metadata and maximum depth
 */
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

  if (!isGroupColumn && isColumnFn<R>(children)) {
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
    column.sortable =
      typeof sortable === "boolean" ? (sortable ? {} : undefined) : sortable;
  }

  return { maxDepth, column };
}

/**
 * Parses multiple column elements and their children
 * @param columnElements - Array of React elements representing columns
 * @param depth - Current depth in the column hierarchy
 * @returns Object containing parsed columns and maximum depth
 */
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

/**
 * Checks if a column is a leaf column (has no children)
 * @param column - The column metadata to check
 * @returns True if the column has no children or empty children array
 */
function isLeafColumn<R extends PlainObject = PlainObject>(
  column: ColumnMeta<R>,
) {
  return (
    column.children === undefined ||
    (Array.isArray(column.children) && column.children.length <= 0)
  );
}

/**
 * Options for formatting columns
 */
interface FormatColumnsOption<R extends PlainObject = PlainObject> {
  depth?: number;
  maxDepth: number;
  leafColumns?: ColumnMeta<R>[];
  layerColumns?: ColumnMeta<R>[][];
  lastRowSpanCount?: number;
}

/**
 * Formats columns into a hierarchical structure with proper row and column spans
 * @param columns - Array of column metadata to format
 * @param option - Formatting options
 * @returns Formatted columns with leaf columns and layer information
 */
function formatColumns<R extends PlainObject = PlainObject>(
  columns: ColumnMeta<R>[],
  option: FormatColumnsOption<R>,
): {
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  breadth: number;
} {
  const { maxDepth, depth = 0, leafColumns = [], layerColumns = [] } = option;

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
    });

    if (breadth !== 1) {
      column.colSpan = breadth;
    }

    currentBreadth += breadth;
  }

  return { columns, leafColumns, layerColumns, breadth: currentBreadth };
}

/**
 * Main hook for processing table columns
 * Parses column elements and formats them into a structure suitable for rendering
 * @param columnElements - Array of React elements representing table columns
 * @returns Object containing:
 *   - columns: The processed column hierarchy
 *   - leafColumns: Array of leaf columns (columns without children)
 *   - layerColumns: Array of column arrays for each depth level
 */
function useColumns<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
): {
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
} {
  const { columns: rawColumns, maxDepth } = parseColumnElements(columnElements);
  const { columns, leafColumns, layerColumns } = formatColumns(rawColumns, {
    maxDepth,
  });

  return { columns, leafColumns, layerColumns };
}

export default useColumns;
