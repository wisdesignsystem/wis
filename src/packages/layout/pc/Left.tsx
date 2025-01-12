import classNames from "classnames";

import type { LeftProps } from "../layout";
import Layout from "./Layout";

import styles from "./Layout.module.scss";

/**
 * @package layout
 */
function Left({ className, children, ...rest }: LeftProps) {
  return (
    <Layout
      {...rest}
      className={classNames(styles.left, {
        [className as string]: !!className,
      })}
    >
      {children}
    </Layout>
  );
}

Left.displayName = "Left";

export default Left;
