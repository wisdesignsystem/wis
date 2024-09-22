import * as RDXToggle from '@radix-ui/react-toggle'
import { attrs } from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'

import { togglePropTypes } from '../propType'

import styles from './Toggle.module.less'

function Toggle({
  className,
  variant = 'default',
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

  const isIconButton = !text

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
      {...attrs({
        'data-icon': isIconButton,
      })}
      onPressedChange={onChange}
    >
      {iconControl === 'prefix' && icon}
      {!isIconButton && <span>{text}</span>}
      {iconControl === 'suffix' && icon}
    </RDXToggle.Root>
  )
}

Toggle.propTypes = togglePropTypes
Toggle.displayName = 'Toggle'

export default Toggle
