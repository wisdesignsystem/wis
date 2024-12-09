import { Button } from "remote:self/button";
import { Tooltip } from "remote:self/tooltip";

import styles from "./Tooltip.module.scss";

function Example() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Tooltip text="Tooltip" side="top" align="start">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="left" align="start">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="right" align="start">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="bottom" align="start">
          <Button text="Button" />
        </Tooltip>
      </div>
      <div className={styles.col}>
        <Tooltip text="Tooltip" side="top" align="center">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="left" align="center">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="right" align="center">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="bottom" align="center">
          <Button text="Button" />
        </Tooltip>
      </div>
      <div className={styles.col}>
        <Tooltip text="Tooltip" side="top" align="end">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="left" align="end">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="right" align="end">
          <Button text="Button" />
        </Tooltip>
        <Tooltip text="Tooltip" side="bottom" align="end">
          <Button text="Button" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Example;
