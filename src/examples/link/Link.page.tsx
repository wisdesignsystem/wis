import { Link } from "wis/link";

import styles from "./Link.module.scss";

function Example() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Link text="Link" href="https://wis.design" />
        <Link text="Link" href="https://wis.design" inverse />
        <Link text="Link" href="https://wis.design" disabled />
        <Link text="Link" href="https://wis.design" inverse disabled />
      </div>
      <div className={styles.col}>
        <Link text="Link" href="/meta" />
        <Link text="Link" href="/meta" inverse />
        <Link text="Link" href="/meta" disabled />
        <Link text="Link" href="/meta" inverse disabled />
      </div>
    </div>
  );
}

export default Example;
