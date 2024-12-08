import { isNumber, isObject, isString } from "@/utils/is";
import type { HTMLAttributes } from "react";

export type Size =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12";

export interface ResponsiveSize {
	base?: Size;
	sm?: Size;
	md?: Size;
	lg?: Size;
	xl?: Size;
	xxl?: Size;
}

export function isSize(size: unknown): size is Size {
	if (isNumber(size) || isString(size)) {
		return true;
	}

	return false;
}

export function isResponsiveSize(size: unknown): size is ResponsiveSize {
	if (isObject(size)) {
		return !Object.keys(size).some((key) => {
			return !["base", "sm", "md", "lg", "xl", "xxl"].includes(key);
		});
	}

	return false;
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
	gutter?: boolean;

	responsive?: boolean;
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
	size?: Size | ResponsiveSize;
	offset?: Size | ResponsiveSize;
}
