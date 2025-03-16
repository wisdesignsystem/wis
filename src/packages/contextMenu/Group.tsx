import { isFunction } from "@/utils/is";
import { Children, isValidElement } from "react";
import type { ReactElement } from "react";

import Item from "./Item";
import type {
  ContextMenuGroupProps,
  ContextMenuItemProps,
} from "./contextMenu";

interface GroupProps extends ContextMenuGroupProps {
  mapper: (displayName: string) => string | undefined;
}

function Group({ mapper, onSelect = () => {}, children }: GroupProps) {
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
            role="menuitem"
            onClick={(event: Event) => {
              if (isFunction(childElement.props.onClick)) {
                childElement.props.onClick(event);
              }

              onSelect(childElement.props.value);
            }}
          />
        );
      })}
    </>
  );
}

export default Group;
