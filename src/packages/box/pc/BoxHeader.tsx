import { matchElement } from "remote:self/core";
import classNames from "classnames";

import type { BoxHeaderProps } from "../box";

import styles from "./Box.module.scss";

function BoxHeader({
  className,
  title,
  description,
  children,
  ...rest
}: BoxHeaderProps) {
  const {
    elements: { BoxCollapse: collapse, BoxActions: actions },
  } = matchElement(children, ["BoxCollapse", "BoxActions"]);

  return (
    <div
      {...rest}
      className={classNames(styles.header, {
        [className as string]: !!className,
      })}
    >
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            {collapse}
            <div className={styles.container}>
              <div className={styles.title}>
                <span className={styles.label}>{title}</span>
              </div>
              {description && (
                <div className={styles.description} data-description>
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.actions}>{actions}</div>
      </div>
    </div>
  );
}

BoxHeader.displayName = "BoxHeader";

export default BoxHeader;
