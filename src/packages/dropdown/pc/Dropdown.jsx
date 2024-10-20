import { useState } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchChildren } from '@/utils/node'
import { Context, Shortcut } from '@/packages/contextMenu'

import Trigger from './Trigger'
import Item from './Item'
import Group from './Group'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
import Button from './Button'

import { dropdownPropTypes } from '../propType'
import mapper from '../mapper'

import styles from './Dropdown.module.less'

function Dropdown({ defaultOpen, open, onOpen, children, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const { matched, DropdownCheckboxGroup, DropdownRadioGroup } = matchChildren(children, [
    'DropdownItem',
    'DropdownGroup',
    'DropdownCheckboxGroup',
    'DropdownRadioGroup',
  ])
  const hasCheckedItem = !!DropdownCheckboxGroup?.length || !!DropdownRadioGroup?.length

  return (
    <Context.Provider value={{ contextValue, setContextValue }}>
      <RDXDropdownMenu.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpen}>
        <Shortcut mapper={mapper}>{matched}</Shortcut>
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
            {matched}
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
