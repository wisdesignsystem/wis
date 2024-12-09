import { matchElement } from "remote:self/core";
import classNames from "classnames";
import type { BoxProps } from "../box";

import styles from "./Box.module.scss";

function Box({ className, children, ...rest }: BoxProps) {
  const {
    elements: { BoxHeader: header, BoxContent: content, BoxFooter: footer },
  } = matchElement(children, ["BoxHeader", "BoxContent", "BoxFooter"]);

  return (
    <div
      {...rest}
      className={classNames(styles.box, { [className as string]: !!className })}
    >
      {header}
      {content}
      {footer}
    </div>
  );
}

Box.displayName = "Box";

export default Box;
