import { Children } from 'react'
import PropTypes from 'prop-types'

import DropdownCheckboxGroup from './snapshot/CheckboxGroup'
import DropdownRadioGroup from './snapshot/RadioGroup'
import DropdownItem from './snapshot/Item'
import DropdownGroup from './snapshot/Group'

const snapshotMap = {
  DropdownCheckboxGroup,
  DropdownRadioGroup,
  DropdownItem,
  DropdownGroup,
}

function ShortcutSnapshot({ children }) {
  return (
    <>
      {Children.map(children, (child) => {
        const Component = snapshotMap[child.type.displayName]
        if (!Component) {
          return null
        }

        return <Component $$key={child.key} {...child.props} />
      })}
    </>
  )
}

ShortcutSnapshot.propTypes = {
  children: PropTypes.node,
}

export default ShortcutSnapshot
