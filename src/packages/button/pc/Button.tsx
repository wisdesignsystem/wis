import { useRef, forwardRef } from "react";
import { Shortcut, createShortcutMeta } from "wis/shortcut";
import attrs from "@/utils/attrs";
import classNames from "classnames";
import type { ForwardedRef } from "react";

import type { ButtonProps } from "../button";

import styles from "./Button.module.scss";

const Button = forwardRef(function Button(
  {
    className,
    variant = "secondary",
    status,
    disabled,
    text,
    icon,
    iconControl = "prefix",
    size = "md",
    shortcutKey,
    onClick = () => {},
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const button = useRef<HTMLButtonElement | null>(null);

  const isIconButton = !text && !shortcutKey;
  const shortcut = createShortcutMeta(shortcutKey);

  function renderShortcut() {
    return (
      <Shortcut
        shortcutKey={shortcutKey}
        disabled={disabled}
        size={size}
        variant={["primary", "classic"].includes(variant) ? "light" : "dark"}
        onKeyPressed={() => {
          if (button.current === null) {
            return;
          }

          button.current.focus();
          button.current.click();
        }}
      />
    );
  }

  return (
    <button
      {...rest}
      ref={(node: HTMLButtonElement) => {
        button.current = node;

        if (ref === null) {
          return;
        }

        // @ts-ignore
        ref(node);
      }}
      className={classNames(styles.button, {
        [className as string]: !!className,
      })}
      data-size={size}
      data-variant={variant}
      aria-disabled={disabled}
      aria-keyshortcuts={shortcut.shortcutKey}
      disabled={disabled}
      {...attrs({
        "data-status": status,
        "data-disabled": disabled,
        "data-icon": isIconButton,
      })}
      onClick={onClick}
    >
      {iconControl === "prefix" && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === "suffix" && icon}
      {renderShortcut()}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
