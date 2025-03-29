import { Children, cloneElement } from "react";
import { matchElement } from "wis/core";

import type { ActionsGroupProps } from "../actions";

import styles from "./Actions.module.scss";

function ActionsGroup({ size = "md", children }: ActionsGroupProps) {
  const { matched } = matchElement(children, ["Button", "DropdownButton"]);

  return (
    <>
      <div className={styles.separator} />
      {Children.map(matched, (child) => {
        return cloneElement(child, {
          size,
        });
      })}
    </>
  );
}

ActionsGroup.displayName = "ActionsGroup";

export default ActionsGroup;
