import { Shortcut, createShortcutMeta } from "wis/shortcut";
import attrs from "@/utils/attrs";
import * as RDXToggle from "@radix-ui/react-toggle";
import classNames from "classnames";
import { useRef } from "react";

import type { ToggleProps } from "../toggle";

import styles from "./Toggle.module.scss";

function Toggle({
  className,
  variant = "basic",
  disabled,
  text,
  icon,
  iconControl = "prefix",
  size = "md",
  shortcutKey,
  pressed,
  defaultPressed,
  onPressed = () => {},
  ...rest
}: ToggleProps) {
  const toggle = useRef<HTMLButtonElement | null>(null);

  const isIconButton = !text && !shortcutKey;
  const shortcut = createShortcutMeta(shortcutKey);

  function renderShortcut() {
    return (
      <Shortcut
        shortcutKey={shortcutKey}
        disabled={disabled}
        size={size}
        variant="dark"
        onKeyPressed={() => {
          if (!toggle.current) {
            return;
          }

          toggle.current.focus();
          toggle.current.click();
        }}
      />
    );
  }

  return (
    <RDXToggle.Root
      {...rest}
      ref={toggle}
      className={classNames(styles.toggle, {
        [className as string]: !!className,
      })}
      data-size={size}
      data-variant={variant}
      disabled={disabled}
      pressed={pressed}
      defaultPressed={defaultPressed}
      aria-keyshortcuts={shortcut.shortcutKey}
      {...attrs({
        "data-disabled": disabled,
        "data-icon": isIconButton,
      })}
      onPressedChange={onPressed}
    >
      {iconControl === "prefix" && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === "suffix" && icon}
      {renderShortcut()}
    </RDXToggle.Root>
  );
}

Toggle.displayName = "Toggle";

export default Toggle;
