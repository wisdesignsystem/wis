import { Children, cloneElement, useState } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { filterNodes, isNode } from '@/utils/node'

import Trigger from './Trigger'
import Item from './Item'
import Group from './Group'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
import Button from './Button'
import ShortcutSnapshot from '../ShortcutSnapshot'

import Context from '../Context'
import { dropdownPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function Dropdown({ children, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const nodes = filterNodes(children, ['DropdownItem', 'DropdownGroup', 'DropdownCheckboxGroup', 'DropdownRadioGroup'])
  const hasCheckedItem = nodes.some((node) => {
    return isNode(node, 'DropdownCheckboxGroup') || isNode(node, 'DropdownRadioGroup')
  })

  return (
    <Context.Provider value={{ contextValue, setContextValue }}>
      <RDXDropdownMenu.Root>
        <ShortcutSnapshot>{nodes}</ShortcutSnapshot>
        <RDXDropdownMenu.Trigger disabled={rest.disabled} asChild>
          <Trigger {...rest} />
        </RDXDropdownMenu.Trigger>
        <RDXDropdownMenu.Portal>
          <RDXDropdownMenu.Content
            className={styles.popper}
            data-variant={hasCheckedItem ? 'checkbox' : 'normal'}
            loop
            align="start"
            sideOffset={8}
          >
            {Children.map(nodes, (child) => {
              return cloneElement(child, {
                $$key: child.key,
              })
            })}
          </RDXDropdownMenu.Content>
        </RDXDropdownMenu.Portal>
      </RDXDropdownMenu.Root>
    </Context.Provider>
  )
}

Dropdown.propTypes = dropdownPropTypes
Dropdown.displayName = 'Dropdown'

Dropdown.Item = Item
Dropdown.Group = Group
Dropdown.CheckboxGroup = CheckboxGroup
Dropdown.RadioGroup = RadioGroup
Dropdown.Button = Button

export default Dropdown
