import { matchElement } from "wis/core";
import classNames from "classnames";

import type { TopProps } from "../layout";
import Layout from "./Layout";

import styles from "./Layout.module.scss";

/**
 * @package layout
 */
function Top({
  className,
  // @ts-ignore
  title,
  // @ts-ignore
  description,
  // @ts-ignore
  toggleTip,
  children,
  ...rest
}: TopProps) {
  const { unmatched } = matchElement(
    children,
    [{ type: "Actions", maxCount: 0 }],
    { strict: false },
  );

  return (
    <Layout
      {...rest}
      className={classNames(styles.top, { [className as string]: !!className })}
    >
      {unmatched}
    </Layout>
  );
}

Top.displayName = "Top";

export default Top;
