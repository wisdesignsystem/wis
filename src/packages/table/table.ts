import type { HTMLAttributes, ReactNode } from "react";

interface Record {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
}

interface Cell {
  /**
   * The value of the cell
   */
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any;

  /**
   * The name of the column where the cell is located
   */
  name: string;

  /**
   * The row number where the cell is located (does not reset when switching pages)
   */
  rowNo: string;

  /**
   * The row data where the cell is located
   */
  rowData: Record;

  /**
   * The row index where the cell is located (resets when switching pages)
   */
  rowIndex: string;
}

declare global {
  const cell: Cell;
}

export enum SortType {
  Asc = "asc",
  Desc = "desc",
}

export interface Sort {
  /**
   * The name of the column to sort
   */
  name: string;

  /**
   * The type of the sort
   */
  type?: SortType;

  /**
   * The priority of the sort
   */
  priority?: number;
}

export interface TableRequest<
  P extends object = object,
  R extends object = object,
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
  columns: ColumnType<R>[];
}

export interface TableResponse<R extends object = object> {
  /**
   * The data of the table
   */
  data: R[];

  /**
   * The sort of the table, if the data is sorted, the sort should be returned
   */
  sort?: Sort | Sort[];
}

export enum OrderType {
  LESS = -1,
  EQUAL = 0,
  GREATER = 1,
}

export interface Sortable<R extends object = object> {
  type?: SortType;
  defaultType?: SortType;
  priority?: number;
  sort?: (record1: R, record2: R, sort: Sort) => OrderType;
}

export interface TableProps<
  R extends object = object,
  P extends object = object,
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
  data?:
    | R[]
    | ((requestOption: TableRequest<P, R>) => Promise<TableResponse<R>>);

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
   * Whether to automatically query the data when the table is mounted
   */
  autoQuery?: boolean;

  /**
   * The callback function when the sort changes
   */
  onSortChange?: (sort: Sort | Sort[]) => void;

  /**
   * The callback function when the data is loaded
   */
  onLoad?: (response: TableResponse<R>) => void;
}

export interface ColumnProps<R extends object = object> {
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
  sortable?: boolean | Sortable<R>;

  /**
   * Set the cell text ellipsis when the cell text is too long. Need to set the width property.
   */
  ellipsis?: boolean;

  /**
   * Set the width of the column.
   */
  width?: number;

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
   * Set the fixed of the column. Set this value will enable controlled mode, and the display state cannot be adjusted manually.
   */
  fixed?: "left" | "right";

  /**
   * Set the default fixed of the column.
   */
  defaultFixed?: "left" | "right";

  /**
   * @private
   */
  children: ReactNode;
}

export interface ColumnType<R extends object = object>
  extends Omit<ColumnProps<R>, "children"> {
  children?: ColumnType<R>[];
}

type ColumnFn = (cell: Cell) => ReactNode;
export function isColumnFn(data: unknown): data is ColumnFn {
  return typeof data === "function";
}
