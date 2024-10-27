import { useState } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { Context, Shortcut } from '@/packages/contextMenu'

import ButtonTrigger from './ButtonTrigger'
import { dropdownButtonPropTypes } from '../propType'
import mapper from '../mapper'

import styles from './Dropdown.module.less'

function Button({ defaultOpen, open, onOpen, children, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const { matched } = matchElement(children, ['DropdownItem', 'DropdownGroup'])

  return (
    <Context.Provider value={{ contextValue, setContextValue, contextType: 'DropdownButton' }}>
      <RDXDropdownMenu.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpen}>
        <Shortcut mapper={mapper}>{matched}</Shortcut>
        <RDXDropdownMenu.Trigger disabled={rest.disabled} asChild>
          <ButtonTrigger {...rest} />
        </RDXDropdownMenu.Trigger>
        <RDXDropdownMenu.Portal>
          <RDXDropdownMenu.Content className={styles.popper} loop align="end" sideOffset={8}>
            {matched}
          </RDXDropdownMenu.Content>
        </RDXDropdownMenu.Portal>
      </RDXDropdownMenu.Root>
    </Context.Provider>
  )
}

Button.propTypes = dropdownButtonPropTypes
Button.displayName = 'DropdownButton'

export default Button
