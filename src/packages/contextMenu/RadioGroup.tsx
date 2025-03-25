import { Children, isValidElement } from "react";
import type { ReactElement } from "react";

import Item from "./Item";
import type {
  ContextMenuRadioGroupProps,
  ContextMenuItemProps,
} from "./contextMenu";
import useContextValue from "./useContextValue";

interface RadioGroupProps extends ContextMenuRadioGroupProps {
  mapper: (displayName: string) => string | undefined;
}

function RadioGroup({
  mapper,
  name,
  value,
  defaultValue,
  children,
  onChange = () => {},
}: RadioGroupProps) {
  const [_, onValueChange] = useContextValue({ name, value, defaultValue });

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }

        const childElement = child as ReactElement<ContextMenuItemProps>;

        // @ts-ignore
        const displayName = mapper(childElement.type.displayName);
        if (displayName !== "Item") {
          return null;
        }

        return (
          <Item
            {...childElement.props}
            mapper={mapper}
            role="menuitemradio"
            onCheckedChange={() => {
              onChange(childElement.props.value);
              onValueChange(childElement.props.value);
            }}
          />
        );
      })}
    </>
  );
}

export default RadioGroup;
