import { Children } from 'react'
import PropTypes from 'prop-types'

import useContextMenuValue from './useContextMenuValue'
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

RadioGroup.propTypes = {
  mapper: PropTypes.func,

  name: PropTypes.string.isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  children: PropTypes.node,

  onChange: PropTypes.func,
}

export default RadioGroup
