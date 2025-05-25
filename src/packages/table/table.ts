import type { HTMLAttributes, ReactNode } from "react";

interface Record {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
}

interface Cell {
  // The value of the cell
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any;
  // The name of the column where the cell is located
  name: string;
  // The row number where the cell is located (does not reset when switching pages)
  rowNo: string;
  // The row data where the cell is located
  rowData: Record;
  // The row index where the cell is located (resets when switching pages)
  rowIndex: string;
}

declare global {
  const cell: Cell;
}

export interface TableProps extends HTMLAttributes<HTMLDivElement> {}

export interface ColumnProps {
  children: ReactNode;
}

type ColumnFn = (cell: Cell) => ReactNode;
export function isColumnFn(data: unknown): data is ColumnFn {
  return typeof data === "function";
}
