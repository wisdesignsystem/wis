import { isString, isUndefined } from "@/utils/is";
import type { KeyboardEvent } from "react";

import {
  isCommandKeyboard,
  matchKeyboard,
  matchKeyboardByUserKey,
} from "./keyboard";

export type ShortcutTask = (
  event: KeyboardEvent,
  shortcutMeta: ShortcutMeta,
) => void;

export class ShortcutMeta {
  ctrl = false;

  shift = false;

  alt = false;

  meta = false;

  key?: string;

  task?: ShortcutTask;

  constructor(data?: string | KeyboardEvent) {
    if (isUndefined(data)) {
      return;
    }

    if (isString(data)) {
      this.createByShortcutKey(data);
      return;
    }

    this.createByKeyboardEvent(data);
  }

  get shortcutKey() {
    if (!this.isValid()) {
      return undefined;
    }

    const result = [];
    if (this.ctrl) {
      result.push("Control");
    }

    if (this.shift) {
      result.push("Shift");
    }

    if (this.alt) {
      result.push("Alt");
    }

    if (this.meta) {
      result.push("Meta");
    }

    if (this.key) {
      result.push(this.key);
    }

    return result.join("+");
  }

  private createByShortcutKey(shortcutKey: string) {
    for (const key of shortcutKey.split("+")) {
      const keyString = key.toUpperCase();

      switch (keyString) {
        case "CTRL":
        case "CONTROL":
          this.ctrl = true;
          break;
        case "SHIFT":
          this.shift = true;
          break;
        case "ALT":
          this.alt = true;
          break;
        case "META":
          this.meta = true;
          break;
        default:
          this.key = matchKeyboardByUserKey(key);
          break;
      }
    }
  }

  private createByKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey) {
      this.ctrl = true;
    }

    if (event.shiftKey) {
      this.shift = true;
    }

    if (event.altKey) {
      this.alt = true;
    }

    if (event.metaKey) {
      this.meta = true;
    }

    if (isCommandKeyboard(event.code)) {
      return;
    }

    this.key = matchKeyboard(event.code);
  }

  bind(task: ShortcutTask) {
    this.task = task;
  }

  /**
   * Checks if the shortcut is a combination key
   */
  isCombination() {
    return (
      (this.ctrl || this.shift || this.alt || this.meta) &&
      !isUndefined(this.key)
    );
  }

  /**
   * A shortcut is considered valid only in the following scenarios:
   *
   * 1. When the non-functional key is not empty, it could be a combination shortcut or a single key shortcut.
   * 2. When the non-functional key is empty, it is valid if only one functional key is pressed, treating it as a single key shortcut scenario.
   */
  isValid() {
    return (
      !isUndefined(this.key) ||
      [this.ctrl, this.shift, this.alt, this.meta].filter(Boolean).length === 1
    );
  }
}
