import { Children, cloneElement } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { contextMenuCheckboxGroupPropTypes, useContextMenuValue } from '@/packages/contextMenu'

import styles from './Dropdown.module.less'

function CheckboxGroup({ name, label, value, defaultValue, onChange = () => {}, children }) {
  const { matched } = matchElement(children, ['DropdownItem'])
  const [currentValue, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {label && <RDXDropdownMenu.Label className={styles.label}>{label}</RDXDropdownMenu.Label>}
      {Children.map(matched, (child) => {
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

CheckboxGroup.propTypes = contextMenuCheckboxGroupPropTypes
CheckboxGroup.displayName = 'DropdownCheckboxGroup'

export default CheckboxGroup
