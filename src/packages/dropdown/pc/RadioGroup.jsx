import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { useContextMenuValue } from '@/packages/contextMenu'

import styles from './Dropdown.module.scss'

function RadioGroup({ name, label, value, defaultValue, onChange = () => {}, children }) {
  const { matched } = matchElement(children, ['DropdownItem'])
  const [currentValue, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {label && <RDXDropdownMenu.Label className={styles.label}>{label}</RDXDropdownMenu.Label>}
      <RDXDropdownMenu.RadioGroup
        value={currentValue}
        onValueChange={(value) => {
          onValueChange(value)
          onChange(value)
        }}
      >
        {Children.map(matched, (child) => {
          return cloneElement(child, { role: 'menuitemradio' })
        })}
      </RDXDropdownMenu.RadioGroup>
    </>
  )
}

RadioGroup.displayName = 'DropdownRadioGroup'
RadioGroup.propTypes = {
  /**
   * The name for the ContextMenu.RadioGroup.
   *
   * @type {string}
   */
  name: PropTypes.string.isRequired,

  /**
   * The label for the ContextMenu.RadioGroup.
   *
   * @type {string}
   */
  label: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Callback function to handle changes in the ContextMenu.RadioGroup.
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.RadioGroup name="group" label="Group Title" onChange={handleChange}>
   *    <ContextMenu.Item value="a"></ContextMenu.Item>
   *  </ContextMenu.RadioGroup>
   * </ContextMenu>
   */
  onChange: PropTypes.func,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default RadioGroup
