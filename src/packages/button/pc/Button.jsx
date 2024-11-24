import { Shortcut } from 'remote:self/shortcut'
import attrs from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

function Button({
  className,
  variant = 'secondary',
  status,
  disabled,
  loading,
  text,
  icon,
  iconControl = 'prefix',
  tooltip,
  size = 'md',
  shortcutKey,
  ...rest
}) {
  const button = useRef(null)

  const isIconButton = !text && !shortcutKey

  return (
    <button
      {...rest}
      className={classNames(styles.button, {
        [className]: !!className,
      })}
      data-size={size}
      data-variant={variant}
      aria-disabled={disabled}
      aria-keyshortcuts={shortcutKey}
      disabled={disabled}
      {...attrs({
        'data-status': status,
        'data-disabled': disabled,
        'data-icon': isIconButton,
      })}
    >
      {iconControl === 'prefix' && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === 'suffix' && icon}
      <Shortcut
        shortcutKey={shortcutKey}
        disabled={disabled}
        size={size}
        variant={['primary', 'classic'].includes(variant) ? 'light' : 'dark'}
        onTrigger={() => {
          button.current.focus()
          button.current.click()
        }}
      />
    </button>
  )
}

Button.propTypes = {
  /**
   * Custom class name for the button.
   *
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Variant of the button.
   *
   * @default secondary
   */
  variant: PropTypes.oneOf(['primary', 'classic', 'secondary', 'tertiary', 'ghost']),

  /**
   * Status of the button.
   *
   * @default normal
   */
  status: PropTypes.oneOf(['normal', 'danger']),

  /**
   * Indicates if the button is disabled.
   *
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the button is in a loading state.
   *
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the button.
   *
   * @default Button
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the button.
   */
  icon: PropTypes.element,

  /**
   * Position of the icon relative to the text.
   *
   * @default prefix
   */
  iconControl: PropTypes.oneOf(['prefix', 'suffix']),

  /**
   * Tooltip text for the button.
   */
  tooltip: PropTypes.string,

  /**
   * Size of the button.
   *
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the button.
   *
   * @example
   *
   * control + s
   */
  shortcutKey: PropTypes.string,
}
Button.displayName = 'Button'

export default Button
