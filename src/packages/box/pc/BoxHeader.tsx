import { matchElement, isElement } from "wis/core";
import classNames from "classnames";

import type { BoxHeaderProps } from "../box";

import styles from "./Box.module.scss";

function BoxHeader({
  className,
  title,
  description,
  toggleTip,
  children,
  ...rest
}: BoxHeaderProps) {
  const {
    elements: { BoxCollapse: collapse, BoxActions: actions, BoxMeta: meta },
  } = matchElement(children, ["BoxCollapse", "BoxActions", "BoxMeta"]);
  const isShowToggleTip = isElement(toggleTip, "ToggleTip");

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
                {isShowToggleTip && toggleTip}
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
      {meta && <div className={styles.meta}>{meta}</div>}
    </div>
  );
}

BoxHeader.displayName = "BoxHeader";

export default BoxHeader;
