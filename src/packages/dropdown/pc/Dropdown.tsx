import { matchElement } from "remote:self/core";
import { Context, Shortcut } from "@/packages/contextMenu/export";
import * as RDXDropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import type { DropdownProps } from "../dropdown";

import DropdownTrigger from "./DropdownTrigger";

import mapper from "../mapper";

import styles from "./Dropdown.module.scss";

function Dropdown({
  defaultOpen,
  open,
  onOpen,
  children,
  ...rest
}: DropdownProps) {
  const [contextValue, setContextValue] = useState({});
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
  const hasCheckedItem =
    !!dropdownCheckboxGroups?.length || !!dropdownRadioGroups?.length;

  return (
    <Context.Provider value={{ contextValue, setContextValue }}>
      <RDXDropdownMenu.Root
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpen}
      >
        <Shortcut mapper={mapper}>{matched}</Shortcut>
        <RDXDropdownMenu.Trigger disabled={rest.disabled} asChild>
          <DropdownTrigger {...rest} />
        </RDXDropdownMenu.Trigger>
        <RDXDropdownMenu.Portal>
          <RDXDropdownMenu.Content
            className={styles.popper}
            data-variant={hasCheckedItem ? "checkbox" : "normal"}
            loop
            align="start"
            sideOffset={8}
          >
            {matched}
          </RDXDropdownMenu.Content>
        </RDXDropdownMenu.Portal>
      </RDXDropdownMenu.Root>
    </Context.Provider>
  );
}

Dropdown.displayName = "Dropdown";

export default Dropdown;
