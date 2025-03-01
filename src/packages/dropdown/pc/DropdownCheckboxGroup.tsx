import { matchElement } from "wis/core";
import { useContextValue } from "@/packages/contextMenu/export";
import * as RDXDropdownMenu from "@radix-ui/react-dropdown-menu";
import { Children, cloneElement } from "react";

import type { DropdownCheckboxGroupProps } from "../dropdown";

import styles from "./Dropdown.module.scss";

/**
 * @package dropdown
 */
function DropdownCheckboxGroup({
  name,
  title,
  value,
  defaultValue,
  onChange = () => {},
  children,
}: DropdownCheckboxGroupProps) {
  const { matched } = matchElement(children, ["DropdownItem"]);
  const [currentValue, onValueChange] = useContextValue({
    name,
    value,
    defaultValue,
  });

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {title && (
        <RDXDropdownMenu.Label className={styles.label}>
          {title}
        </RDXDropdownMenu.Label>
      )}
      {Children.map(matched, (child) => {
        const isChecked = currentValue?.includes(child.props.value);

        return cloneElement(child, {
          role: "menuitemcheckbox",
          checked: isChecked,
          onCheckedChange: (checked: boolean) => {
            let nextValue: string[] = [];
            if (Array.isArray(currentValue)) {
              nextValue = currentValue.slice();
            }

            if (checked) {
              nextValue.push(child.props.value);
            } else {
              nextValue = nextValue.filter(
                (v: string) => v !== child.props.value,
              );
            }

            onValueChange(nextValue);
            onChange(nextValue);
          },
        });
      })}
    </>
  );
}

DropdownCheckboxGroup.displayName = "DropdownCheckboxGroup";

export default DropdownCheckboxGroup;
