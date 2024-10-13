import { isFunction } from '@/utils/is'
import { useRef, useEffect, useState } from 'react'

import { createShortcutKeyByEvent, createShortcut, isCombineShortcut } from './shortcut'

const shortcutMap = {}

function hasGlobalShortcut() {
  return !!Object.keys(shortcutMap).length
}

function runShortcut(event) {
  const currentShortcutKey = createShortcutKeyByEvent(event)
  const currentShortcut = shortcutMap[currentShortcutKey]
  if (currentShortcut) {
    event.preventDefault()
    currentShortcut.task(currentShortcut)
  }
}

function on(shortcutKey, unregister, task) {
  if (!unregister && !hasGlobalShortcut()) {
    document.addEventListener('keydown', runShortcut)
  }

  let shortcut = createShortcut(shortcutKey, task)
  if (shortcut && isCombineShortcut(shortcut)) {
    if (!unregister && shortcutMap[shortcut.shortcutKey]) {
      console.warn(
        `Shortcut key: ${shortcut.showShortcutKey} has a shortcut key conflict. Please switch to other shortcut keys.`,
      )
      shortcut = undefined
    } else if (!unregister) {
      shortcutMap[shortcut.shortcutKey] = shortcut
    }
  }

  function off() {
    if (!unregister && shortcut) {
      delete shortcutMap[shortcut.shortcutKey]
    }

    if (!unregister && !hasGlobalShortcut()) {
      document.removeEventListener('keydown', runShortcut)
    }
  }

  return [shortcut, off]
}

/**
 * Register global shortcut function
 *
 * @param {string} shortcutKey
 * @param {boolean} unregister - Indicates if the shortcut key should be unregistered
 *
 * @typedef {Object} Shortcut
 * @property {string} shortcutKey - The key combination for the shortcut.
 * @property {boolean} ctrl - Indicates if the Control key is part of the shortcut.
 * @property {boolean} shift - Indicates if the Shift key is part of the shortcut.
 * @property {boolean} alt - Indicates if the Alt key is part of the shortcut.
 * @property {boolean} meta - Indicates if the Meta key (Command on Mac, Windows key on Windows) is part of the shortcut.
 * @property {string} key - The specific key for the shortcut.
 *
 * @returns {[Shortcut, function]} Return the shortcut key object and the callback function triggered by monitoring the shortcut key
 *
 * @example
 *
 * const onGlobalShortcut = useGlobalShortcut('Control+T')
 * const shortcut = onGlobalShortcut((shortcut) => {
 *  console.log('trigger Control+T shortcut', shortcut)
 * })
 */
export default function useGlobalShortcut(shortcutKey, unregister) {
  const task = useRef()
  const [shortcut, setShortcut] = useState()

  useEffect(() => {
    if (!shortcutKey) {
      setShortcut(undefined)
      return
    }

    const [currentShortcut, off] = on(shortcutKey, unregister, (shortcut) => {
      if (!isFunction(task.current)) {
        return
      }
      task.current(shortcut)
    })

    if (currentShortcut) {
      setShortcut(currentShortcut)
    }

    return () => {
      off()
    }
  }, [shortcutKey, unregister])

  function onShortcut(callback) {
    task.current = callback
    return shortcut
  }

  return [shortcut, onShortcut]
}
