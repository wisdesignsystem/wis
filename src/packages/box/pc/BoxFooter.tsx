import { matchElement } from "wis/core";
import classNames from "classnames";

import type { BoxFooterProps } from "../box";

import styles from "./Box.module.scss";

function BoxFooter({ className, children, ...rest }: BoxFooterProps) {
  const {
    elements: { BoxActions: actions },
  } = matchElement(children, ["BoxActions"]);

  return (
    <div
      {...rest}
      className={classNames(styles.footer, {
        [className as string]: !!className,
      })}
    >
      <span />
      {actions}
    </div>
  );
}

BoxFooter.displayName = "BoxFooter";

export default BoxFooter;
