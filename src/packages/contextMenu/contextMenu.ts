import type { HTMLAttributes, ReactNode } from "react";

export interface ContextMenuProps {
  /**
   * When `true`, prevents the user from interacting with the context menu.
   */
  disabled?: boolean;

  /**
   * @ignore
   */
  children: ReactNode;
}

export interface ContextMenuCheckboxGroupProps {
  /**
   * The unique name of group.
   */
  name: string;

  /**
   * The group title text will show at the beginning of the group.
   */
  title: string;

  /**
   * The value of selected item in the group. Must be used in conjunction with `onChange`.
   */
  value?: string[];

  /**
   * The default value of selected item in the group.
   */
  defaultValue?: string[];

  /**
   * @ignore
   */
  children: ReactNode;

  /**
   * Event handler called when group item click.
   */
  onChange?: (values: string[]) => void;
}

export interface ContextMenuRadioGroupProps {
  /**
   * The unique name of group.
   */
  name: string;

  /**
   * The group title text will show at the beginning of the group.
   */
  title: string;

  /**
   * The value of selected item in the group. Must be used in conjunction with `onChecked`.
   */
  value?: string;

  /**
   * The default value of selected item in the group.
   */
  defaultValue?: string;

  /**
   * @ignore
   */
  children: ReactNode;

  /**
   * Event handler called when group item click.
   */
  onChange?: (value: string) => void;
}

export interface ContextMenuGroupProps {
  /**
   * The group title text will show at the beginning of the group.
   */
  title: string;

  /**
   * @ignore
   */
  children: ReactNode;

  /**
   * Event handler called when group item click.
   */
  onSelect?: (value: string) => void;
}

export interface ContextMenuItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  /**
   * Sets the special status of the item.
   */
  status?: "none" | "danger";

  /**
   * When `true`, prevents the user from interacting with the context menu item.
   */
  disabled?: boolean;

  /**
   * The text information displayed on the item.
   */
  label: string;

  /**
   * The unique value of the item.
   */
  value: string;

  /**
   * The icon element will be displayed next to the context menu item text.
   */
  icon?: ReactNode;

  /**
   * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the context menu item's click event will be triggered.
   */
  shortcutKey?: string;

  /**
   * @private
   */
  role?: "menuitem" | "menuitemcheckbox" | "menuitemradio";

  /**
   * @private
   */
  checked?: boolean;

  /**
   * Event handler called when the user select an item (via mouse or keyboard).
   */
  onClick?: (event: Event) => void;

  /**
   * @private
   */
  onCheckedChange?: (checked: boolean) => void;
}
