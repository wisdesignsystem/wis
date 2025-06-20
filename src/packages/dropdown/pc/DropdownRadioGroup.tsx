import { matchElement } from "wis/core";
import { useContextValue } from "@/packages/contextMenu/export";
import { isString } from "@/utils/is";
import { DropdownMenu as RDXDropdownMenu } from "radix-ui";
import { Children, cloneElement } from "react";

import type { DropdownRadioGroupProps } from "../dropdown";

import styles from "./Dropdown.module.scss";

/**
 * @package dropdown
 */
function DropdownRadioGroup({
  name,
  title,
  value,
  defaultValue,
  onChange = () => {},
  children,
}: DropdownRadioGroupProps) {
  const { matched } = matchElement(children, ["DropdownItem"]);
  const [currentValue, onValueChange] = useContextValue({
    name,
    value,
    defaultValue,
  });

  const radioValue = isString(currentValue) ? currentValue : undefined;

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {title && (
        <RDXDropdownMenu.Label className={styles.label}>
          {title}
        </RDXDropdownMenu.Label>
      )}
      <RDXDropdownMenu.RadioGroup
        value={radioValue}
        onValueChange={(value) => {
          onValueChange(value);
          onChange(value);
        }}
      >
        {Children.map(matched, (child) => {
          return cloneElement(child, { role: "menuitemradio" });
        })}
      </RDXDropdownMenu.RadioGroup>
    </>
  );
}

DropdownRadioGroup.displayName = "DropdownRadioGroup";

export default DropdownRadioGroup;
