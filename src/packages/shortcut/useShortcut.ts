import { isFunction, isUndefined } from "@/utils/is";
import type { KeyboardEvent } from "react";
import { useRef } from "react";

import type { ShortcutTask } from "./ShortcutMeta";
import { ShortcutMeta } from "./ShortcutMeta";

type ShortcutReturn = [
	(event: KeyboardEvent) => void,
	(shortcutKey?: string, task?: ShortcutTask) => ShortcutMeta | undefined,
];

/**
 * Custom hook to manage keyboard shortcuts.
 *
 * @example
 * const [onKeydown, onShortcut] = useShortcut();
 *
 * onShortcut('Control+S', () => {
 *   console.log('Shortcut Control+S triggered');
 * });
 */
export default function useShortcut(): ShortcutReturn {
	const shortcutMap = useRef<{ [key: string]: ShortcutMeta }>({});

	shortcutMap.current = {};

	function onKeydown(event: KeyboardEvent) {
		const shortcut = new ShortcutMeta(event);
		const shortcutKey = shortcut.shortcutKey;
		if (isUndefined(shortcutKey)) {
			return;
		}

		const currShortcut = shortcutMap.current[shortcutKey];
		if (currShortcut && isFunction(currShortcut.task)) {
			event.preventDefault();
			currShortcut.task(event, currShortcut);
		}
	}

	function onShortcut(shortcutKey?: string, task?: ShortcutTask) {
		const shortcut = new ShortcutMeta(shortcutKey);
		if (isUndefined(shortcut.shortcutKey)) {
			return;
		}

		if (isFunction(task)) {
			shortcut.bind(task);
		}

		shortcutMap.current[shortcut.shortcutKey] = shortcut;
		return shortcut;
	}

	return [onKeydown, onShortcut];
}
