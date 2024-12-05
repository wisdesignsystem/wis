import { Shortcut, useShortcut } from "remote:self/shortcut";
import type { ShortcutMeta } from "remote:self/shortcut";
import type { KeyboardEvent } from "react";
import { useState } from "react";

import styles from "./Shortcut.module.scss";

function Example() {
	const [text, setText] = useState("Hello World");

	const [onKeyDown, onShortcut] = useShortcut();
	onShortcut("Control+;", (event, shortcut) => {
		handleTrigger(event, shortcut);
	});
	onShortcut("Control+6", (event, shortcut) => {
		handleTrigger(event, shortcut);
	});

	function handleTrigger(event: KeyboardEvent, shortcut: ShortcutMeta) {
		window.alert(
			`${shortcut.ctrl ? "Control+" : ""}${shortcut.shift ? "Shift+" : ""}${shortcut.alt ? "Alt+" : ""}${shortcut.meta ? "Meta+" : ""}${shortcut.key}`,
		);
	}

	return (
		<div
			className={styles.row}
			onClick={() => {
				setText("hahah");
			}}
			onKeyDown={() => {}}
		>
			{text}
			<div className={styles.col}>
				<Shortcut onKeyPressed={handleTrigger} shortcutKey="Control+Y" />
				<Shortcut onKeyPressed={handleTrigger} shortcutKey="Shift+Y" />
				<Shortcut onKeyPressed={handleTrigger} shortcutKey="Alt+Y" />
				<Shortcut onKeyPressed={handleTrigger} shortcutKey="Meta+Y" />
				<Shortcut onKeyPressed={handleTrigger} shortcutKey="Alt+Meta+H" />
				<Shortcut
					onKeyPressed={handleTrigger}
					disabled
					shortcutKey="Control+U"
				/>
				<Shortcut onKeyPressed={handleTrigger} disabled shortcutKey="Shift+U" />
				<Shortcut onKeyPressed={handleTrigger} disabled shortcutKey="Alt+U" />
				<Shortcut onKeyPressed={handleTrigger} disabled shortcutKey="Meta+U" />
				<Shortcut
					onKeyPressed={handleTrigger}
					disabled
					shortcutKey="Control+Shift+Alt+Meta+U"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					shortcutKey="Control+I"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					shortcutKey="Shift+I"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					shortcutKey="Alt+I"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					shortcutKey="Meta+I"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					shortcutKey="Control+Shift+Alt+Meta+I"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					disabled
					shortcutKey="Control+O"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					disabled
					shortcutKey="Shift+O"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					disabled
					shortcutKey="Alt+O"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					disabled
					shortcutKey="Meta+O"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="dark"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+O"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					shortcutKey="Control+J"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					shortcutKey="Shift+J"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					shortcutKey="Alt+J"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					shortcutKey="Meta+J"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					shortcutKey="Control+Shift+Alt+Meta+J"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					disabled
					shortcutKey="Control+P"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					disabled
					shortcutKey="Shift+P"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					disabled
					shortcutKey="Alt+P"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					disabled
					shortcutKey="Meta+P"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					variant="ghost"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+P"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					shortcutKey="Control+Q"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					shortcutKey="Shift+Q"
				/>
				<Shortcut onKeyPressed={handleTrigger} size="sm" shortcutKey="Alt+Q" />
				<Shortcut onKeyPressed={handleTrigger} size="sm" shortcutKey="Meta+Q" />
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					shortcutKey="Control+Shift+Alt+Meta+Q"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					disabled
					shortcutKey="Control+W"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					disabled
					shortcutKey="Shift+W"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					disabled
					shortcutKey="Alt+W"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					disabled
					shortcutKey="Meta+W"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+W"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					shortcutKey="Control+R"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					shortcutKey="Shift+R"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					shortcutKey="Alt+R"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					shortcutKey="Meta+R"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					shortcutKey="Control+Shift+Alt+Meta+R"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					disabled
					shortcutKey="Control+T"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					disabled
					shortcutKey="Shift+T"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					disabled
					shortcutKey="Alt+T"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					disabled
					shortcutKey="Meta+T"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="dark"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+T"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					shortcutKey="Control+N"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					shortcutKey="Shift+N"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					shortcutKey="Alt+N"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					shortcutKey="Meta+N"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					shortcutKey="Control+Shift+Alt+Meta+N"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					disabled
					shortcutKey="Control+M"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					disabled
					shortcutKey="Shift+M"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					disabled
					shortcutKey="Alt+M"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					disabled
					shortcutKey="Meta+M"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="sm"
					variant="ghost"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+M"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					shortcutKey="Control+A"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					shortcutKey="Shift+A"
				/>
				<Shortcut onKeyPressed={handleTrigger} size="xs" shortcutKey="Alt+A" />
				<Shortcut onKeyPressed={handleTrigger} size="xs" shortcutKey="Meta+A" />
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					shortcutKey="Control+Shift+Alt+Meta+A"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					disabled
					shortcutKey="Control+S"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					disabled
					shortcutKey="Shift+S"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					disabled
					shortcutKey="Alt+S"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					disabled
					shortcutKey="Meta+S"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+S"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					shortcutKey="Control+D"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					shortcutKey="Shift+D"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					shortcutKey="Alt+D"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					shortcutKey="Meta+D"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					shortcutKey="Control+Shift+Alt+Meta+D"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					disabled
					shortcutKey="Control+X"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					disabled
					shortcutKey="Shift+X"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					disabled
					shortcutKey="Alt+X"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					disabled
					shortcutKey="Meta+X"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="dark"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+X"
				/>
			</div>

			<div className={styles.col}>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					shortcutKey="Control+F"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					shortcutKey="Shift+F"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					shortcutKey="Alt+F"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					shortcutKey="Meta+F"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					shortcutKey="Control+Shift+Alt+Meta+F"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					disabled
					shortcutKey="Control+L"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					disabled
					shortcutKey="Shift+L"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					disabled
					shortcutKey="Alt+L"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					disabled
					shortcutKey="Meta+L"
				/>
				<Shortcut
					onKeyPressed={handleTrigger}
					size="xs"
					variant="ghost"
					disabled
					shortcutKey="Control+Shift+Alt+Meta+L"
				/>
			</div>

			<button type="button" onKeyDown={onKeyDown}>
				Component Level Shortcut Register, Focus Me And Try Control + 6
			</button>
		</div>
	);
}

export default Example;
