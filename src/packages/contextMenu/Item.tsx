import { useGlobalShortcut } from "wis/shortcut";
import { Children, isValidElement } from "react";
import type { ReactElement } from "react";

import Shortcut from "./Shortcut";
import type { ContextMenuItemProps } from "./contextMenu";

interface ItemProps extends ContextMenuItemProps {
  mapper: (displayName: string) => string | undefined;
}

function Item({
  mapper,
  disabled,
  role,
  checked,
  shortcutKey,
  children,
  onCheckedChange = () => {},
}: ItemProps) {
  const matched: ReactElement[] = [];
  Children.toArray(children).some((element) => {
    if (!isValidElement(element)) {
      return;
    }

    // @ts-ignore
    const displayName = mapper(element.type.displayName);
    if (!displayName) {
      return;
    }

    const isMatched = ["Item", "Group", "CheckboxGroup", "RadioGroup"].includes(
      displayName,
    );

    if (isMatched) {
      matched.push(element);
    }

    return isMatched;
  });

  const hasSubmenu = matched.length > 0;
  const [_, onGlobalShortcut] = useGlobalShortcut(
    hasSubmenu ? undefined : shortcutKey,
  );
  onGlobalShortcut(() => {
    if (disabled) {
      return;
    }

    if (role === "menuitemcheckbox") {
      onCheckedChange(!checked);
      return;
    }

    if (role === "menuitemradio") {
      onCheckedChange(!checked);
      return;
    }
  });

  if (hasSubmenu) {
    return <Shortcut mapper={mapper}>{matched}</Shortcut>;
  }

  return null;
}

export default Item;
