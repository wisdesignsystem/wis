import { attrs } from '@/utils/attrs'

import useShortcut from '../useShortcut'
import propTypes from '../propType'

import styles from './Shortcut.module.less'

function Shortcut({ shortcutKey, disabled, variant = 'light', size, onTrigger = () => {} }) {
  const [shortcut, onShortcut] = useShortcut({ shortcutKey, disabled })
  onShortcut(() => {
    onTrigger()
  })

  if (!shortcut) {
    return null
  }

  return (
    <div className={styles.shortcut} data-variant={variant} data-size={size} {...attrs({ 'data-disabled': disabled })}>
      {shortcut.ctrl && <span className={styles.command}>⌃</span>}
      {shortcut.shift && <span className={styles.command}>⇧</span>}
      {shortcut.alt && <span className={styles.command}>⌥</span>}
      {shortcut.meta && <span className={styles.command}>⌘</span>}
      <span className={styles.key}>{shortcut.key.toUpperCase()}</span>
    </div>
  )
}

Shortcut.propTypes = propTypes

export default Shortcut
