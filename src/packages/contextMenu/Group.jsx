import { Children } from 'react'
import { isFunction } from '@/utils/is'

import { contextMenuGroupPropTypes } from './propType'
import components from './component'

function Group({ mapper, onSelect = () => {}, children }) {
  return Children.map(children, (child) => {
    const Component = components[mapper(child.type.displayName)]
    if (!Component) {
      return null
    }

    return (
      <Component
        {...child.props}
        mapper={mapper}
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

Group.propTypes = contextMenuGroupPropTypes

export default Group
