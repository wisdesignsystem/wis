import { Children } from 'react'

import useContextMenuValue from './useContextMenuValue'
import { contextMenuRadioGroupPropTypes } from './propType'
import components from './component'

function RadioGroup({ mapper, name, value, defaultValue, onChange = () => {}, children }) {
  // eslint-disable-next-line no-unused-vars
  const [_, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return Children.map(children, (child) => {
    const Component = components[mapper(child.type.displayName)]
    if (!Component) {
      return null
    }

    return (
      <Component
        {...child.props}
        mapper={mapper}
        role="menuitemradio"
        onCheck={() => {
          onChange(child.props.value)
          onValueChange(child.props.value)
        }}
      />
    )
  })
}

RadioGroup.propTypes = contextMenuRadioGroupPropTypes

export default RadioGroup
