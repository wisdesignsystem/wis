import { useState } from 'react'
import PropTypes from 'prop-types'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { Context, Shortcut } from '@/packages/contextMenu'

import Trigger from './Trigger'

import mapper from '../mapper'

import styles from './Dropdown.module.scss'

function Dropdown({ defaultOpen, open, onOpen, children, ...rest }) {
  const [contextValue, setContextValue] = useState({})
  const { matched, DropdownCheckboxGroup, DropdownRadioGroup } = matchElement(children, [
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

Dropdown.displayName = 'Dropdown'
Dropdown.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * set the Dropdown open\close
   *
   * @type {boolean}
   */
  open: PropTypes.bool,

  /**
   * set the Dropdown default open\close
   *
   * @type {boolean}
   */
  defaultOpen: PropTypes.bool,

  /**
   * Indicates if the Dropdown is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Dropdown is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Dropdown.
   * This attribute takes effect only when variant is "normal" and "avatar".
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Dropdown.
   * This attribute takes effect only when variant is "normal" and "menu".
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Avatar element to be displayed on the Dropdown
   * This attribute takes effect only when variant is "avatar".
   */
  avatar: PropTypes.element,

  /**
   * Description for the Dropdown.
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * Direction of the arrow for the Dropdown.
   *
   * @type {down|right}
   * @default down
   */
  arrowDirection: PropTypes.oneOf(['down', 'right']),

  /**
   * Callback function when the Dropdown open state change.
   *
   * @type {function}
   *
   * @example
   *
   * function handleOpen(open) {
   *  console.log('Dropdown open', open)
   * }
   *
   * <Dropdown onOpen={handleOpen}></Dropdown>
   */
  onOpen: PropTypes.func,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Dropdown
