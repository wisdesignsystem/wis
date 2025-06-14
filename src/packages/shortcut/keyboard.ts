import { isUndefined } from "@/utils/is";

interface KeyboardCodeMap {
  [code: string]: string;
}

const keyboardCodeMap: KeyboardCodeMap = {
  Backspace: "Backspace",
  Tab: "Tab",
  Enter: "Enter",
  ShiftLeft: "Shift",
  ShiftRight: "Shift",
  ControlLeft: "Control",
  ControlRight: "Control",
  AltLeft: "Alt",
  AltRight: "Alt",
  Pause: "Pause",
  CapsLock: "CapsLock",
  Escape: "Escape",
  Space: "Space",
  PageUp: "PageUp",
  PageDown: "PageDown",
  End: "End",
  Home: "Home",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  PrintScreen: "PrintScreen",
  Insert: "Insert",
  Delete: "Delete",
  Digit0: "0",
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  KeyA: "A",
  KeyB: "B",
  KeyC: "C",
  KeyD: "D",
  KeyE: "E",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyI: "I",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  KeyM: "M",
  KeyN: "N",
  KeyO: "O",
  KeyP: "P",
  KeyQ: "Q",
  KeyR: "R",
  KeyS: "S",
  KeyT: "T",
  KeyU: "U",
  KeyV: "V",
  KeyW: "W",
  KeyX: "X",
  KeyY: "Y",
  KeyZ: "Z",
  MetaLeft: "Meta",
  MetaRight: "Meta",
  ContextMenu: "ContextMenu",
  Numpad0: "0",
  Numpad1: "1",
  Numpad2: "2",
  Numpad3: "3",
  Numpad4: "4",
  Numpad5: "5",
  Numpad6: "6",
  Numpad7: "7",
  Numpad8: "8",
  Numpad9: "9",
  NumpadMultiply: "*",
  NumpadAdd: "+",
  NumpadSubtract: "-",
  NumpadDecimal: ".",
  NumpadDivide: "/",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  NumLock: "NumLock",
  ScrollLock: "ScrollLock",
  Semicolon: ";",
  Equal: "=",
  Comma: ",",
  Minus: "-",
  Period: ".",
  Slash: "/",
  Backquote: "`",
  BracketLeft: "[",
  Backslash: "\\",
  BracketRight: "]",
  Quote: "'",
};

interface KeyboardKeyMap {
  [key: string]: string;
}

const keyboardKeyMap = Object.keys(keyboardCodeMap).reduce((result, code) => {
  const key = keyboardCodeMap[code];
  result[key.toUpperCase()] = key;
  return result;
}, {} as KeyboardKeyMap);

export function isCommandKeyboard(code?: string) {
  if (isUndefined(code)) {
    return false;
  }

  const key = keyboardCodeMap[code];
  return ["Control", "Shift", "Alt", "Meta"].includes(key);
}

/**
 * Matches the user-provided key to the system's standard key
 * The user-provided key is case-insensitive
 */
export function matchKeyboardByUserKey(userKey: string): string | undefined {
  return keyboardKeyMap[userKey.toUpperCase()];
}

export function matchKeyboard(code: string): string | undefined {
  return keyboardCodeMap[code];
}
