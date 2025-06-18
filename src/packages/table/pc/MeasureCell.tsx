import { useEffect, useRef } from "react";

import type { MeasureCellProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function MeasureCell<R extends PlainObject = PlainObject>({
  column,
  measure,
}: MeasureCellProps<R>) {
  const cellRef = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (column.width !== undefined) {
      measure.operator.set(column.name, column.width);
      return;
    }

    if (cellRef.current === null) {
      return;
    }

    let width = cellRef.current.offsetWidth;
    width = Math.min(width, column.maxWidth ?? Number.MAX_SAFE_INTEGER);
    width = Math.max(width, column.minWidth ?? Number.MIN_SAFE_INTEGER);

    measure.operator.set(column.name, Math.ceil(width));
  }, []);

  if (!column.visible) {
    return null;
  }

  return <td ref={cellRef} className={styles.cell} />;
}

export default MeasureCell;
