import { Shortcut, createShortcutMeta } from "wis/shortcut";
import attrs from "@/utils/attrs";
import { ToggleGroup as RDXToggleGroup } from "radix-ui";
import classNames from "classnames";
import { useRef } from "react";

import type { ToggleItemProps } from "../toggle";

import styles from "./ToggleGroup.module.scss";

/**
 * @package toggle
 */
function ToggleItem({
  className,
  disabled,
  text,
  size,
  icon,
  iconControl = "prefix",
  shortcutKey,
  value,
  variant,
  ...rest
}: ToggleItemProps) {
  const item = useRef<HTMLButtonElement | null>(null);

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
          if (!item.current) {
            return;
          }

          item.current.focus();
          item.current.click();
        }}
      />
    );
  }

  return (
    <RDXToggleGroup.Item
      {...rest}
      ref={item}
      className={classNames(styles.item, {
        [className as string]: !!className,
      })}
      value={value}
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="button"
      aria-keyshortcuts={shortcut.shortcutKey}
      disabled={disabled}
      data-size={size}
      data-variant={variant}
      {...attrs({
        "data-disabled": disabled,
        "data-icon": isIconButton,
      })}
    >
      {iconControl === "prefix" && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === "suffix" && icon}
      {renderShortcut()}
    </RDXToggleGroup.Item>
  );
}

ToggleItem.displayName = "ToggleItem";

export default ToggleItem;
