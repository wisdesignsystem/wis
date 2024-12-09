import { isElement } from "remote:self/core";
import attrs from "@/utils/attrs";
import { DownIcon, RightIcon } from "@wisdesign/lsicon";
import classNames from "classnames";
import { forwardRef } from "react";
import type { ForwardedRef } from "react";

import type { DropdownTriggerProps } from "../dropdown";

import styles from "./Dropdown.module.scss";

const DropdownTrigger = forwardRef(
  (
    {
      avatar,
      disabled,
      icon,
      arrowDirection = "down",
      text,
      description,
      className,
      ...rest
    }: DropdownTriggerProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const isShowAvatar = isElement(avatar, "Avatar");
    const isShowIcon = !!icon;
    const isShowContent = !!text;

    return (
      <button
        className={classNames(styles.trigger, {
          [className as string]: !!className,
        })}
        ref={ref}
        aria-disabled={disabled}
        disabled={disabled}
        {...rest}
        {...attrs({
          "data-menu": !isShowContent,
        })}
      >
        {(isShowAvatar || isShowIcon) && (
          <div className={styles.prefix}>{isShowAvatar ? avatar : icon}</div>
        )}
        {isShowContent && (
          <div className={styles.content}>
            <span className={styles.text}>{text}</span>
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </div>
        )}
        {isShowContent && (
          <div className={styles.suffix}>
            {arrowDirection === "down" && <DownIcon />}
            {arrowDirection === "right" && <RightIcon />}
          </div>
        )}
      </button>
    );
  },
);

DropdownTrigger.displayName = "DropdownTrigger";

export default DropdownTrigger;
