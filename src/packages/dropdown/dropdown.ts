import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The controlled open state of the dropdown menu. Must be used in conjunction with `onOpen`.
   */
  open?: boolean;

  /**
   * The open state of the dropdown menu when it is initially rendered.
   */
  defaultOpen?: boolean;

  /**
   * When `true`, prevents the user from interacting with the dropdown.
   */
  disabled?: boolean;

  /**
   * The text information displayed on the dropdown menu.
   */
  text?: string;

  /**
   * Describe the dropdown menu.
   */
  description?: string;

  /**
   * The icon element will be displayed next to the dropdown menu text.
   */
  icon?: ReactNode;

  /**
   * The avatar element will be displayed next to the dropdown menu text.
   */
  avatar?: ReactNode;

  /**
   * The controlled dropdown menu arrow direction.
   */
  arrowDirection?: "down" | "right";

  /**
   * Event handler called when the dropdown menu is open state change.
   */
  onOpen?: (open: boolean) => void;
}

export interface DropdownTriggerProps
  extends Omit<DropdownProps, "open" | "defaultOpen" | "onOpen" | "children"> {}

export interface DropdownButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The controlled open state of the dropdown menu. Must be used in conjunction with `onOpen`.
   */
  open?: boolean;

  /**
   * The open state of the dropdown menu when it is initially rendered.
   */
  defaultOpen?: boolean;

  /**
   * The visual variant to apply to dropdown button.
   */
  variant?: "primary" | "classic" | "secondary";

  /**
   * When `true`, prevents the user from interacting with the dropdown button.
   */
  disabled?: boolean;

  /**
   * The text information displayed on the dropdown menu.
   */
  text?: string;

  /**
   * The icon element will be displayed next to the dropdown button text.
   */
  icon?: ReactNode;

  /**
   * Controls the display position of the icon relative to the text.
   */
  iconControl?: "prefix" | "suffix";

  /**
   * The size of the dropdown button.
   */
  size?: "sm" | "xs" | "md";

  /**
   * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the dropdown button click event will be triggered.
   */
  shortcutKey?: string;

  /**
   * Event handler called when the dropdown menu is open state change.
   */
  onOpen?: (open: boolean) => void;
}

export interface DropdownButtonTriggerProps
  extends Omit<
    DropdownButtonProps,
    "open" | "defaultOpen" | "onOpen" | "children"
  > {}

export interface DropdownCheckboxGroupProps {
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

export interface DropdownRadioGroupProps {
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

export interface DropdownGroupProps {
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

export interface DropdownItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  /**
   * Sets the special status of the item.
   */
  status?: "danger";

  /**
   * When `true`, prevents the user from interacting with the dropdown item.
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
   * The icon element will be displayed next to the dropdown item text.
   */
  icon?: ReactNode;

  /**
   * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the dropdown item's click event will be triggered.
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
