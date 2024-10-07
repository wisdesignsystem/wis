import { Children, cloneElement } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { filterNodes } from '@/utils/node'

import useGroupValue from '../useGroupValue'
import { dropdownCheckboxGroupPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function CheckboxGroup({ $$key, label, value, defaultValue, onChange = () => {}, children }) {
  const nodes = filterNodes(children, ['DropdownItem'])
  const [currentValue, onValueChange] = useGroupValue({ key: $$key, value, defaultValue })

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {label && <RDXDropdownMenu.Label className={styles.label}>{label}</RDXDropdownMenu.Label>}
      {Children.map(nodes, (child) => {
        const isChecked = currentValue?.includes(child.props.value)

        return cloneElement(child, {
          role: 'menuitemcheckbox',
          checked: isChecked,
          onCheckedChange: (checked) => {
            let nextValue = currentValue?.slice() || []
            if (checked) {
              nextValue.push(child.props.value)
            } else {
              nextValue = nextValue.filter((v) => v !== child.props.value)
            }

            onValueChange(nextValue)
            onChange(nextValue)
          },
        })
      })}
    </>
  )
}

CheckboxGroup.propTypes = dropdownCheckboxGroupPropTypes
CheckboxGroup.displayName = 'DropdownCheckboxGroup'

export default CheckboxGroup
