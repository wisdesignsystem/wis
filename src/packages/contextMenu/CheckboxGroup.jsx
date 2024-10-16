import { Children } from 'react'

import useContextMenuValue from './useContextMenuValue'
import { contextMenuCheckboxGroupPropTypes } from './propType'
import components from './component'

function CheckboxGroup({ name, value, defaultValue, onChange = () => {}, children }) {
  const [currentValue, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return Children.map(children, (child) => {
    const isChecked = currentValue?.includes(child.props.value)

    const Component = components[child.type.displayName]
    if (!Component) {
      return null
    }

    return (
      <Component
        {...child.props}
        role="menuitemcheckbox"
        checked={isChecked}
        onCheck={(checked) => {
          let nextValue = currentValue?.slice() || []
          if (checked) {
            nextValue.push(child.props.value)
          } else {
            nextValue = nextValue.filter((v) => v !== child.props.value)
          }

          onValueChange(nextValue)
          onChange(nextValue)
        }}
      />
    )
  })
}

CheckboxGroup.propTypes = contextMenuCheckboxGroupPropTypes

export default CheckboxGroup
