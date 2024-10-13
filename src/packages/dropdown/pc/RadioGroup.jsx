import { Children, cloneElement } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { filterNodes } from '@/utils/node'

import useGroupValue from '../useGroupValue'
import { dropdownRadioGroupPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function RadioGroup({ $$key, label, value, defaultValue, onChange = () => {}, children }) {
  const nodes = filterNodes(children, ['DropdownItem'])
  const [currentValue, onValueChange] = useGroupValue({ key: $$key, value, defaultValue })

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
        {Children.map(nodes, (child) => {
          return cloneElement(child, { role: 'menuitemradio' })
        })}
      </RDXDropdownMenu.RadioGroup>
    </>
  )
}

RadioGroup.propTypes = dropdownRadioGroupPropTypes
RadioGroup.displayName = 'DropdownRadioGroup'

export default RadioGroup
