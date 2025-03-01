import { matchElement } from "wis/core";
import * as RDXToggleGroup from "@radix-ui/react-toggle-group";
import classNames from "classnames";
import { Children, cloneElement } from "react";

import type { ToggleGroupProps } from "../toggle";

import styles from "./ToggleGroup.module.scss";

/**
 *
 * @package toggle
 */
function ToggleGroup({
  className,
  variant = "basic",
  size = "md",
  disabled,
  value,
  defaultValue,
  multiple,
  children,
  onChange = () => {},
  ...rest
}: ToggleGroupProps) {
  const { matched } = matchElement(children, ["ToggleItem"]);

  return (
    // @ts-ignore
    <RDXToggleGroup.Root
      {...rest}
      className={classNames(styles.group, {
        [className as string]: !!className,
      })}
      data-variant={variant}
      data-size={size}
      disabled={disabled}
      type={multiple ? "multiple" : "single"}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
    >
      {Children.map(matched, (child) => {
        return cloneElement(child, { size, variant });
      })}
    </RDXToggleGroup.Root>
  );
}

ToggleGroup.displayName = "ToggleGroup";

export default ToggleGroup;
