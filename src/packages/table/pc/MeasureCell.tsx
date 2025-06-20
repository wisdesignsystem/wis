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
      measure.operator.set(column, column.width);
      return;
    }

    if (cellRef.current === null) {
      return;
    }
    measure.operator.set(column, cellRef.current.offsetWidth);
  });

  if (!column.visible) {
    return null;
  }

  return <td ref={cellRef} className={styles.cell} />;
}

export default MeasureCell;
