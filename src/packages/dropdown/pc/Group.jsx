import { Children, cloneElement } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { filterNodes } from '@/utils/node'
import { isFunction } from '@/utils/is'

import { dropdownGroupPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function Group({ label, onSelect = () => {}, children }) {
  const nodes = filterNodes(children, ['DropdownItem'])

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {label && <RDXDropdownMenu.Label className={styles.label}>{label}</RDXDropdownMenu.Label>}
      <RDXDropdownMenu.Group>
        {Children.map(nodes, (child) => {
          return cloneElement(child, {
            role: 'menuitem',
            onSelect: () => {
              if (isFunction(child.props.onSelect)) {
                child.props.onSelect()
              }

              onSelect(child.props.value)
            },
          })
        })}
      </RDXDropdownMenu.Group>
    </>
  )
}

Group.propTypes = dropdownGroupPropTypes
Group.displayName = 'DropdownGroup'

export default Group
