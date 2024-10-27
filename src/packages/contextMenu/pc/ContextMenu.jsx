import { useState, Children, cloneElement } from 'react'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import { matchElement } from 'remote:self/core'

import Item from './Item'
import Group from './Group'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
import Shortcut from '../Shortcut'
import Context from '../Context'

import { contextMenuPropTypes } from '../propType'

import styles from './ContextMenu.module.less'

function ContextMenu({ children, disabled, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const { matched, unmatched, ContextMenuCheckboxGroup, ContextMenuRadioGroup } = matchElement(
    children,
    ['ContextMenuItem', 'ContextMenuGroup', 'ContextMenuCheckboxGroup', 'ContextMenuRadioGroup'],
    false,
  )
  const hasCheckedItem = !!ContextMenuCheckboxGroup?.length || !!ContextMenuRadioGroup?.length

  return (
    <Context.Provider value={{ contextValue, setContextValue }}>
      <RDXContextMenu.Root>
        <Shortcut>{matched}</Shortcut>
        <RDXContextMenu.Trigger disabled={rest.disabled}>
          {unmatched.length && (unmatched.length > 1 ? Children.only(unmatched) : cloneElement(unmatched[0], rest))}
        </RDXContextMenu.Trigger>
        <RDXContextMenu.Portal>
          <RDXContextMenu.Content
            className={styles.popper}
            data-variant={hasCheckedItem ? 'checkbox' : 'normal'}
            loop
            align="start"
            sideOffset={8}
          >
            {matched}
          </RDXContextMenu.Content>
        </RDXContextMenu.Portal>
      </RDXContextMenu.Root>
    </Context.Provider>
  )
}

ContextMenu.propTypes = contextMenuPropTypes
ContextMenu.displayName = 'ContextMenu'
ContextMenu.getSymbiote = function (children) {
  const { unmatched } = matchElement(
    children,
    ['ContextMenuItem', 'ContextMenuGroup', 'ContextMenuCheckboxGroup', 'ContextMenuRadioGroup'],
    false,
  )

  return unmatched[0]
}

ContextMenu.Item = Item
ContextMenu.Group = Group
ContextMenu.CheckboxGroup = CheckboxGroup
ContextMenu.RadioGroup = RadioGroup

export default ContextMenu
