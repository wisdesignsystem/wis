import { useEffect, useRef, useState } from "react";

import type { Shortcut, ShortcutTask } from "./shortcut";
import {
	generateShortcut,
	generateShortcutKeyByEvent,
	isCombinationShortcut,
} from "./shortcut";

const shortcutMap: { [key: string]: Shortcut } = {};

function hasGlobalShortcut() {
	return !!Object.keys(shortcutMap).length;
}

function runShortcut(event: KeyboardEvent) {
	const currentShortcutKey = generateShortcutKeyByEvent(event);
	if (!currentShortcutKey) {
		return;
	}

	const currentShortcut = shortcutMap[currentShortcutKey];
	if (!currentShortcut) {
		return;
	}

	if (!currentShortcut.task) {
		return;
	}

	event.preventDefault();
	currentShortcut?.task(currentShortcut);
}

function on(shortcutKey: string, unregister: boolean, task: ShortcutTask): [Shortcut | undefined, () => void] {
	if (!unregister && !hasGlobalShortcut()) {
		document.addEventListener("keydown", runShortcut);
	}

	let shortcut = generateShortcut(shortcutKey, task);
	if (shortcut && isCombinationShortcut(shortcut)) {
		if (!unregister && shortcutMap[shortcut.shortcutKey]) {
			console.warn(
				`Shortcut key: ${shortcut.showShortcutKey} has a shortcut key conflict. Please switch to other shortcut keys.`,
			);
			shortcut = undefined;
		} else if (!unregister) {
			shortcutMap[shortcut.shortcutKey] = shortcut;
		}
	}

	function off() {
		if (!unregister && shortcut) {
			delete shortcutMap[shortcut.shortcutKey];
		}

		if (!unregister && !hasGlobalShortcut()) {
			document.removeEventListener("keydown", runShortcut);
		}
	}

	return [shortcut, off];
}

/**
 * Register global shortcut function
 *
 * @example
 *
 * const onGlobalShortcut = useGlobalShortcut('Control+T')
 * const shortcut = onGlobalShortcut((shortcut) => {
 *  console.log('trigger Control+T shortcut', shortcut)
 * })
 */
export default function useGlobalShortcut(shortcutKey: string, unregister: boolean) {
	const task = useRef<ShortcutTask>();
	const [shortcut, setShortcut] = useState<Shortcut>();

	useEffect(() => {
		if (!shortcutKey) {
			setShortcut(undefined);
			return;
		}

		const [currentShortcut, off] = on(shortcutKey, unregister, (shortcut) => {
			if (!task.current) {
				return;
			}
			task.current(shortcut);
		});

		if (currentShortcut) {
			setShortcut(currentShortcut);
		}

		return () => {
			off();
		};
	}, [shortcutKey, unregister]);

	function onShortcut(callback: (shortcut: Shortcut) => void) {
		task.current = callback;
		return shortcut;
	}

	return [shortcut, onShortcut];
}
