import { ShortcutMeta } from "./ShortcutMeta";

export default function createShortcutMeta(shortcutKey?: string) {
	return new ShortcutMeta(shortcutKey);
}
