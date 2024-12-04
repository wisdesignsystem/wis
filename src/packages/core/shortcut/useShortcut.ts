import { useEffect, useRef } from "react";

import type { Shortcut, ShortcutTask } from "./shortcut";
import { generateShortcut, generateShortcutKeyByEvent } from "./shortcut";

/**
 * Custom hook to manage keyboard shortcuts.
 *
 * @example
 * const [onKeydown, onShortcut] = useShortcut();
 *
 * // Register a shortcut
 * onShortcut('Control+S', () => {
 *   console.log('Shortcut Control+S triggered');
 * });
 */
export default function useShortcut(): [
	(event: KeyboardEvent) => void,
	(shortcutKey: string, task: ShortcutTask) => Shortcut | undefined,
] {
	const shortcutMap = useRef<{ [key: string]: Shortcut }>({});

	useEffect(() => {
		shortcutMap.current = {};
	}, []);

	function onKeydown(event: KeyboardEvent) {
		const shortcutKey = generateShortcutKeyByEvent(event);
		if (!shortcutKey) {
			return;
		}

		const shortcut = shortcutMap.current[shortcutKey];
		if (shortcut) {
			event.preventDefault();
			if (shortcut.task) {
				shortcut.task(shortcut);
			}
		}
	}

	function onShortcut(shortcutKey: string, task: ShortcutTask) {
		const shortcut = generateShortcut(shortcutKey, task);
		if (!shortcut) {
			return;
		}

		shortcutMap.current[shortcut.shortcutKey] = shortcut;
		return shortcut;
	}

	return [onKeydown, onShortcut];
}
