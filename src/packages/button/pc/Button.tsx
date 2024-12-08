import { Shortcut, createShortcutMeta } from "remote:self/shortcut";
import attrs from "@/utils/attrs";
import classNames from "classnames";
import { useRef } from "react";

import type { ButtonProps } from "../button";

import styles from "./Button.module.scss";

function Button({
	className,
	variant = "secondary",
	status,
	disabled,
	text,
	icon,
	iconControl = "prefix",
	size = "md",
	shortcutKey,
	onClick = () => {},
	...rest
}: ButtonProps) {
	const button = useRef<HTMLButtonElement | null>(null);

	const isIconButton = !text && !shortcutKey;
	const shortcut = createShortcutMeta(shortcutKey);

	function renderShortcut() {
		return (
			<Shortcut
				shortcutKey={shortcutKey}
				disabled={disabled}
				size={size}
				variant={["primary", "classic"].includes(variant) ? "light" : "dark"}
				onKeyPressed={() => {
					if (!button.current) {
						return;
					}

					button.current.focus();
					button.current.click();
				}}
			/>
		);
	}

	return (
		<button
			{...rest}
			className={classNames(styles.button, {
				[className as string]: !!className,
			})}
			data-size={size}
			data-variant={variant}
			aria-disabled={disabled}
			aria-keyshortcuts={shortcut.shortcutKey}
			disabled={disabled}
			{...attrs({
				"data-status": status,
				"data-disabled": disabled,
				"data-icon": isIconButton,
			})}
			onClick={onClick}
		>
			{iconControl === "prefix" && icon}
			{!isIconButton && <span>{text}</span>}
			{iconControl === "suffix" && icon}
			{renderShortcut()}
		</button>
	);
}

Button.displayName = "Button";

export default Button;
