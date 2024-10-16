import { Children, cloneElement } from 'react'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import { matchChildren } from '@/utils/node'
import { isFunction } from '@/utils/is'

import { contextMenuGroupPropTypes } from '../propType'

import styles from './ContextMenu.module.less'

function Group({ label, onSelect = () => {}, children }) {
  const { matched } = matchChildren(children, ['ContextMenuItem'])

  return (
    <>
      <RDXContextMenu.Separator className={styles.separator} />
      {label && <RDXContextMenu.Label className={styles.label}>{label}</RDXContextMenu.Label>}
      <RDXContextMenu.Group>
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
      </RDXContextMenu.Group>
    </>
  )
}

Group.propTypes = contextMenuGroupPropTypes
Group.displayName = 'ContextMenuGroup'

export default Group
