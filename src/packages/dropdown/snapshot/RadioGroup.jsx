import { Children } from 'react'

import DropdownItem from './Item'

import useGroupValue from '../useGroupValue'
import { dropdownRadioGroupPropTypes } from '../propType'

const snapshotMap = {
  DropdownItem,
}

function RadioGroup({ $$key, value, defaultValue, onChange = () => {}, children }) {
  // eslint-disable-next-line no-unused-vars
  const [_, onValueChange] = useGroupValue({ key: $$key, value, defaultValue })

  return Children.map(children, (child) => {
    const Component = snapshotMap[child.type.displayName]
    if (!Component) {
      return null
    }

    return (
      <Component
        {...child.props}
        role="menuitemradio"
        onCheck={() => {
          onChange(child.props.value)
          onValueChange(child.props.value)
        }}
      />
    )
  })
}

RadioGroup.propTypes = dropdownRadioGroupPropTypes

export default RadioGroup
