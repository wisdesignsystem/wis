import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * The visual variant to apply to toggle.
   */
  variant?: "basic" | "ghost";

  /**
   * When `true`, prevents the user from interacting with the toggle.
   */
  disabled?: boolean;

  /**
   * The text information displayed on the toggle.
   */
  text?: string;

  /**
   * The icon element will be displayed next to the toggle text.
   */
  icon?: ReactNode;

  /**
   * Controls the display position of the icon relative to the text.
   */
  iconControl?: "prefix" | "suffix";

  /**
   * The size of the toggle.
   */
  size?: "sm" | "xs" | "md";

  /**
   * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the toggle's click event will be triggered.
   */
  shortcutKey?: string;

  /**
   * The press state of the toggle. Must be used in conjunction with `onPressed`.
   */
  pressed?: boolean;

  /**
   * The default press state of the toggle.
   */
  defaultPressed?: boolean;

  /**
   * Event handler called when the toggle press state is changed.
   */
  onPressed?: (pressed: boolean) => void;
}

export interface ToggleGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * The size of the toggle group.
   */
  size?: "sm" | "md";

  /**
   * The visual variant to apply to toggle group.
   */
  variant?: "basic" | "compact";

  /**
   * When `true`, prevents the user from interacting with the toggle item in toggle group.
   */
  disabled?: boolean;

  /**
   * The value of selected item in the group. Must be used in conjunction with `onChange`.
   */
  value?: string | string[];

  /**
   * The default value of selected item in the group.
   */
  defaultValue?: string | string[];

  /**
   * When `true`, allows multiple items to be selected.
   */
  multiple?: boolean;

  /**
   * Event handler called when the toggle group item press state changed.
   */
  onChange?: (value: string | string[]) => void;
}

export interface ToggleItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * When `true`, prevents the user from interacting with the toggle item.
   */
  disabled?: boolean;

  /**
   * The text information displayed on the toggle item.
   */
  text?: string;

  /**
   * The icon element will be displayed next to the toggle item text.
   */
  icon?: ReactNode;

  /**
   * Controls the display position of the icon relative to the text.
   */
  iconControl?: "prefix" | "suffix";

  /**
   * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the toggle's click event will be triggered.
   */
  shortcutKey?: string;

  /**
   * The unique value of the toggle item.
   */
  value: string;

  /**
   * The size of the toggle item.
   */
  size?: "sm" | "md";

  /**
   * @private
   */
  variant?: "basic" | "compact";
}
