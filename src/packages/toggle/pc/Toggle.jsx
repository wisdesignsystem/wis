import { Shortcut } from 'remote:self/shortcut'
import * as RDXToggle from '@radix-ui/react-toggle'
import attrs from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Toggle.module.scss'

function Toggle({
  className,
  variant = 'basic',
  disabled,
  loading,
  text,
  icon,
  iconControl = 'prefix',
  tooltip,
  size = 'md',
  shortcutKey,
  value,
  defaultValue,
  onChange = () => {},
  ...rest
}) {
  const toggle = useRef(null)

  const isIconButton = !text && !shortcutKey

  return (
    <RDXToggle.Root
      {...rest}
      ref={toggle}
      className={classNames(styles.toggle, {
        [className]: !!className,
      })}
      data-size={size}
      data-variant={variant}
      disabled={disabled}
      pressed={value}
      defaultPressed={defaultValue}
      aria-keyshortcuts={shortcutKey}
      {...attrs({
        'data-disabled': disabled,
        'data-icon': isIconButton,
      })}
      onPressedChange={onChange}
    >
      {iconControl === 'prefix' && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === 'suffix' && icon}
      <Shortcut
        shortcutKey={shortcutKey}
        disabled={disabled}
        size={size}
        variant="dark"
        onTrigger={() => {
          toggle.current.focus()
          toggle.current.click()
        }}
      />
    </RDXToggle.Root>
  )
}

Toggle.displayName = 'Toggle'
Toggle.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Variant of the Toggle.
   *
   * @type {basic|ghost}
   * @default basic
   */
  variant: PropTypes.oneOf(['basic', 'ghost']),

  /**
   * Indicates if the Toggle is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Toggle is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Toggle.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Toggle.
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Position of the icon relative to the text.
   *
   * @type {prefix|suffix}
   * @default prefix
   */
  iconControl: PropTypes.oneOf(['prefix', 'suffix']),

  /**
   * Tooltip text for the Toggle.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Size of the Toggle.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the Toggle.
   *
   * @type {string}
   *
   * @example
   * Control+S
   */
  shortcutKey: PropTypes.string,

  value: PropTypes.bool,

  defaultValue: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,

  /**
   * Toggle press state change handler
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *  if (value) {
   *    console.log('Toggle Button is pressed')
   *  }
   * }
   *
   * <Toggle onChange={handleChange} />
   */
  onChange: PropTypes.func,
}

export default Toggle
