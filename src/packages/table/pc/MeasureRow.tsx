import type { MeasureRowProps, PlainObject } from "../table";
import MeasureCell from "./MeasureCell";

import styles from "./Table.module.scss";

function MeasureRow<R extends PlainObject = PlainObject>({
  leafColumns,
  measure,
}: MeasureRowProps<R>) {
  return (
    <tr ref={measure.measureRef} className={styles.row} data-hidden aria-hidden>
      {leafColumns.map((column) => {
        return <MeasureCell<R> key={column.name} column={column} />;
      })}
    </tr>
  );
}

export default MeasureRow;
