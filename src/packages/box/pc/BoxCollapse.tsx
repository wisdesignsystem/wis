import { Collapsible as RDXCollapsible } from "radix-ui";
import { DownIcon } from "@wisdesign/lsicon";
import classNames from "classnames";

import type { BoxCollapseProps } from "../box";

import styles from "./Box.module.scss";

function BoxCollapse({ className, ...rest }: BoxCollapseProps) {
  return (
    <RDXCollapsible.Trigger
      {...rest}
      className={classNames(styles.collapse, {
        [className as string]: !!className,
      })}
    >
      <DownIcon />
    </RDXCollapsible.Trigger>
  );
}

BoxCollapse.displayName = "BoxCollapse";

export default BoxCollapse;
