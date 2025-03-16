import type { ReactNode, ReactElement } from "react";
import { Children, isValidElement } from "react";

import CheckboxGroup from "./CheckboxGroup";
import Group from "./Group";
import Item from "./Item";
import RadioGroup from "./RadioGroup";
import type {
  ContextMenuItemProps,
  ContextMenuRadioGroupProps,
  ContextMenuGroupProps,
  ContextMenuCheckboxGroupProps,
} from "./contextMenu";

interface ShortcutProps {
  mapper: (displayName: string) => string | undefined;
  children: ReactNode;
}

function Shortcut({
  mapper = (displayName) => displayName,
  children,
}: ShortcutProps) {
  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }

        // @ts-ignore
        const displayName = mapper(child.type.displayName);
        if (!displayName) {
          return null;
        }

        if (displayName === "Item") {
          const childElement = child as ReactElement<ContextMenuItemProps>;

          return <Item mapper={mapper} {...childElement.props} />;
        }

        if (displayName === "RadioGroup") {
          const childElement =
            child as ReactElement<ContextMenuRadioGroupProps>;

          return <RadioGroup mapper={mapper} {...childElement.props} />;
        }

        if (displayName === "Group") {
          const childElement = child as ReactElement<ContextMenuGroupProps>;

          return <Group mapper={mapper} {...childElement.props} />;
        }

        if (displayName === "CheckboxGroup") {
          const childElement =
            child as ReactElement<ContextMenuCheckboxGroupProps>;

          return <CheckboxGroup mapper={mapper} {...childElement.props} />;
        }

        return null;
      })}
    </>
  );
}

export default Shortcut;
