import { matchElement } from "wis/core";
import { isString } from "@/utils/is";
import { ContextMenu as RDXContextMenu } from "radix-ui";
import { Children, cloneElement } from "react";

import type { ContextMenuRadioGroupProps } from "../contextMenu";
import useContextValue from "../useContextValue";

import styles from "./ContextMenu.module.scss";

function ContextMenuRadioGroup({
  name,
  title,
  value,
  defaultValue,
  onChange = () => {},
  children,
}: ContextMenuRadioGroupProps) {
  const { matched } = matchElement(children, ["ContextMenuItem"]);
  const [currentValue, onValueChange] = useContextValue({
    name,
    value,
    defaultValue,
  });

  const radioValue = isString(currentValue) ? currentValue : undefined;

  return (
    <>
      <RDXContextMenu.Separator className={styles.separator} />
      {title && (
        <RDXContextMenu.Label className={styles.label}>
          {title}
        </RDXContextMenu.Label>
      )}
      <RDXContextMenu.RadioGroup
        value={radioValue}
        onValueChange={(value) => {
          onValueChange(value);
          onChange(value);
        }}
      >
        {Children.map(matched, (child) => {
          return cloneElement(child, { role: "menuitemradio" });
        })}
      </RDXContextMenu.RadioGroup>
    </>
  );
}

ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";

export default ContextMenuRadioGroup;
