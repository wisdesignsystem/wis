import Shortcut from 'remote:self/Shortcut'
import * as RDXToggleGroup from '@radix-ui/react-toggle-group'
import { attrs } from '@/utils/attrs'
import { useRef } from 'react'
import classNames from 'classnames'

import { toggleItemPropTypes } from '../propType'

import styles from './ToggleGroup.module.less'

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

ToggleItem.propTypes = toggleItemPropTypes
ToggleItem.displayName = 'ToggleItem'

export default ToggleItem
