import { Children } from 'react'

import DropdownItem from './Item'

import useGroupValue from '../useGroupValue'
import { dropdownCheckboxGroupPropTypes } from '../propType'

const snapshotMap = {
  DropdownItem,
}

function CheckboxGroup({ $$key, value, defaultValue, onChange = () => {}, children }) {
  // eslint-disable-next-line no-unused-vars
  const [currentValue, onValueChange] = useGroupValue({ key: $$key, value, defaultValue })

  return Children.map(children, (child) => {
    const isChecked = currentValue?.includes(child.props.value)

    const Component = snapshotMap[child.type.displayName]
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

CheckboxGroup.propTypes = dropdownCheckboxGroupPropTypes

export default CheckboxGroup
