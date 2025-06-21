import type { MeasureRowProps, PlainObject } from "../table";
import MeasureCell from "./MeasureCell";

import styles from "./Table.module.scss";

function MeasureRow<R extends PlainObject = PlainObject>({
  leafColumns,
  measure,
  sizeObserver,
}: MeasureRowProps<R>) {
  return (
    <tr className={styles.row} data-hidden aria-hidden>
      {leafColumns.map((column) => {
        return (
          <MeasureCell<R>
            key={column.name}
            sizeObserver={sizeObserver}
            measure={measure}
            column={column}
          />
        );
      })}
    </tr>
  );
}

export default MeasureRow;
