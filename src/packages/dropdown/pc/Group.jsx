import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { matchElement } from 'remote:self/core'
import { isFunction } from '@/utils/is'

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

Group.displayName = 'DropdownGroup'
Group.propTypes = {
  /**
   * The label for the ContextMenu.Group.
   * @type {string}
   */
  label: PropTypes.string,

  /**
   * Callback function to handle click events, when the Dropdown.Item wrapped by ContextMenu.Group is clicked, it triggers.
   *
   * @type {function}
   *
   * @example
   *
   * function handleClick(value) {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.Group label="Group Title" onClick={handleClick}>
   *    <ContextMenu.Item value="a"></ContextMenu.Item>
   *  </ContextMenu.Group>
   * </ContextMenu>
   */
  onSelect: PropTypes.func,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Group
