import Shortcut from 'remote:self/Shortcut'
import { useShortcut } from 'remote:self/core'

import styles from './Shortcut.module.less'

function Example() {
  const [onKeyDown, onShortcut] = useShortcut()
  onShortcut('Ctrl+;', (shortcut) => {
    handleTrigger(shortcut)
  })
  onShortcut('Ctrl+6', (shortcut) => {
    handleTrigger(shortcut)
  })

  function handleTrigger(shortcut) {
    window.alert(
      `${shortcut.ctrl ? 'Control + ' : ''}${shortcut.shift ? 'Shift + ' : ''}${shortcut.alt ? 'Alt + ' : ''}${shortcut.meta ? 'Meta + ' : ''}${shortcut.key}`,
    )
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} shortcutKey="Control+Y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="Shift+Y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="Alt+Y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="Meta+Y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="Alt+Meta+H" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="Control+U" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="Shift+U" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="Alt+U" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="Meta+U" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="Control+Shift+Alt+Meta+U" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="Control+I" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="Shift+I" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="Alt+I" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="Meta+I" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="Control+Shift+Alt+Meta+I" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="Control+O" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="Shift+O" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="Alt+O" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="Meta+O" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="Control+Shift+Alt+Meta+O" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="Control+Q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="Shift+Q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="Alt+Q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="Meta+Q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="Control+Shift+Alt+Meta+Q" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="Control+W" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="Shift+W" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="Alt+W" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="Meta+W" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="Control+Shift+Alt+Meta+W" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="Control+R" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="Shift+R" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="Alt+R" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="Meta+R" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="Control+Shift+Alt+Meta+R" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="Control+T" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="Shift+T" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="Alt+T" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="Meta+T" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="Control+Shift+Alt+Meta+T" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="Control+A" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="Shift+A" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="Alt+A" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="Meta+A" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="Control+Shift+Alt+Meta+A" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="Control+S" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="Shift+S" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="Alt+S" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="Meta+S" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="Control+Shift+Alt+Meta+S" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="Control+D" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="Shift+D" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="Alt+D" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="Meta+D" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="Control+Shift+Alt+Meta+D" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="Control+X" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="Shift+X" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="Alt+X" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="Meta+X" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="Control+Shift+Alt+Meta+X" />
      </div>

      <button onKeyDown={onKeyDown}>Component Level Shortcut Register, Focus Me And Try Ctrl + 6</button>
    </div>
  )
}

export default Example
