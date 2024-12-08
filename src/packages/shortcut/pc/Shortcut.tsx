import attrs from "@/utils/attrs";
import classNames from "classnames";

import type { ShortcutProps } from "../shortcut";
import useGlobalShortcut from "../useGlobalShortcut";

import styles from "./Shortcut.module.scss";

function Shortcut({
	className,
	shortcutKey,
	readonly,
	disabled,
	variant = "light",
	size = "md",
	onKeyPressed = () => {},
	...rest
}: ShortcutProps) {
	const [shortcut, onGlobalShortcut] = useGlobalShortcut(shortcutKey, readonly);
	onGlobalShortcut((event, shortcut) => {
		if (disabled) {
			return;
		}
		onKeyPressed(event, shortcut);
	});

	if (!shortcut) {
		return null;
	}

	return (
		<div
			{...rest}
			className={classNames(styles.shortcut, {
				[className as string]: !!className,
			})}
			data-variant={variant}
			data-size={size}
			{...attrs({ "data-disabled": disabled })}
		>
			{shortcut.ctrl && <span className={styles.command}>⌃</span>}
			{shortcut.shift && <span className={styles.command}>⇧</span>}
			{shortcut.alt && <span className={styles.command}>⌥</span>}
			{shortcut.meta && <span className={styles.command}>⌘</span>}
			<span className={styles.key}>{shortcut.key}</span>
		</div>
	);
}

Shortcut.displayName = "Shortcut";

export default Shortcut;
