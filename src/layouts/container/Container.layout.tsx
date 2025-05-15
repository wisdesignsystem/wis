import type { ReactNode } from "react";

import styles from "./Container.module.scss";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.header} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Container;
