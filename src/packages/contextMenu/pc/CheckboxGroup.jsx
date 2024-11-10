import { Children, cloneElement } from 'react'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import { matchElement } from 'remote:self/core'

import { contextMenuCheckboxGroupPropTypes } from '../propType'
import useContextMenuValue from '../useContextMenuValue'

import styles from './ContextMenu.module.scss'

function CheckboxGroup({ name, label, value, defaultValue, onChange = () => {}, children }) {
  const { matched } = matchElement(children, ['ContextMenuItem'])
  const [currentValue, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return (
    <>
      <RDXContextMenu.Separator className={styles.separator} />
      {label && <RDXContextMenu.Label className={styles.label}>{label}</RDXContextMenu.Label>}
      {Children.map(matched, (child) => {
        const isChecked = currentValue?.includes(child.props.value)

        return cloneElement(child, {
          role: 'menuitemcheckbox',
          checked: isChecked,
          onCheckedChange: (checked) => {
            let nextValue = currentValue?.slice() || []
            if (checked) {
              nextValue.push(child.props.value)
            } else {
              nextValue = nextValue.filter((v) => v !== child.props.value)
            }

            onValueChange(nextValue)
            onChange(nextValue)
          },
        })
      })}
    </>
  )
}

CheckboxGroup.propTypes = contextMenuCheckboxGroupPropTypes
CheckboxGroup.displayName = 'ContextMenuCheckboxGroup'

export default CheckboxGroup
