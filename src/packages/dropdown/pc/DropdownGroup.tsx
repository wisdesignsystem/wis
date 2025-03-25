import { matchElement } from "wis/core";
import { isFunction } from "@/utils/is";
import { DropdownMenu as RDXDropdownMenu } from "radix-ui";
import { Children, cloneElement } from "react";

import type { DropdownGroupProps } from "../dropdown";

import styles from "./Dropdown.module.scss";

/**
 * @package dropdown
 */
function DropdownGroup({
  title,
  onSelect = () => {},
  children,
}: DropdownGroupProps) {
  const { matched } = matchElement(children, ["DropdownItem"]);

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {title && (
        <RDXDropdownMenu.Label className={styles.label}>
          {title}
        </RDXDropdownMenu.Label>
      )}
      <RDXDropdownMenu.Group>
        {Children.map(matched, (child) => {
          return cloneElement(child, {
            role: "menuitem",
            onSelect: () => {
              if (isFunction(child.props.onSelect)) {
                child.props.onSelect();
              }

              onSelect(child.props.value);
            },
          });
        })}
      </RDXDropdownMenu.Group>
    </>
  );
}

DropdownGroup.displayName = "DropdownGroup";

export default DropdownGroup;
