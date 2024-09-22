import { attrs } from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'

import propTypes from '../propType'

import styles from './Button.module.less'

function Button({
  className,
  variant = 'secondary',
  status = 'normal',
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

  const isIconButton = !text

  return (
    <button
      {...rest}
      ref={button}
      className={classNames(styles.button, {
        [className]: !!className,
      })}
      data-size={size}
      data-variant={variant}
      data-status={status}
      aria-disabled={disabled}
      disabled={disabled}
      {...attrs({
        'data-icon': isIconButton,
      })}
    >
      {iconControl === 'prefix' && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === 'suffix' && icon}
    </button>
  )
}

Button.propTypes = propTypes
Button.displayName = 'Button'

export default Button
