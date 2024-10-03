import { useRef, useEffect } from 'react'

import { createShortcut, createShortcutKeyByEvent } from './shortcut'

/**
 * Custom hook to manage keyboard shortcuts.
 *
 * @returns {Array} An array containing two functions:
 *   - onKeydown: Function to handle keydown events.
 *   - onShortcut: Function to register a new shortcut.
 *
 * @example
 * const [onKeydown, onShortcut] = useShortcut();
 *
 * // Register a shortcut
 * onShortcut('Control+S', () => {
 *   console.log('Shortcut Control+S triggered');
 * });
 */
export default function useShortcut() {
  const shortcutMap = useRef({})

  useEffect(() => {
    shortcutMap.current = {}
  }, [])

  function onKeydown(event) {
    const shortcutKey = createShortcutKeyByEvent(event)
    if (!shortcutKey) {
      return
    }

    const shortcut = shortcutMap.current[shortcutKey]
    if (shortcut) {
      event.preventDefault()
      shortcut.task(shortcut)
    }
  }

  function onShortcut(shortcutKey, task) {
    const shortcut = createShortcut(shortcutKey, task)
    if (!shortcut) {
      return
    }

    shortcutMap.current[shortcut.shortcutKey] = shortcut
    return shortcut
  }

  return [onKeydown, onShortcut]
}
