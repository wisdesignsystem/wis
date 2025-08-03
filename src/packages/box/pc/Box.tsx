import { forwardRef, useContext } from "react";
import type { Ref } from "react";
import { matchElement, ComponentTypeContext } from "wis/core";
import classNames from "classnames";

import type { BoxProps } from "../box";

import styles from "./Box.module.scss";

const Box = forwardRef(function Box(
  { className, children, type, ...rest }: BoxProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    elements: { BoxHeader: header, BoxContent: content, BoxFooter: footer },
  } = matchElement(children, ["BoxHeader", "BoxContent", "BoxFooter"]);

  const prevType = useContext(ComponentTypeContext);

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames(styles.box, {
        [className as string]: !!className,
      })}
    >
      {header}
      <ComponentTypeContext.Provider value={type ?? prevType}>
        {content}
      </ComponentTypeContext.Provider>
      {footer}
    </div>
  );
});

Box.displayName = "Box";

export default Box;
