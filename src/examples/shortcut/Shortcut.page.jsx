import Shortcut from 'remote:self/Shortcut'

import styles from './Shortcut.module.less'

function Example() {
  function handleTrigger(shortcut) {
    window.alert(`Trigger Shortcut key: ${shortcut.shortcutKey}`)
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} shortcutKey="ctrl+y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="shift+y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="alt+y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="meta+y" />
        <Shortcut onTrigger={handleTrigger} shortcutKey="ctrl+shift+alt+meta+y" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="ctrl+u" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="shift+u" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="alt+u" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="meta+u" />
        <Shortcut onTrigger={handleTrigger} disabled shortcutKey="ctrl+shift+alt+meta+u" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="ctrl+i" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="shift+i" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="alt+i" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="meta+i" />
        <Shortcut onTrigger={handleTrigger} variant="dark" shortcutKey="ctrl+shift+alt+meta+i" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="ctrl+o" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="shift+o" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="alt+o" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="meta+o" />
        <Shortcut onTrigger={handleTrigger} variant="dark" disabled shortcutKey="ctrl+shift+alt+meta+o" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="ctrl+q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="shift+q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="alt+q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="meta+q" />
        <Shortcut onTrigger={handleTrigger} size="sm" shortcutKey="ctrl+shift+alt+meta+q" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="ctrl+w" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="shift+w" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="alt+w" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="meta+w" />
        <Shortcut onTrigger={handleTrigger} size="sm" disabled shortcutKey="ctrl+shift+alt+meta+w" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="ctrl+r" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="shift+r" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="alt+r" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="meta+r" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" shortcutKey="ctrl+shift+alt+meta+r" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="ctrl+t" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="shift+t" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="alt+t" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="meta+t" />
        <Shortcut onTrigger={handleTrigger} size="sm" variant="dark" disabled shortcutKey="ctrl+shift+alt+meta+t" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="ctrl+a" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="shift+a" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="alt+a" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="meta+a" />
        <Shortcut onTrigger={handleTrigger} size="xs" shortcutKey="ctrl+shift+alt+meta+a" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="ctrl+s" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="shift+s" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="alt+s" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="meta+s" />
        <Shortcut onTrigger={handleTrigger} size="xs" disabled shortcutKey="ctrl+shift+alt+meta+s" />
      </div>

      <div className={styles.col}>
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="ctrl+d" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="shift+d" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="alt+d" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="meta+d" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" shortcutKey="ctrl+shift+alt+meta+d" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="ctrl+x" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="shift+x" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="alt+x" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="meta+x" />
        <Shortcut onTrigger={handleTrigger} size="xs" variant="dark" disabled shortcutKey="ctrl+shift+alt+meta+x" />
      </div>
    </div>
  )
}

export default Example
