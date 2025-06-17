import { useState, useRef } from "react";
import type { ReactElement } from "react";
import { matchElement } from "wis/core";

import type {
  ColumnProps,
  PlainObject,
  ColumnMeta,
  SortController,
} from "./table";

function syncObjectValue(
  source: Record<string, unknown>,
  target: Record<string, unknown>,
) {
  for (const key of Object.keys(target)) {
    source[key] = target[key];
  }
}

interface parseColumnElementOption {
  depth?: number;
  defaultVisibleStateMap?: Record<string, boolean>;
  visibleStateMap: Record<string, boolean>;
  parentVisible?: boolean;
  defaultPinnedStateMap?: Record<string, ColumnProps["pinned"]>;
  pinnedStateMap: Record<string, ColumnProps["pinned"]>;
  parentPinned?: ColumnProps["pinned"];
}
function parseColumnElement<R extends PlainObject = PlainObject>(
  columnElement: ReactElement<ColumnProps<R>>,
  option: parseColumnElementOption,
): {
  column: ColumnMeta<R>;
  maxDepth: number;
  defaultVisibleStateMap: Record<string, boolean>;
  defaultPinnedStateMap: Record<string, ColumnProps["pinned"]>;
} {
  const {
    depth = 0,
    defaultVisibleStateMap = {},
    visibleStateMap,
    parentVisible,
    defaultPinnedStateMap = {},
    pinnedStateMap,
    parentPinned,
  } = option ?? {};

  const {
    title,
    name,
    sortable,
    ellipsis,
    width,
    align = "left",
    visible,
    defaultVisible = true,
    pinned,
    defaultPinned,
    colSpan,
    children,
  } = columnElement.props ?? {};

  defaultVisibleStateMap[name] = defaultVisible;
  if (defaultPinned !== undefined) {
    defaultPinnedStateMap[name] = defaultPinned;
  }

  const {
    elements: { Column: childColumnElements },
  } = matchElement(children, ["Column"], { exclusiveMatch: true });

  const isGroupColumn = !!childColumnElements;

  const column: ColumnMeta<R> = {
    title,
    name,
    visible:
      parentVisible === false
        ? false
        : (visible ?? visibleStateMap[name] ?? defaultVisible),
    pinned: parentPinned ?? pinned ?? pinnedStateMap[name] ?? defaultPinned,
  };

  if (!isGroupColumn && typeof children === "function") {
    column.render = children;
  }

  let maxDepth = depth;
  if (isGroupColumn) {
    const {
      columns: childColumns,
      maxDepth: currentMaxDepth,
      hideByChildren,
    } = parseColumnElements<R>(childColumnElements, {
      depth: depth + 1,
      defaultVisibleStateMap,
      visibleStateMap,
      parentVisible: column.visible,
      defaultPinnedStateMap,
      pinnedStateMap,
      parentPinned: column.pinned,
    });
    maxDepth = currentMaxDepth;
    column.children = childColumns;
    column.align = "center";

    if (hideByChildren) {
      column.visible = false;
    }
    column.hideByChildren = hideByChildren;
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

  return {
    maxDepth,
    column,
    defaultVisibleStateMap,
    defaultPinnedStateMap,
  };
}

function parseColumnElements<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
  option: parseColumnElementOption,
): {
  columns: ColumnMeta<R>[];
  maxDepth: number;
  hideByChildren: boolean;
  defaultVisibleStateMap: Record<string, boolean>;
  defaultPinnedStateMap: Record<string, ColumnProps["pinned"]>;
} {
  const {
    depth = 0,
    defaultVisibleStateMap = {},
    visibleStateMap,
    parentVisible,
    defaultPinnedStateMap = {},
    pinnedStateMap,
    parentPinned,
  } = option ?? {};

  const columns = [];
  let maxDepth = depth;

  // when all the children column is hidden, the parent column will hidden.
  let hideByChildren = true;
  for (const columnElement of columnElements) {
    const { column, maxDepth: currentMaxDepth } = parseColumnElement(
      columnElement,
      {
        depth,
        defaultVisibleStateMap,
        visibleStateMap,
        parentVisible,
        defaultPinnedStateMap,
        pinnedStateMap,
        parentPinned,
      },
    );
    maxDepth = Math.max(maxDepth, currentMaxDepth);
    columns.push(column);

    if (column.visible) {
      hideByChildren = false;
    }
  }

  return {
    hideByChildren,
    columns,
    maxDepth: hideByChildren ? depth - 1 : maxDepth,
    defaultVisibleStateMap,
    defaultPinnedStateMap,
  };
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
  maxDepth: number;
  depth?: number;
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

      if (column.visible) {
        currentBreadth += 1;
      }

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

interface Operator {
  setVisible: (name: string, visible: boolean) => void;
  setPinned: (name: string, pinned?: ColumnProps["pinned"]) => void;
}

export function useColumns<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
): {
  columns: ColumnMeta<R>[];
  leafColumns: ColumnMeta<R>[];
  layerColumns: ColumnMeta<R>[][];
  sortsController: SortController[];
  visibleStateMap: Record<string, boolean>;
  pinnedStateMap: Record<string, ColumnProps["pinned"]>;
  operator: Operator;
} {
  const sync = useRef<boolean>(false);

  const [visibleStateMap, setVisibleStateMap] = useState<
    Record<string, boolean>
  >({});

  const [pinnedStateMap, setPinnedStateMap] = useState<
    Record<string, ColumnProps["pinned"]>
  >({});

  const {
    columns: rawColumns,
    maxDepth,
    defaultVisibleStateMap,
    defaultPinnedStateMap,
  } = parseColumnElements(columnElements, {
    visibleStateMap,
    pinnedStateMap,
  });

  // sync the default value without the render, because it will exec when initial.
  if (!sync.current) {
    sync.current = true;
    syncObjectValue(visibleStateMap, defaultVisibleStateMap);
    syncObjectValue(pinnedStateMap, defaultPinnedStateMap);
  }

  const { columns, leafColumns, layerColumns, sortsController } = formatColumns(
    rawColumns,
    {
      maxDepth,
    },
  );

  function setVisible(name: string, visible: boolean) {
    setVisibleStateMap({
      [name]: visible,
      ...visibleStateMap,
    });
  }

  function setPinned(name: string, pinned?: ColumnProps["pinned"]) {
    setPinnedStateMap({
      [name]: pinned,
      ...pinnedStateMap,
    });
  }

  return {
    columns,
    leafColumns,
    layerColumns,
    sortsController,
    visibleStateMap,
    pinnedStateMap,
    operator: { setVisible, setPinned },
  };
}
