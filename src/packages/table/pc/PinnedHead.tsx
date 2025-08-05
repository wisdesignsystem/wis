import type { PinnedHeadProps, PlainObject } from "../table";

import Colgroup from "./Colgroup";
import HeadCell from "./HeadCell";

import styles from "./Table.module.scss";

function PinnedHead<R extends PlainObject = PlainObject>({
  sorter,
  measure,
  layerColumns,
  leafColumns,
}: PinnedHeadProps<R>) {
  return (
    <table className={styles.content}>
      <Colgroup<R> measure={measure} leafColumns={leafColumns} />
      <thead>
        {layerColumns.map((columns) => {
          return (
            // @ts-ignore
            <tr key={columns.key} className={styles["head-row"]}>
              {columns.map((column) => {
                return (
                  <HeadCell
                    key={column.name}
                    measure={measure}
                    column={column}
                    sorter={sorter}
                  />
                );
              })}
            </tr>
          );
        })}
      </thead>
    </table>
  );
}

export default PinnedHead;
