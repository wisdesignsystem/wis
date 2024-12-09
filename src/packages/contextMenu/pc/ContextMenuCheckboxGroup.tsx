import { matchElement } from "remote:self/core";
import * as RDXContextMenu from "@radix-ui/react-context-menu";
import { Children, cloneElement } from "react";

import type { ContextMenuCheckboxGroupProps } from "../contextMenu";
import useContextValue from "../useContextValue";

import styles from "./ContextMenu.module.scss";

function ContextMenuCheckboxGroup({
  name,
  title,
  value,
  defaultValue,
  onChange = () => {},
  children,
}: ContextMenuCheckboxGroupProps) {
  const { matched } = matchElement(children, ["ContextMenuItem"]);
  const [currentValue, onValueChange] = useContextValue({
    name,
    value,
    defaultValue,
  });

  return (
    <>
      <RDXContextMenu.Separator className={styles.separator} />
      {title && (
        <RDXContextMenu.Label className={styles.label}>
          {title}
        </RDXContextMenu.Label>
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

ContextMenuCheckboxGroup.displayName = "ContextMenuCheckboxGroup";

export default ContextMenuCheckboxGroup;
