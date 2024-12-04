import type { HTMLAttributes, ReactNode } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * @hidden
	 */
	className?: string;

	/**
	 * Displays the avatar icon. This property is ignored if an avatar image URL is provided.
	 */
	icon?: ReactNode;

	/**
	 * Displays the avatar image.
	 */
	src?: string;

	/**
	 * Controls the display size of the avatar
	 */
	size?: "xs" | "sm" | "md" | "lg";

	/**
	 * Controls the display color of the avatar. auto color is not completely random, but randomly generated from a list of colors.
	 */
	color?: "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";

	/**
	 * Controls the display color schema of the avatar.
	 */
	colorSchema?: "dark" | "light" | "outline";

	/**
	 * 
	 */
	shape?: "circle" | "square";
	name: string;
	initials?: string;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	size?: "xs" | "sm" | "md" | "lg";
	color?: "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";
	colorSchema?: "dark" | "light" | "outline";
	shape?: "circle" | "square";
	children: ReactNode;
}
