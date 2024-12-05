import type {
	ContextMenuCheckboxGroupProps,
	ContextMenuGroupProps,
	ContextMenuItemProps,
	ContextMenuRadioGroupProps,
} from "@/packages/contextMenu/export";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * The controlled open state of the dropdown menu. Must be used in conjunction with `onOpen`
	 */
	open?: boolean;

	/**
	 * The open state of the dropdown menu when it is initially rendered.
	 */
	defaultOpen?: boolean;

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
	 * The controlled open state of the dropdown menu. Must be used in conjunction with `onOpen`
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

export interface DropdownItemProps extends ContextMenuItemProps {}

export interface DropdownCheckboxGroupProps
	extends ContextMenuCheckboxGroupProps {}

export interface DropdownRadioGroupProps extends ContextMenuRadioGroupProps {}

export interface DropdownGroupProps extends ContextMenuGroupProps {}
