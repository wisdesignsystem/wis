import classNames from "classnames";

import type { RightProps } from "../layout";
import Layout from "./Layout";

import styles from "./Layout.module.scss";

function Right({ className, children, ...rest }: RightProps) {
  return (
    <Layout
      {...rest}
      className={classNames(styles.right, {
        [className as string]: !!className,
      })}
    >
      {children}
    </Layout>
  );
}

Right.displayName = "Right";

export default Right;
