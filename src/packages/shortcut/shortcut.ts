import type { HTMLAttributes, KeyboardEvent } from "react";

import type { ShortcutMeta } from "./ShortcutMeta";

export interface ShortcutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the onKeyPressed event will be triggered.
   */
  shortcutKey?: string;

  /**
   * The visual variant to apply to shortcut.
   */
  variant?: "light" | "dark" | "ghost";

  /**
   * When `true`, prevents the user from interacting with the shortcut.
   */
  disabled?: boolean;

  /**
   * The size of the shortcut.
   */
  size?: "sm" | "xs" | "md";

  /**
   * @private
   */
  readonly?: boolean;

  /**
   * Event handler called when user pressed the shortcutKey.
   */
  onKeyPressed?: (event: KeyboardEvent, shortcut: ShortcutMeta) => void;
}
