import * as RDXToggleGroup from '@radix-ui/react-toggle-group'
import { matchElement } from 'remote:self/core'
import { Children, cloneElement } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './ToggleGroup.module.scss'

function ToggleGroup({
  className,
  variant = 'basic',
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

ToggleGroup.displayName = 'ToggleGroup'
ToggleGroup.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * Size of the Toggle.Group.
   *
   * @type {sm|md}
   * @default md
   */
  size: PropTypes.oneOf(['md', 'sm']),

  /**
   * Variant of the Toggle.Group.
   *
   * @type {basic|compact}
   * @default basic
   */
  variant: PropTypes.oneOf(['basic', 'compact']),

  /**
   * Indicates if the Toggle.Group is disabled, this will make all Toggle.Item disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Toggle.Group is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),

  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),

  multiple: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,

  /**
   * Toggle.Group value change handler
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   * console.log('Toggle Button Group value is', value)
   * }
   *
   * <Toggle.Group onChange={handleChange}>
   *  <Toggle.Item value="a"></Toggle.Item>
   *  <Toggle.Item value="b"></Toggle.Item>
   * </Toggle.Group>
   */
  onChange: PropTypes.func,
}

export default ToggleGroup
