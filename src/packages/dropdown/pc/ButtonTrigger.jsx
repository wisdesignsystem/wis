import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'remote:self/button'
import classNames from 'classnames'
import { DownIcon } from '@wisdesign/lsicon'

import styles from './Dropdown.module.scss'

const ButtonTrigger = forwardRef(function (
  { className, variant, disabled, loading, text, icon, iconControl, tooltip, size, shortcutKey, ...rest },
  ref,
) {
  return (
    <div className={classNames(styles.button, { [className]: !!className })}>
      <Button
        variant={variant}
        disabled={disabled}
        text={text}
        icon={icon}
        iconControl={iconControl}
        tooltip={tooltip}
        size={size}
        shortcutKey={shortcutKey}
      />
      <Button ref={ref} variant={variant} disabled={disabled} size={size} icon={<DownIcon />} {...rest} />
    </div>
  )
})

ButtonTrigger.displayName = 'DropdownButtonTrigger'
ButtonTrigger.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Variant of the Dropdown.Button.
   *
   * @type {primary|classic|secondary}
   * @default secondary
   */
  variant: PropTypes.oneOf(['primary', 'classic', 'secondary']),

  /**
   * Indicates if the Dropdown.Button is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Dropdown.Button is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Dropdown.Button.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Dropdown.Button.
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
   * Tooltip text for the Dropdown.Button.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Size of the Dropdown.Button.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the Dropdown.Button.
   *
   * @type {string}
   *
   * @example
   * control + s
   */
  shortcutKey: PropTypes.string,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default ButtonTrigger
