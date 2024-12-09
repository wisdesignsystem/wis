import { isFunction } from "@/utils/is";
import { Children, isValidElement } from "react";

import Item from "./Item";
import type { ContextMenuGroupProps } from "./contextMenu";

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

        // @ts-ignore
        const displayName = mapper(child.type.displayName);
        if (displayName !== "Item") {
          return null;
        }

        return (
          <Item
            {...child.props}
            mapper={mapper}
            role="menuitem"
            onClick={(event: Event) => {
              if (isFunction(child.props.onClick)) {
                child.props.onClick(event);
              }

              onSelect(child.props.value);
            }}
          />
        );
      })}
    </>
  );
}

export default Group;
