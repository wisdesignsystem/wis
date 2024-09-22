import { isNumber, isUndefined } from '@/utils/is'

import { keyCodeMapper, keyMap } from './keycode'

const commands = ['ctrl', 'shift', 'alt', 'meta']

/**
 * Shortcut object definition.
 *
 * @typedef {Object} Shortcut
 * @property {boolean} shortcutKey - The key for the shortcut object.
 * @property {boolean} ctrl - Indicates if the Ctrl key is pressed.
 * @property {boolean} shift - Indicates if the Shift key is pressed.
 * @property {boolean} alt - Indicates if the Alt key is pressed.
 * @property {boolean} meta - Indicates if the Meta key is pressed.
 * @property {number} keyCode - The keyCode of the shortcut.
 * @property {string} key - The user register key of the shortcut.
 * @property {Function} task - The task to run when the shortcut is triggered.
 */

/**
 * Checks if the given shortcut is a global shortcut.
 * A global shortcut is defined as having one of the modifier keys (ctrl, shift, alt, meta)
 * and a valid keyCode.
 *
 * @param {Shortcut} shortcut - The shortcut object to check.
 * @returns {boolean} - Returns true if the shortcut is a global shortcut, otherwise false.
 */
export function isCombineShortcut(shortcut = {}) {
  return (shortcut.ctrl || shortcut.shift || shortcut.alt || shortcut.meta) && isNumber(shortcut.keyCode)
}

/**
 * Creates a shortcut key combination string from the given shortcut object.
 *
 * @param {Shortcut} shortcut - The shortcut object containing key mappings.
 * @returns {string} The shortcut key string.
 */
export function createShortcutKey(shortcut) {
  const data = commands.filter((key) => shortcut[key])

  if (isNumber(shortcut.keyCode)) {
    data.push(shortcut.keyCode)
  }

  return data.join('+')
}

/**
 * Creates a shortcut key string based on the given event.
 *
 * This function filters through a list of command keys and checks if they are
 * pressed in the event. It also maps the event's keyCode to a corresponding
 * key string if the keyCode is defined. The resulting keys are joined with a
 * '+' separator to form the final shortcut key string.
 *
 * @param {Object} event - The event object containing key information.
 * @param {boolean} event.ctrlKey - Indicates if the Ctrl key is pressed.
 * @param {boolean} event.shiftKey - Indicates if the Shift key is pressed.
 * @param {boolean} event.altKey - Indicates if the Alt key is pressed.
 * @param {boolean} event.metaKey - Indicates if the Meta key is pressed.
 * @param {number} [event.keyCode] - The keyCode of the pressed key.
 * @returns {string} The shortcut key string.
 */
export function createShortcutKeyByEvent(event) {
  const data = commands.filter((key) => event[`${key}Key`])

  if (!isUndefined(event.keyCode)) {
    data.push(keyCodeMapper(event.keyCode))
  }

  return data.join('+')
}

/**
 * Creates a shortcut object based on the provided shortcut key and task.
 *
 * @param {string} shortcutKey - The shortcut key combination (e.g., 'Ctrl+Shift+A').
 * @param {Function} task - The task to be executed when the shortcut is triggered.
 * @returns {Shortcut} The shortcut object containing the parsed shortcut key and task.
 */
export function createShortcut(shortcutKey, task) {
  const shortcut = {
    shortcutKey: undefined,
    ctrl: false,
    shift: false,
    alt: false,
    meta: false,
    key: undefined,
    keyCode: undefined,
    task,
  }

  shortcutKey.split('+').forEach((key) => {
    switch (key) {
      case 'Control':
      case 'Ctrl':
        shortcut.ctrl = true
        break
      case 'Shift':
        shortcut.shift = true
        break
      case 'Alt':
        shortcut.alt = true
        break
      case 'Meta':
        shortcut.meta = true
        break
      default:
        shortcut.key = key
        shortcut.keyCode = keyMap[key]
    }
  })

  shortcut.shortcutKey = createShortcutKey(shortcut)
  return shortcut
}
