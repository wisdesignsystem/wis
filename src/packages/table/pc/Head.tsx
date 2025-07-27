import type { HeadProps, PlainObject } from "../table";
import HeadCell from "./HeadCell";

import styles from "./Table.module.scss";

function Head<R extends PlainObject = PlainObject>({
  sorter,
  measure,
  layerColumns,
}: HeadProps<R>) {
  return (
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
  );
}

export default Head;
