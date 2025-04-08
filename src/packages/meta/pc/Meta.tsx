import { matchElement } from "wis/core";

import type { MetaProps } from "../meta";

import styles from "./Meta.module.scss";

function Meta({ children }: MetaProps) {
  const {
    elements: { MetaItem: metaItem },
  } = matchElement(children, ["MetaItem"]);

  return <div className={styles.meta}>{metaItem}</div>;
}

Meta.displayName = "Meta";

export default Meta;
