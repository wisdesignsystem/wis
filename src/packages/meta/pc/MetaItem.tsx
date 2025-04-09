import type { MetaItemProps } from "../meta";

import styles from "./Meta.module.scss";

/**
 * @package meta
 */
function MetaItem({ icon, label, text }: MetaItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.label}>
        {icon}
        {label && <span>{label}</span>}
      </div>
      {text}
    </div>
  );
}

MetaItem.displayName = "MetaItem";

export default MetaItem;
