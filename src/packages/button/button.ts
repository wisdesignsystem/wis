import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

export interface ButtonProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"children" | "onClick"
	> {
	/**
	 * The visual variant to apply to button.
	 */
	variant?: "primary" | "classic" | "secondary" | "tertiary" | "ghost";

	/**
	 * Sets the special status of the button.
	 */
	status?: "danger";

	disabled?: boolean;

	/**
	 * The text information displayed on the button.
	 */
	text?: string;

	/**
	 * The icon element will be displayed next to the button text.
	 */
	icon?: ReactNode;

	/**
	 * Controls the display position of the icon relative to the text.
	 */
	iconControl?: "prefix" | "suffix";

	size?: "sm" | "xs" | "md";

	/**
	 * Sets a global shortcut key, such as `Control+I`. When the user presses the combination key, the button's click event will be triggered.
	 */
	shortcutKey?: string;

	/**
	 * Event handler called when the button is clicked.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
