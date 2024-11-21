import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import { matchElement } from 'remote:self/core'

import useContextMenuValue from '../useContextMenuValue'

import styles from './ContextMenu.module.scss'

function RadioGroup({ name, label, value, defaultValue, onChange = () => {}, children }) {
  const { matched } = matchElement(children, ['ContextMenuItem'])
  const [currentValue, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return (
    <>
      <RDXContextMenu.Separator className={styles.separator} />
      {label && <RDXContextMenu.Label className={styles.label}>{label}</RDXContextMenu.Label>}
      <RDXContextMenu.RadioGroup
        value={currentValue}
        onValueChange={(value) => {
          onValueChange(value)
          onChange(value)
        }}
      >
        {Children.map(matched, (child) => {
          return cloneElement(child, { role: 'menuitemradio' })
        })}
      </RDXContextMenu.RadioGroup>
    </>
  )
}

RadioGroup.displayName = 'ContextMenuRadioGroup'
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
   * @hidden
   */
  children: PropTypes.node,

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
}

export default RadioGroup
