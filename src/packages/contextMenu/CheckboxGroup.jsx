import { Children } from 'react'
import PropTypes from 'prop-types'
import useContextMenuValue from './useContextMenuValue'
import components from './component'

function CheckboxGroup({ mapper, name, value, defaultValue, onChange = () => {}, children }) {
  const [currentValue, onValueChange] = useContextMenuValue({ name, value, defaultValue })

  return Children.map(children, (child) => {
    const isChecked = currentValue?.includes(child.props.value)

    const Component = components[mapper(child.type.displayName)]
    if (!Component) {
      return null
    }

    return (
      <Component
        {...child.props}
        mapper={mapper}
        role="menuitemcheckbox"
        checked={isChecked}
        onCheckedChange={(checked) => {
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

CheckboxGroup.propTypes = {
  mapper: PropTypes.func,

  name: PropTypes.string.isRequired,

  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  children: PropTypes.node,

  onChange: PropTypes.func,
}

export default CheckboxGroup
