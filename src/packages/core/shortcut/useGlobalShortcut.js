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

function on(shortcutKey, task) {
  if (!hasGlobalShortcut()) {
    document.addEventListener('keydown', runShortcut)
  }

  let shortcut = createShortcut(shortcutKey, task)
  if (shortcut && isCombineShortcut(shortcut)) {
    if (shortcutMap[shortcut.shortcutKey]) {
      console.warn(
        `Shortcut key: ${shortcut.shortcutKey} has a shortcut key conflict. Please switch to other shortcut keys.`,
      )
      shortcut = undefined
    } else {
      shortcutMap[shortcut.shortcutKey] = shortcut
    }
  }

  function off() {
    if (shortcut) {
      delete shortcutMap[shortcut.shortcutKey]
    }

    if (!hasGlobalShortcut()) {
      document.removeEventListener('keydown', runShortcut)
    }
  }

  return [shortcut, off]
}

/**
 * Register global shortcut function
 *
 * @param {string} shortcutKey
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
export default function useGlobalShortcut(shortcutKey) {
  const task = useRef()
  const [shortcut, setShortcut] = useState()

  useEffect(() => {
    if (!shortcutKey) {
      setShortcut(undefined)
      return
    }

    const [currentShortcut, off] = on(shortcutKey, (shortcut) => {
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
  }, [shortcutKey])

  function onShortcut(callback) {
    task.current = callback
    return shortcut
  }

  return onShortcut
}
