import { matchElement } from "wis/core";
import { isFunction } from "@/utils/is";
import * as RDXContextMenu from "@radix-ui/react-context-menu";
import { Children, cloneElement } from "react";

import type { ContextMenuGroupProps } from "../contextMenu";

import styles from "./ContextMenu.module.scss";

function ContextMenuGroup({
  title,
  onSelect = () => {},
  children,
}: ContextMenuGroupProps) {
  const { matched } = matchElement(children, ["ContextMenuItem"]);

  return (
    <>
      <RDXContextMenu.Separator className={styles.separator} />
      {title && (
        <RDXContextMenu.Label className={styles.label}>
          {title}
        </RDXContextMenu.Label>
      )}
      <RDXContextMenu.Group>
        {Children.map(matched, (child) => {
          return cloneElement(child, {
            role: "menuitem",
            onClick: (event: Event) => {
              if (isFunction(child.props.onClick)) {
                child.props.onClick(event);
              }

              onSelect(child.props.value);
            },
          });
        })}
      </RDXContextMenu.Group>
    </>
  );
}

ContextMenuGroup.displayName = "ContextMenuGroup";

export default ContextMenuGroup;
