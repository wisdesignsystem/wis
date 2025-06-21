import type { PinnedHeadProps, PlainObject } from "../table";

import Colgroup from "./Colgroup";
import HeadCell from "./HeadCell";

import styles from "./Table.module.scss";

function PinnedHead<R extends PlainObject = PlainObject>({
  sorter,
  layerColumns,
  leafColumns,
}: PinnedHeadProps<R>) {
  return (
    <table className={styles.table}>
      <Colgroup<R> leafColumns={leafColumns} />
      <thead>
        {layerColumns.map((columns) => {
          return (
            // @ts-ignore
            <tr key={columns.key}>
              {columns.map((column) => {
                return (
                  <HeadCell key={column.name} column={column} sorter={sorter} />
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
