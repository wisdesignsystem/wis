import { cloneElement } from "react";
import { matchElement } from "wis/core";

import type { ToggleTipActionsProps } from "../toggleTip";

import styles from "./ToggleTip.module.scss";

/**
 * @package toggleTip
 */
function ToggleTipActions({ children }: ToggleTipActionsProps) {
  const {
    elements: { Link: link, Button: button },
  } = matchElement(children, [
    { type: "Link", maxCount: 1 },
    { type: "Button", maxCount: 1 },
  ]);

  return (
    <div className={styles.actions}>
      {link &&
        cloneElement(link[0], {
          inverse: true,
        })}
      {button &&
        cloneElement(button[0], {
          variant: "primary",
          size: "sm",
        })}
    </div>
  );
}

ToggleTipActions.displayName = "ToggleTipActions";

export default ToggleTipActions;
