import { isNumber, isUndefined } from "@/utils/is";

import { isCommandKey, keyCodeMapper, keyMap } from "./keycode";

export interface Shortcut {
	shortcutKey: string;
	showShortcutKey: string;
	ctrl: boolean;
	shift: boolean;
	alt: boolean;
	meta: boolean;
	keyCode: number;
	key: string;
	task?: ShortcutTask;
}

export type ShortcutTask = (shortcut: Shortcut) => void;

export function isCombinationShortcut(shortcut?: Shortcut) {
	if (!shortcut) {
		return false;
	}

	return (
		(shortcut.ctrl || shortcut.shift || shortcut.alt || shortcut.meta) &&
		isNumber(shortcut.keyCode)
	);
}

export function generateShortcutKeyByShortcut(shortcut: Shortcut) {
	const result = [];
	if (shortcut.ctrl) {
		result.push("control");
	}

	if (shortcut.shift) {
		result.push("shift");
	}

	if (shortcut.alt) {
		result.push("alt");
	}

	if (shortcut.meta) {
		result.push("meta");
	}

	if (isNumber(shortcut.keyCode)) {
		result.push(shortcut.keyCode);
	}

	return result.join("+");
}

export function generateShowShortcutKeyByShortcut(shortcut: Shortcut) {
	const result = [];
	if (shortcut.ctrl) {
		result.push("control");
	}

	if (shortcut.shift) {
		result.push("shift");
	}

	if (shortcut.alt) {
		result.push("alt");
	}

	if (shortcut.meta) {
		result.push("meta");
	}

	if (isNumber(shortcut.keyCode)) {
		result.push(shortcut.key);
	}

	return result.join("+");
}

export function generateShortcutKeyByEvent(event: KeyboardEvent) {
	if (isCommandKey(keyCodeMapper(event.keyCode))) {
		return;
	}

	const result = []
	if (event.ctrlKey) {
		result.push("control")
	}

	if (event.shiftKey) {
		result.push("shift")
	}

	if (event.altKey) {
		result.push("alt")
	}

	if (event.metaKey) {
		result.push("meta")
	}

	if (!isUndefined(event.keyCode)) {
		result.push(keyCodeMapper(event.keyCode));
	}

	return result.join("+");
}

export function generateShortcut(key: string, task?: ShortcutTask) {
	const shortcut: Shortcut = {
		shortcutKey: "",
		showShortcutKey: "",
		ctrl: false,
		shift: false,
		alt: false,
		meta: false,
		key: "",
		keyCode: -1,
		task,
	};

	for (const item of key.split("+")) {
		const upperKey = item.trim().toUpperCase();
		switch (upperKey) {
			case "CONTROL":
				shortcut.ctrl = true;
				break;
			case "SHIFT":
				shortcut.shift = true;
				break;
			case "ALT":
				shortcut.alt = true;
				break;
			case "META":
				shortcut.meta = true;
				break;
			default:
				shortcut.key = item;
				shortcut.keyCode = keyMap[upperKey];
		}
	}

	if (!shortcut.keyCode) {
		return;
	}

	shortcut.shortcutKey = generateShortcutKeyByShortcut(shortcut);
	shortcut.showShortcutKey = generateShowShortcutKeyByShortcut(shortcut);
	return shortcut;
}
