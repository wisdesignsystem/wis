import classNames from "classnames";

import type { BottomProps } from "../layout";
import Layout from "./Layout";

import styles from "./Layout.module.scss";

function Bottom({ className, children, ...rest }: BottomProps) {
  return (
    <Layout
      {...rest}
      className={classNames(styles.bottom, {
        [className as string]: !!className,
      })}
    >
      {children}
    </Layout>
  );
}

Bottom.displayName = "Bottom";

export default Bottom;
