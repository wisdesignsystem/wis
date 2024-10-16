import { forwardRef } from 'react'
import classNames from 'classnames'
import { DownIcon, RightIcon } from '@wisdesign/lsicon'
import { isNode } from '@/utils/node'
import { attrs } from '@/utils/attrs'

import { dropdownPropTypes } from '../propType'

import styles from './Dropdown.module.less'

const Trigger = forwardRef(function (
  { avatar, disabled, icon, arrowDirection = 'down', text, description, className, ...rest },
  ref,
) {
  const isShowAvatar = isNode(avatar, 'Avatar')
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
Trigger.propTypes = dropdownPropTypes

export default Trigger
