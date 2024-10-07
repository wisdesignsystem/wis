import { forwardRef } from 'react'
import classNames from 'classnames'
import { DownIcon, RightIcon } from '@wisdesign/lsicon'

import { dropdownPropTypes } from '../propType'

import styles from './Dropdown.module.less'

const Trigger = forwardRef(function (
  { avatar, variant = 'normal', disabled, icon, arrowDirection = 'down', text, description, className, ...rest },
  ref,
) {
  const isShowAvatar = variant === 'avatar' && avatar
  const isShowIcon = ['normal', 'menu'].includes(variant) && icon
  const isShowArrow = ['normal', 'avatar'].includes(variant)
  const isShowContent = ['normal', 'avatar'].includes(variant)

  return (
    <button
      className={classNames(styles.trigger, { [className]: !!className })}
      data-variant={variant}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
      ref={ref}
    >
      {(isShowAvatar || isShowIcon) && (
        <div className={styles.prefix}>
          {isShowAvatar && avatar}
          {isShowIcon && icon}
        </div>
      )}
      {isShowContent && (
        <div className={styles.content}>
          <span className={styles.text}>{text}</span>
          {description && <span className={styles.description}>{description}</span>}
        </div>
      )}
      {isShowArrow && (
        <div className={styles.suffix}>
          {arrowDirection === 'down' && <DownIcon />}
          {arrowDirection === 'right' && <RightIcon />}
        </div>
      )}
    </button>
  )
})

Trigger.displayName = 'DropdownTrigger'
Trigger.propTypes = dropdownPropTypes

export default Trigger
