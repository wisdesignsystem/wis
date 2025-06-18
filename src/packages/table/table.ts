import type { HTMLAttributes, ReactNode } from "react";

import type { Sorter } from "./useSorter";
import type { Datasource } from "./useDatasource";
import type { Measure } from "./useMeasure";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PlainObject = Record<string, any>;

interface Cell<R extends PlainObject = PlainObject> {
  /**
   * The value of the cell
   */
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: R extends PlainObject ? R[keyof R] : any;

  /**
   * The name of the column where the cell is located
   */
  name: R extends PlainObject ? keyof R : string;

  /**
   * The row index where the cell is located (resets when switching pages)
   */
  rowIndex: number;

  /**
   * The row number where the cell is located (does not reset when switching pages)
   */
  rowNo: number;

  /**
   * The row data where the cell is located
   */
  rowData: R;
}

declare global {
  const cell: Cell;
}

export enum SortType {
  Asc = "asc",
  Desc = "desc",
}

export type Compare<R extends PlainObject = PlainObject> = (
  record1: R,
  record2: R,
) => OrderType;

export interface Sort {
  /**
   * The name of the column to sort
   */
  name: string;

  /**
   * The type of the sort
   */
  type: SortType;

  /**
   * Set the column sort priority, it's useful when open multiple sort
   */
  priority?: number;
}

export enum OrderType {
  LESS = -1,
  EQUAL = 0,
  GREATER = 1,
}

export interface Sortable<R extends PlainObject = PlainObject> {
  /**
   * Set the sort type of the column. Set this value will enable controlled mode.
   */
  type?: SortType;

  /**
   * Set the default sort type of the column.
   */
  defaultType?: SortType;

  /**
   * Set the column sort priority, it's useful when open multiple sort
   */
  priority?: number;

  /**
   * Custom the sort way of the column.
   */
  compare?: Compare<R>;
}

export type SortController = Pick<Sortable, "type" | "defaultType"> &
  Pick<Sort, "name">;

export type SortState = Pick<Sort, "name" | "type">;

export interface TableRequest<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  /**
   * The parameters of the table request
   */
  params?: P;

  /**
   * The sort of the request
   */
  sort?: Sort | Sort[];

  /**
   * The columns of the table
   */
  columns: ColumnMeta<R>[];
}

export interface TableResponse<R extends PlainObject = PlainObject> {
  /**
   * The data of the table
   */
  data: R[];

  /**
   * The sort of the table, if the data is sorted, the sort should be returned
   */
  sort?: SortState | SortState[];
}

export type TableAjax<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> = (requestOption: TableRequest<R, P>) => Promise<TableResponse<R>>;

export interface ColumnMeta<R extends PlainObject = PlainObject>
  extends Omit<
    ColumnProps<R>,
    "sortable" | "defaultVisible" | "defaultPinned" | "children"
  > {
  /**
   * The column render function of the table.
   */
  render?: ColumnFn<R>;

  /**
   * The colSpan of the column.
   */
  colSpan?: number;

  /**
   * The rowSpan of the column.
   */
  rowSpan?: number;

  /**
   * Config the column is sortable and sort way.
   */
  sortable?: Sortable<R>;

  /**
   * When true, mean is all children column is hidden.
   */
  hideByChildren?: boolean;

  children?: ColumnMeta<R>[];
}

type ColumnFn<R extends PlainObject = PlainObject> = (
  cell: Cell<R>,
) => ReactNode;

export interface ColgroupProps<R extends PlainObject = PlainObject> {
  measure: Measure;
  leafColumns: ColumnMeta<R>[];
}

export interface HeadProps<R extends PlainObject = PlainObject> {
  sorter: Sorter<R>;
  layerColumns: ColumnMeta<R>[][];
}

export interface HeadCellProps<R extends PlainObject = PlainObject> {
  sorter: Sorter<R>;
  column: ColumnMeta<R>;
}

export interface BodyProps<R extends PlainObject = PlainObject> {
  rowKey: (record: R) => string;
  measure: Measure;
  data: R[];
  leafColumns: ColumnMeta<R>[];
}

export interface RowProps<R extends PlainObject = PlainObject> {
  record: R;
  children: ReactNode;
}

export interface MeasureRowProps<R extends PlainObject = PlainObject> {
  measure: Measure;
  leafColumns: ColumnMeta<R>[];
}

export interface MeasureCellProps<R extends PlainObject = PlainObject> {
  measure: Measure;
  column: ColumnMeta<R>;
}

export interface CellProps<R extends PlainObject = PlainObject> {
  rowIndex: number;
  rowNo: number;
  record: R;
  column: ColumnMeta<R>;
}

export interface TableProps<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> extends Omit<HTMLAttributes<HTMLTableElement>, "onLoad"> {
  /**
   * The title of the table
   */
  title?: string;

  /**
   * The description of the table
   */
  description?: string;

  /**
   * The datasource of the table
   */
  data?: R[] | TableAjax<R, P>;

  /**
   * The table request params, it's useful when get data by remote.
   */
  params?: P;

  /**
   * The toggle tip of the table
   */
  toggleTip?: ReactNode;

  /**
   * The separator mode of the table
   */
  separator?: "stripe" | "border";

  /**
   * The primary key of the table row
   */
  rowKey?: string | ((record: R) => string);

  /**
   * The size of the table
   */
  size?: "md" | "sm";

  /**
   * The sort mode of the table
   */
  sortMode?: "reset" | "toggle";

  /**
   * When true, the table will not automatically query the data when it is mounted.
   */
  manual?: boolean;

  /**
   * The callback function when the sort changes
   */
  onSortChange?: (sort: Sort | Sort[]) => void;

  /**
   * The callback function when the data is loaded
   */
  onLoad?: (response: TableResponse<R>) => void;
}

export interface ColumnProps<R extends PlainObject = PlainObject> {
  /**
   * The title of the column
   */
  title?: string;

  /**
   * The name of the column
   */
  name: string;

  /**
   * Config the column is sortable and sort way.
   */
  sortable?: boolean | Compare<R> | Sortable<R>;

  /**
   * Set the cell text ellipsis when the cell text is too long. Need to set the width property.
   */
  ellipsis?: boolean;

  /**
   * Set the min width of the column.
   */
  minWidth?: number;

  /**
   * Set the width of the column.
   */
  width?: number;

  /**
   * Set the max width of the column.
   */
  maxWidth?: number;

  /**
   * Set the text alignment of the column.
   */
  align?: "left" | "center" | "right";

  /**
   * Set the visible of the column. Set this value will enable controlled mode, and the display state cannot be adjusted manually.
   */
  visible?: boolean;

  /**
   * Set the default visible of the column.
   */
  defaultVisible?: boolean;

  /**
   * Set the pinned of the column. Set this value will enable controlled mode, and the display state cannot be adjusted manually.
   */
  pinned?: "left" | "right";

  /**
   * Set the default pinned of the column.
   */
  defaultPinned?: "left" | "right";

  /**
   * Set the colSpan of the header cell.
   */
  colSpan?: number;

  /**
   * @ignore
   */
  children: ReactNode;
}

interface QueryOption<P extends PlainObject = PlainObject> {
  params?: P;
}

export interface TableRef<
  R extends PlainObject = PlainObject,
  P extends PlainObject = PlainObject,
> {
  getData: () => R[];
  query: (option?: QueryOption<P>) => Promise<TableResponse<R>>;
}

export type { Sorter, Datasource, Measure };
