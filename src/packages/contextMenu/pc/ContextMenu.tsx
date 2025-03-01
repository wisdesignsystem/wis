import { matchElement } from "wis/core";
import * as RDXContextMenu from "@radix-ui/react-context-menu";
import type { ReactNode } from "react";
import { Children, useState } from "react";

import Context from "../Context";
import Shortcut from "../Shortcut";
import type { ContextMenuProps } from "../contextMenu";
import mapper from "../mapper";

import styles from "./ContextMenu.module.scss";

function ContextMenu({ children, disabled }: ContextMenuProps) {
  const [contextValue, setContextValue] = useState({});
  const {
    matched,
    unmatched,
    elements: {
      ContextMenuCheckboxGroup: contextMenuCheckboxGroups,
      ContextMenuRadioGroup: contextMenuRadioGroups,
    },
  } = matchElement(
    children,
    [
      "ContextMenuItem",
      "ContextMenuGroup",
      "ContextMenuCheckboxGroup",
      "ContextMenuRadioGroup",
    ],
    false,
  );
  const hasCheckedItem =
    !!contextMenuCheckboxGroups?.length || !!contextMenuRadioGroups?.length;

  return (
    <Context.Provider value={{ contextValue, setContextValue }}>
      <RDXContextMenu.Root>
        <Shortcut mapper={mapper}>{matched}</Shortcut>
        <RDXContextMenu.Trigger disabled={disabled}>
          {!!unmatched.length &&
            (unmatched.length > 1 ? Children.only(unmatched) : unmatched[0])}
        </RDXContextMenu.Trigger>
        <RDXContextMenu.Portal>
          <RDXContextMenu.Content
            className={styles.popper}
            data-variant={hasCheckedItem ? "checkbox" : "normal"}
            loop
          >
            {matched}
          </RDXContextMenu.Content>
        </RDXContextMenu.Portal>
      </RDXContextMenu.Root>
    </Context.Provider>
  );
}

ContextMenu.displayName = "ContextMenu";
ContextMenu.getSymbiote = (children: ReactNode) => {
  const { unmatched } = matchElement(
    children,
    [
      "ContextMenuItem",
      "ContextMenuGroup",
      "ContextMenuCheckboxGroup",
      "ContextMenuRadioGroup",
    ],
    false,
  );

  return unmatched[0];
};

export default ContextMenu;
