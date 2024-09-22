import Shortcut from 'remote:self/Shortcut'
import * as Toggle from '@radix-ui/react-toggle'
import { attrs } from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'

import { toggleButtonPropTypes } from '../propType'

import styles from './ToggleButton.module.less'

function ToggleButton({
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
  const toggleButton = useRef(null)

  const isIconButton = !text

  return (
    <Toggle.Root
      {...rest}
      ref={toggleButton}
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
      <Shortcut
        shortcutKey={shortcutKey}
        disabled={disabled}
        size={size}
        variant="dark"
        onTrigger={() => {
          toggleButton.current.focus()
          toggleButton.current.click()
        }}
      />
    </Toggle.Root>
  )
}

ToggleButton.propTypes = toggleButtonPropTypes

export default ToggleButton
