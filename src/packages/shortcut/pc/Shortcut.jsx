import { useGlobalShortcut } from 'remote:self/core'
import { attrs } from '@/utils/attrs'

import propTypes from '../propType'

import styles from './Shortcut.module.less'

function Shortcut({ shortcutKey, disabled, variant = 'light', size = 'md', onTrigger = () => {}, ...rest }) {
  const onGlobalShortcut = useGlobalShortcut(shortcutKey)
  const shortcut = onGlobalShortcut((shortcut) => {
    if (disabled) {
      return
    }
    onTrigger(shortcut)
  })

  if (!shortcut) {
    return null
  }

  return (
    <div
      {...rest}
      className={styles.shortcut}
      data-variant={variant}
      data-size={size}
      {...attrs({ 'data-disabled': disabled })}
    >
      {shortcut.ctrl && <span className={styles.command}>⌃</span>}
      {shortcut.shift && <span className={styles.command}>⇧</span>}
      {shortcut.alt && <span className={styles.command}>⌥</span>}
      {shortcut.meta && <span className={styles.command}>⌘</span>}
      <span className={styles.key}>{shortcut.key}</span>
    </div>
  )
}

Shortcut.propTypes = propTypes
Shortcut.displayName = 'Shortcut'

export default Shortcut
