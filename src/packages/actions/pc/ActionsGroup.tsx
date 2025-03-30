import { Children, cloneElement } from "react";
import { matchElement } from "wis/core";

import type { ActionsGroupProps } from "../actions";

import styles from "./Actions.module.scss";

function ActionsGroup({ size = "md", children }: ActionsGroupProps) {
  const { matched } = matchElement(children, ["Button", "DropdownButton"]);

  return (
    <>
      <div className={styles.separator} />
      <div className={styles.group}>
        {Children.map(matched, (child) => {
          return cloneElement(child, {
            size,
          });
        })}
      </div>
      <div className={styles.separator} />
    </>
  );
}

ActionsGroup.displayName = "ActionsGroup";

export default ActionsGroup;
