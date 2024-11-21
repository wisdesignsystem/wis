import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useGlobalShortcut } from 'remote:self/core'
import attrs from '@/utils/attrs'

import styles from './Shortcut.module.scss'

function Shortcut({
  className,
  shortcutKey,
  unregister,
  disabled,
  variant = 'light',
  size = 'md',
  onTrigger = () => {},
  ...rest
}) {
  const [shortcut, onGlobalShortcut] = useGlobalShortcut(shortcutKey, unregister)
  onGlobalShortcut((shortcut) => {
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
      className={classNames(styles.shortcut, { [className]: !!className })}
      data-variant={variant}
      data-size={size}
      disabled={disabled}
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

Shortcut.displayName = 'Shortcut'
Shortcut.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Shortcut key for the button.
   *
   * @type {string}
   *
   * @example
   * Control+S
   */
  shortcutKey: PropTypes.string,

  /**
   * Variant of the shortcut.
   *
   * @type {light|dark|ghost}
   * @default light
   */
  variant: PropTypes.oneOf(['light', 'dark', 'ghost']),

  /**
   * Indicates if the shortcut is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Size of the button.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * @private
   * @hidden
   */
  unregister: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,

  onTrigger: PropTypes.func,
}

export default Shortcut
