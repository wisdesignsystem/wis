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
 * onShortcut('Ctrl+S', () => {
 *   console.log('Shortcut Ctrl+S triggered');
 * });
 */
export default function useShortcut() {
  const shortcutMap = useRef({})

  useEffect(() => {
    return () => {
      shortcutMap.current = {}
    }
  })

  function onKeydown(event) {
    const shortcutKey = createShortcutKeyByEvent(event)
    const shortcut = shortcutMap.current[shortcutKey]
    if (shortcut) {
      event.preventDefault()
      shortcut.task(shortcut)
    }
  }

  function onShortcut(shortcutKey, task) {
    const shortcut = createShortcut(shortcutKey, task)
    shortcutMap.current[shortcut.shortcutKey] = shortcut
    return shortcut
  }

  return [onKeydown, onShortcut]
}
