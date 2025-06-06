import { matchElement } from "wis/core";
import type { ReactElement } from "react";

import type { ColumnProps, PlainObject, ColumnMeta } from "./table";

function parseColumnElement<R extends PlainObject = PlainObject>(
  columnElement: ReactElement<ColumnProps<R>>,
): ColumnMeta<R> {
  const {
    title,
    name,
    sortable,
    ellipsis,
    width,
    align,
    visible,
    defaultVisible,
    fixed,
    defaultFixed,
    children,
  } = columnElement.props ?? {};

  // TODO
  matchElement(children, ["Column"], { exclusiveMatch: true });

  return {
    title,
    name,
    sortable,
    ellipsis,
    width,
    align,
    visible,
    defaultVisible,
    fixed,
    defaultFixed,
  };
}

function parseColumnElements<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
) {
  const columns = [];
  for (const columnElement of columnElements) {
    const column = parseColumnElement(columnElement);
    columns.push(column);
  }
  return columns;
}

function useColumns<R extends PlainObject = PlainObject>(
  columnElements: ReactElement<ColumnProps<R>>[],
) {
  const columns = parseColumnElements(columnElements);
}

export default useColumns;
