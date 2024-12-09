import attrs from "@/utils/attrs";

import type { RowProps } from "./grid";

import styles from "./Row.module.scss";

function Row({ gutter = true, responsive, children }: RowProps) {
  return (
    <div
      className={styles.row}
      {...attrs({ "data-gutter": gutter, "data-responsive": responsive })}
    >
      {children}
    </div>
  );
}

Row.displayName = "Row";

export default Row;
