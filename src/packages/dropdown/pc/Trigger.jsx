import { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { DownIcon, RightIcon } from '@wisdesign/lsicon'
import { isElement } from 'remote:self/core'
import attrs from '@/utils/attrs'

import styles from './Dropdown.module.scss'

const Trigger = forwardRef(function (
  { avatar, disabled, icon, arrowDirection = 'down', text, description, className, ...rest },
  ref,
) {
  const isShowAvatar = isElement(avatar, 'Avatar')
  const isShowIcon = !!icon
  const isShowContent = !!text

  return (
    <button
      className={classNames(styles.trigger, { [className]: !!className })}
      ref={ref}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
      {...attrs({
        'data-menu': !isShowContent,
      })}
    >
      {(isShowAvatar || isShowIcon) && <div className={styles.prefix}>{isShowAvatar ? avatar : icon}</div>}
      {isShowContent && (
        <div className={styles.content}>
          <span className={styles.text}>{text}</span>
          {description && <span className={styles.description}>{description}</span>}
        </div>
      )}
      {isShowContent && (
        <div className={styles.suffix}>
          {arrowDirection === 'down' && <DownIcon />}
          {arrowDirection === 'right' && <RightIcon />}
        </div>
      )}
    </button>
  )
})

Trigger.displayName = 'DropdownTrigger'
Trigger.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Indicates if the Dropdown is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Dropdown is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Dropdown.
   * This attribute takes effect only when variant is "normal" and "avatar".
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Dropdown.
   * This attribute takes effect only when variant is "normal" and "menu".
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Avatar element to be displayed on the Dropdown
   * This attribute takes effect only when variant is "avatar".
   */
  avatar: PropTypes.element,

  /**
   * Description for the Dropdown.
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * Direction of the arrow for the Dropdown.
   *
   * @type {down|right}
   * @default down
   */
  arrowDirection: PropTypes.oneOf(['down', 'right']),

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Trigger
