import { Children, cloneElement } from "react";
import { matchElement } from "wis/core";

import type { ActionsProps } from "../actions";

import styles from "./Actions.module.scss";

function Actions({ size = "md", children }: ActionsProps) {
  const { matched } = matchElement(children, [
    "Button",
    "DropdownButton",
    "ActionsGroup",
  ]);

  return (
    <div className={styles.actions} data-size={size}>
      {Children.map(matched, (child) => {
        return cloneElement(child, {
          size,
        });
      })}
    </div>
  );
}

Actions.displayName = "Actions";

export default Actions;
