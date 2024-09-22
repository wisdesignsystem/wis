import Shortcut from 'remote:self/Shortcut'
import * as RDXToggleGroup from '@radix-ui/react-toggle-group'
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
  ...rest
}) {
  const item = useRef(null)

  const isIconButton = !text

  return (
    <RDXToggleGroup.Item
      {...rest}
      ref={item}
      className={classNames(styles.item, {
        [className]: !!className,
      })}
      value={value}
      role="button"
      disabled={disabled}
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
