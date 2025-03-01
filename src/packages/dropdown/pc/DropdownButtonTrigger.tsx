import { Button } from "wis/button";
import { DownIcon } from "@wisdesign/lsicon";
import classNames from "classnames";
import { forwardRef } from "react";
import type { ForwardedRef } from "react";

import type { DropdownButtonTriggerProps } from "../dropdown";

import styles from "./Dropdown.module.scss";

const DropdownButtonTrigger = forwardRef(
  (
    {
      className,
      variant,
      disabled,
      text,
      icon,
      iconControl,
      size,
      shortcutKey,
      ...rest
    }: DropdownButtonTriggerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      className={classNames(styles["button-trigger"], {
        [className as string]: !!className,
      })}
    >
      <Button
        className={styles.button}
        variant={variant}
        disabled={disabled}
        text={text}
        icon={icon}
        iconControl={iconControl}
        size={size}
        shortcutKey={shortcutKey}
      />
      <div className={styles.wrapper} ref={ref}>
        <Button
          className={styles.arrow}
          variant={variant}
          disabled={disabled}
          size={size}
          icon={<DownIcon />}
          {...rest}
        />
      </div>
    </div>
  ),
);

DropdownButtonTrigger.displayName = "DropdownButtonTrigger";

export default DropdownButtonTrigger;
