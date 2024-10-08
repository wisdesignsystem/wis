import Shortcut from 'remote:self/Shortcut'
import { attrs } from '@/utils/attrs'
import { useRef, forwardRef, useImperativeHandle } from 'react'
import classNames from 'classnames'

import propTypes from '../propType'

import styles from './Button.module.less'

const Button = forwardRef(function Button(
  {
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
  },
  ref,
) {
  const button = useRef(null)

  useImperativeHandle(ref, () => button.current)

  const isIconButton = !text && !shortcutKey

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
      aria-keyshortcuts={shortcutKey}
      disabled={disabled}
      {...attrs({
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
})

Button.propTypes = propTypes
Button.displayName = 'Button'

export default Button
