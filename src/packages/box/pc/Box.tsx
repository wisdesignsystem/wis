import { forwardRef } from "react";
import type { Ref } from "react";
import { matchElement } from "wis/core";
import classNames from "classnames";

import type { BoxProps } from "../box";

import styles from "./Box.module.scss";

const Box = forwardRef(
  ({ className, children, ...rest }: BoxProps, ref: Ref<HTMLDivElement>) => {
    const {
      elements: { BoxHeader: header, BoxContent: content, BoxFooter: footer },
    } = matchElement(children, ["BoxHeader", "BoxContent", "BoxFooter"]);

    return (
      <div
        {...rest}
        ref={ref}
        className={classNames(styles.box, {
          [className as string]: !!className,
        })}
      >
        {header}
        {content}
        {footer}
      </div>
    );
  },
);

Box.displayName = "Box";

export default Box;
