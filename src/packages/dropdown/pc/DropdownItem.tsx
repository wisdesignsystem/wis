import { matchElement } from "remote:self/core";
import { Shortcut, createShortcutMeta } from "remote:self/shortcut";
import { Context } from "@/packages/contextMenu/export";
import attrs from "@/utils/attrs";
import * as RDXDropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, RightIcon } from "@wisdesign/lsicon";
import classNames from "classnames";
import { useContext, useRef } from "react";

import type { DropdownItemProps } from "../dropdown";

import styles from "./Dropdown.module.scss";

function DropdownItem({
  role,
  disabled,
  label,
  icon,
  value,
  shortcutKey,
  status,
  checked,
  onClick = () => {},
  onCheckedChange = () => {},
  children,
}: DropdownItemProps) {
  const { contextType } = useContext(Context);
  const item = useRef(null);
  const {
    matched,
    elements: {
      DropdownCheckboxGroup: dropdownCheckboxGroups,
      DropdownRadioGroup: dropdownRadioGroups,
    },
  } = matchElement(children, [
    "DropdownItem",
    "DropdownGroup",
    "DropdownCheckboxGroup",
    "DropdownRadioGroup",
  ]);

  const isSupportSubmenu = !!matched.length && contextType !== "DropdownButton";
  const shortcut = createShortcutMeta(shortcutKey);

  function renderShortcut() {
    return (
      <Shortcut
        shortcutKey={shortcutKey}
        disabled={disabled}
        readonly
        size="md"
        variant="ghost"
      />
    );
  }

  function renderItem() {
    return (
      <div className={styles.title}>
        <div className={styles.left}>
          {icon}
          <span>{label}</span>
        </div>
        <div className={styles.right}>
          {isSupportSubmenu ? <RightIcon /> : renderShortcut()}
        </div>
      </div>
    );
  }

  if (role === "menuitemcheckbox") {
    return (
      <RDXDropdownMenu.CheckboxItem
        ref={item}
        className={styles.item}
        checked={checked}
        disabled={disabled}
        textValue={label}
        aria-keyshortcuts={shortcut.shortcutKey}
        onCheckedChange={onCheckedChange}
      >
        <RDXDropdownMenu.ItemIndicator
          className={styles.checked}
          {...attrs({ "data-disabled": disabled })}
        >
          <CheckIcon />
        </RDXDropdownMenu.ItemIndicator>
        {renderItem()}
      </RDXDropdownMenu.CheckboxItem>
    );
  }

  if (role === "menuitemradio") {
    return (
      <RDXDropdownMenu.RadioItem
        ref={item}
        className={styles.item}
        aria-keyshortcuts={shortcut.shortcutKey}
        disabled={disabled}
        value={value}
        textValue={label}
      >
        <RDXDropdownMenu.ItemIndicator
          className={styles.checked}
          {...attrs({ "data-disabled": disabled })}
        >
          <CheckIcon />
        </RDXDropdownMenu.ItemIndicator>
        {renderItem()}
      </RDXDropdownMenu.RadioItem>
    );
  }

  if (isSupportSubmenu) {
    const hasCheckedItem =
      !!dropdownCheckboxGroups?.length || !!dropdownRadioGroups?.length;

    return (
      <RDXDropdownMenu.Sub>
        <RDXDropdownMenu.SubTrigger className={styles.item} disabled={disabled}>
          {renderItem()}
        </RDXDropdownMenu.SubTrigger>
        <RDXDropdownMenu.Portal>
          <RDXDropdownMenu.SubContent
            className={classNames(styles.popper, {
              [styles["with-checked"]]: hasCheckedItem,
            })}
            loop
          >
            {matched}
          </RDXDropdownMenu.SubContent>
        </RDXDropdownMenu.Portal>
      </RDXDropdownMenu.Sub>
    );
  }

  return (
    <RDXDropdownMenu.Item
      ref={item}
      className={styles.item}
      disabled={disabled}
      textValue={label}
      aria-keyshortcuts={shortcut.shortcutKey}
      onSelect={(event) => {
        onClick(event);
      }}
      {...attrs({
        "data-status": status,
      })}
    >
      {renderItem()}
    </RDXDropdownMenu.Item>
  );
}

DropdownItem.displayName = "DropdownItem";

export default DropdownItem;
