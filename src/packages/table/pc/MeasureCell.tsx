import type { MeasureCellProps, PlainObject } from "../table";

import styles from "./Table.module.scss";

function MeasureCell<R extends PlainObject = PlainObject>({
  column,
}: MeasureCellProps<R>) {
  if (!column.visible) {
    return null;
  }

  return <td className={styles.cell} data-name={column.name} />;
}

export default MeasureCell;
