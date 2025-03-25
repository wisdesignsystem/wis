import { isFunction, isUndefined } from "@/utils/is";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";

import type { ShortcutTask } from "./ShortcutMeta";
import { ShortcutMeta } from "./ShortcutMeta";

const shortcutMap: { [key: string]: ShortcutMeta } = {};

function hasGlobalShortcut() {
  return !!Object.keys(shortcutMap).length;
}

function runShortcut(event: KeyboardEvent) {
  const shortcut = new ShortcutMeta(event as unknown as ReactKeyboardEvent);
  if (isUndefined(shortcut.shortcutKey)) {
    return;
  }

  const currentShortcut = shortcutMap[shortcut.shortcutKey];
  if (!currentShortcut) {
    return;
  }

  if (!isFunction(currentShortcut.task)) {
    return;
  }

  event.preventDefault();
  currentShortcut?.task(event, currentShortcut);
}

function on(
  shortcutKey: string,
  task?: ShortcutTask,
  readonly?: boolean,
): [ShortcutMeta | undefined, () => void] {
  const shortcut = new ShortcutMeta(shortcutKey);
  if (isUndefined(shortcut.shortcutKey) || !shortcut.isCombination()) {
    return [undefined, () => {}];
  }

  if (readonly) {
    return [shortcut, () => {}];
  }

  if (!hasGlobalShortcut()) {
    document.addEventListener("keydown", runShortcut);
  }

  if (isFunction(task)) {
    shortcut.bind(task);
  }

  if (shortcutMap[shortcut.shortcutKey]) {
    console.warn(
      `shortcut key: ${shortcut.shortcutKey} has a shortcut key conflict. Please switch to other shortcut keys.`,
    );
  } else {
    shortcutMap[shortcut.shortcutKey] = shortcut;
  }

  function off() {
    if (shortcut.shortcutKey) {
      delete shortcutMap[shortcut.shortcutKey];
    }

    if (!hasGlobalShortcut()) {
      document.removeEventListener("keydown", runShortcut);
    }
  }

  return [shortcut, off];
}

type useGlobalShortcutReturn = [
  ShortcutMeta | undefined,
  (callback: ShortcutTask) => ShortcutMeta | undefined,
];

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
export default function useGlobalShortcut(
  shortcutKey?: string,
  readonly?: boolean,
): useGlobalShortcutReturn {
  const task = useRef<ShortcutTask>(undefined);
  const [shortcut, setShortcut] = useState<ShortcutMeta>();

  useEffect(() => {
    if (!shortcutKey) {
      setShortcut(undefined);
      return;
    }

    const [currentShortcut, off] = on(
      shortcutKey,
      (event, shortcut) => {
        if (!task.current) {
          return;
        }
        task.current(event, shortcut);
      },
      readonly,
    );

    if (currentShortcut) {
      setShortcut(currentShortcut);
    }

    return () => {
      off();
    };
  }, [shortcutKey, readonly]);

  function onShortcut(callback?: ShortcutTask) {
    task.current = callback;
    return shortcut;
  }

  return [shortcut, onShortcut];
}
