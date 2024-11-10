import { Children, cloneElement } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { isFunction } from '@/utils/is'
import { contextMenuGroupPropTypes } from '@/packages/contextMenu'

import styles from './Dropdown.module.scss'

function Group({ label, onSelect = () => {}, children }) {
  const { matched } = matchElement(children, ['DropdownItem'])

  return (
    <>
      <RDXDropdownMenu.Separator className={styles.separator} />
      {label && <RDXDropdownMenu.Label className={styles.label}>{label}</RDXDropdownMenu.Label>}
      <RDXDropdownMenu.Group>
        {Children.map(matched, (child) => {
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

Group.propTypes = contextMenuGroupPropTypes
Group.displayName = 'DropdownGroup'

export default Group
