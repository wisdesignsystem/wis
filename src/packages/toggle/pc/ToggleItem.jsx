import { Shortcut } from 'remote:self/shortcut'
import * as RDXToggleGroup from '@radix-ui/react-toggle-group'
import attrs from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './ToggleGroup.module.scss'

function ToggleItem({
  className,
  disabled,
  text,
  size,
  icon,
  iconControl = 'prefix',
  tooltip,
  shortcutKey,
  value,
  variant,
  ...rest
}) {
  const item = useRef(null)

  const isIconButton = !text && !shortcutKey

  return (
    <RDXToggleGroup.Item
      {...rest}
      ref={item}
      className={classNames(styles.item, {
        [className]: !!className,
      })}
      value={value}
      role="button"
      aria-keyshortcuts={shortcutKey}
      disabled={disabled}
      data-size={size}
      data-variant={variant}
      {...attrs({
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
        variant="dark"
        onTrigger={() => {
          item.current.focus()
          item.current.click()
        }}
      />
    </RDXToggleGroup.Item>
  )
}

ToggleItem.displayName = 'ToggleItem'
ToggleItem.propTypes = {
  className: PropTypes.string,

  /**
   * Indicates if the Toggle.Item is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Text to be displayed on the Toggle.Item.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Toggle.Item.
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
   * Tooltip text for the Toggle.Item.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Shortcut key for the Toggle.Item.
   *
   * @type {string}
   *
   * @example
   * Control+S
   */
  shortcutKey: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Size of the Toggle.Item.
   *
   * @type {sm|md}
   * @default md
   * @private
   */
  size: PropTypes.oneOf(['md', 'sm']),

  /**
   * Variant of the Toggle.Group.
   *
   * @type {normal|compact}
   * @default normal
   * @private
   */
  variant: PropTypes.oneOf(['normal', 'compact']),
}

export default ToggleItem
