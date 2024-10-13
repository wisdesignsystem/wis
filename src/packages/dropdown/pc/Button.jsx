import { Children, cloneElement, useState } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { filterNodes } from '@/utils/node'
import ShortcutSnapshot from '../ShortcutSnapshot'
import ButtonTrigger from './ButtonTrigger'

import Context from '../Context'
import { dropdownButtonPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function Button({ children, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const nodes = filterNodes(children, ['DropdownItem', 'DropdownGroup'])

  return (
    <Context.Provider value={{ contextValue, setContextValue, contextType: 'DropdownButton' }}>
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
    </Context.Provider>
  )
}

Button.propTypes = dropdownButtonPropTypes
Button.displayName = 'DropdownButton'

export default Button
