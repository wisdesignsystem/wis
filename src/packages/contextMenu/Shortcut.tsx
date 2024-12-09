import type { ReactNode } from "react";
import { Children, isValidElement } from "react";

import CheckboxGroup from "./CheckboxGroup";
import Group from "./Group";
import Item from "./Item";
import RadioGroup from "./RadioGroup";

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
          return <Item mapper={mapper} {...child.props} />;
        }

        if (displayName === "RadioGroup") {
          return <RadioGroup mapper={mapper} {...child.props} />;
        }

        if (displayName === "Group") {
          return <Group mapper={mapper} {...child.props} />;
        }

        if (displayName === "CheckboxGroup") {
          return <CheckboxGroup mapper={mapper} {...child.props} />;
        }

        return null;
      })}
    </>
  );
}

export default Shortcut;
