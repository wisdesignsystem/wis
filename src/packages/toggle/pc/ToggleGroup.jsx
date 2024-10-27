import * as RDXToggleGroup from '@radix-ui/react-toggle-group'
import { matchElement } from 'remote:self/core'
import { Children, cloneElement } from 'react'
import classNames from 'classnames'

import { toggleGroupPropTypes } from '../propType'

import styles from './ToggleGroup.module.less'

function ToggleGroup({
  className,
  variant = 'normal',
  size = 'md',
  disabled,
  loading,
  value,
  defaultValue,
  multiple,
  children,
  onChange = () => {},
  ...rest
}) {
  const { matched } = matchElement(children, ['ToggleItem'])

  return (
    <RDXToggleGroup.Root
      {...rest}
      className={classNames(styles.group, {
        [className]: !!className,
      })}
      data-variant={variant}
      data-size={size}
      disabled={disabled}
      type={multiple ? 'multiple' : 'single'}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
    >
      {Children.map(matched, (child) => {
        return cloneElement(child, { size, variant })
      })}
    </RDXToggleGroup.Root>
  )
}

ToggleGroup.propTypes = toggleGroupPropTypes
ToggleGroup.displayName = 'ToggleGroup'

export default ToggleGroup
