import { Children, cloneElement, useState } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { filterNodes } from '@/utils/node'
import ShortcutSnapshot from '../ShortcutSnapshot'
import ButtonTrigger from './ButtonTrigger'

import ValueContext from '../ValueContext'
import { dropdownButtonPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function Button({ children, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const nodes = filterNodes(children, ['DropdownItem', 'DropdownGroup'])

  return (
    <ValueContext.Provider value={{ contextValue, setContextValue }}>
      <RDXDropdownMenu.Root>
        <ShortcutSnapshot>{nodes}</ShortcutSnapshot>
        <RDXDropdownMenu.Trigger disabled={rest.disabled} asChild>
          <ButtonTrigger {...rest} />
        </RDXDropdownMenu.Trigger>
        <RDXDropdownMenu.Portal>
          <RDXDropdownMenu.Content className={styles.popper} loop align="end" sideOffset={8}>
            {Children.map(nodes, (child) => {
              return cloneElement(child, {
                $$key: child.key,
              })
            })}
          </RDXDropdownMenu.Content>
        </RDXDropdownMenu.Portal>
      </RDXDropdownMenu.Root>
    </ValueContext.Provider>
  )
}

Button.propTypes = dropdownButtonPropTypes
Button.displayName = 'DropdownButton'

export default Button
