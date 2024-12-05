import type { ResponsiveSize, Size } from "remote:self/grid";
import type { HTMLAttributes } from "react";

export interface ModuleProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The title text will show in the module header.
	 */
	title: string;

	/**
	 * Describe the module.
	 */
	description?: string;

	/**
	 * The visual variant to apply to module.
	 */
	variant?: "basic" | "ghost";

	/**
	 * Sets the number of columns the module occupies, with a total of 12 columns, and supports responsive settings.
	 */
	size?: Size | ResponsiveSize;

	/**
	 * Whether the module is collapsible.
	 */
	collapsible?: boolean;

	/**
	 * The controlled collapse state of the module. Must be used in conjunction with `onCollapsed`
	 */
	collapsed?: boolean;

	/**
	 * The collapse state of the module when it is initially rendered.
	 */
	defaultCollapsed?: boolean;

	/**
	 * Event handler called when the module is collapse state change.
	 */
	onCollapsed?: (collapsed: boolean) => void;
}
