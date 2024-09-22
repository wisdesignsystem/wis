import { isFunction } from '@/utils/is'
import { useRef, useEffect, useState } from 'react'

const commands = ['ctrl', 'shift', 'alt', 'meta']
const commandKeys = ['control', 'shift', 'alt', 'meta']

const shortcutMap = {}
function isShortcut(shortcut) {
  return (shortcut.ctrl || shortcut.shift || shortcut.alt || shortcut.meta) && shortcut.key
}

function hasShortcut() {
  return !!Object.keys(shortcutMap).length
}

function createShortcutKey(shortcut) {
  const data = commands.filter((key) => shortcut[key])

  if (shortcut.key) {
    data.push(shortcut.key.toLowerCase())
  }

  return data.join('+')
}

function createShortcutKeyByEvent(event) {
  const data = commands.filter((key) => event[`${key}Key`])

  if (event.key) {
    data.push(event.key.toLowerCase())
  }

  return data.join('+')
}

function getShortcut(shortcutKey, task) {
  const shortcut = {
    shortcutKey: '',
    ctrl: false,
    shift: false,
    alt: false,
    meta: false,
    key: '',
    task,
  }

  shortcutKey.split('+').forEach((key) => {
    const keyboard = key.trim().toLowerCase()
    switch (keyboard) {
      case 'ctrl':
        shortcut.ctrl = true
        break
      case 'shift':
        shortcut.shift = true
        break
      case 'alt':
        shortcut.alt = true
        break
      case 'meta':
        shortcut.meta = true
        break
      default:
        shortcut.key = keyboard
    }
  })

  if (!isShortcut(shortcut)) {
    return
  }

  shortcut.shortcutKey = createShortcutKey(shortcut)

  return shortcut
}

function matchShortcut(event) {
  // the event key is a command key, will not match any shortcut
  if (commandKeys.includes(event.key.toLowerCase())) {
    return
  }

  const shortcutKey = createShortcutKeyByEvent(event)
  return shortcutMap[shortcutKey]
}

function on(shortcutKey, task) {
  function run(event) {
    const shortcut = matchShortcut(event)
    if (shortcut) {
      shortcut.task(shortcut)
    }
  }

  if (!hasShortcut()) {
    document.addEventListener('keydown', run)
  }

  let shortcut = getShortcut(shortcutKey, task)
  if (shortcut) {
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

    if (!hasShortcut()) {
      document.removeEventListener('keydown', run)
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
 * @property {boolean} ctrl - Indicates if the Ctrl key is part of the shortcut.
 * @property {boolean} shift - Indicates if the Shift key is part of the shortcut.
 * @property {boolean} alt - Indicates if the Alt key is part of the shortcut.
 * @property {boolean} meta - Indicates if the Meta key (Command on Mac, Windows key on Windows) is part of the shortcut.
 * @property {string} key - The specific key for the shortcut.
 *
 * @returns {[Shortcut, function]} Return the shortcut key object and the callback function triggered by monitoring the shortcut key
 *
 * @example
 *
 * const [shortcut, onShortcut] = useShortcut('ctrl+t')
 * onShortcut(() => {
 *  console.log('trigger ctrl+t shortcut')
 * })
 */
export default function useShortcut({ shortcutKey, disabled }) {
  const task = useRef()
  const [shortcut, setShortcut] = useState()

  useEffect(() => {
    if (!shortcutKey) {
      setShortcut(undefined)
      return
    }

    const [currentShortcut, off] = on(shortcutKey, (shortcut) => {
      if (!isFunction(task.current) || disabled) {
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
  }, [shortcutKey, disabled])

  function onShortcut(callback) {
    task.current = callback
  }

  return [shortcut, onShortcut]
}
