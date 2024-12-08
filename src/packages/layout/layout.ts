import type { HTMLAttributes } from "react";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The title text will show in the layout header.
	 */
	title?: string;

	/**
	 * Describe the layout.
	 */
	description?: string;

	/**
	 * Controls whether the layout has margins in responsive mode.
	 * @private
	 */
	gutter?: boolean;

	/**
	 * Enable responsive functionality for the layout content area
	 * @private
	 */
	responsive?: boolean;
}

export interface MainProps extends LayoutProps {}

export interface LeftProps extends Omit<LayoutProps, "gutter" | "responsive"> {}

export interface RightProps
	extends Omit<LayoutProps, "gutter" | "responsive"> {}

export interface TopProps
	extends Omit<
		LayoutProps,
		"title" | "description" | "gutter" | "responsive"
	> {}

export interface BottomProps
	extends Omit<LayoutProps, "gutter" | "responsive"> {}
