import { Children, cloneElement } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { contextMenuRadioGroupPropTypes, useContextMenuValue } from '@/packages/contextMenu'

import styles from './Dropdown.module.less'

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

RadioGroup.propTypes = contextMenuRadioGroupPropTypes
RadioGroup.displayName = 'DropdownRadioGroup'

export default RadioGroup
