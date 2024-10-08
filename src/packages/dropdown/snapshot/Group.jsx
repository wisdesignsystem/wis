import { Children } from 'react'
import { isFunction } from '@/utils/is'

import DropdownItem from './Item'

import { dropdownGroupPropTypes } from '../propType'

const snapshotMap = {
  DropdownItem,
}

function Group({ onSelect = () => {}, children }) {
  return Children.map(children, (child) => {
    const Component = snapshotMap[child.type.displayName]
    if (!Component) {
      return null
    }

    return (
      <Component
        {...child.props}
        role="menuitem"
        onSelect={() => {
          if (isFunction(child.props.onSelect)) {
            child.props.onSelect()
          }

          onSelect(child.props.value)
        }}
      />
    )
  })
}

Group.propTypes = dropdownGroupPropTypes

export default Group
