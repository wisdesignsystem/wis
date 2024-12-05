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

	disabled?: boolean;

	size?: "sm" | "xs" | "md";

	/**
	 * make the global shortcut key is only used to display, but when pressing the combination key will not trigger the onKeyPressed event.
	 */
	readonly?: boolean;

	/**
	 * Event handler called when user pressed the shortcutKey.
	 */
	onKeyPressed?: (event: KeyboardEvent, shortcut: ShortcutMeta) => void;
}
