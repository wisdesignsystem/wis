import { Children, cloneElement } from 'react'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import { matchElement } from 'remote:self/core'

import { contextMenuRadioGroupPropTypes } from '../propType'
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

RadioGroup.propTypes = contextMenuRadioGroupPropTypes
RadioGroup.displayName = 'ContextMenuRadioGroup'

export default RadioGroup
