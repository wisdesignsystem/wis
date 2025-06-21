import { useEffect, useRef } from "react";

import type { MeasureCellProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function MeasureCell<R extends PlainObject = PlainObject>({
  column,
  measure,
  sizeObserver,
}: MeasureCellProps<R>) {
  const cellRef = useRef<HTMLTableCellElement>(null);

  function resize() {
    if (cellRef.current === null) {
      return;
    }

    let width = cellRef.current.offsetWidth;
    if (!column.ignoreWidth && column.width !== undefined) {
      width = column.width;
    }
    measure.operator.set(column, width);
  }

  useEffect(() => {
    // only auto width column maybe to resize.
    const shouldObserver =
      column.ignoreWidth ||
      (column.width === undefined &&
        column.minWidth === undefined &&
        column.maxWidth === undefined);

    if (shouldObserver) {
      sizeObserver.on("resize", resize);
    } else {
      resize();
    }

    return () => {
      sizeObserver.off("resize", resize);
    };
  });

  if (!column.visible) {
    return null;
  }

  return <td ref={cellRef} className={styles.cell} />;
}

export default MeasureCell;
