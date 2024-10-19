import { Children } from 'react'
import PropTypes from 'prop-types'

import components from './component'

function Shortcut({ mapper = (displayName) => displayName, children }) {
  return (
    <>
      {Children.map(children, (child) => {
        const Component = components[mapper(child.type.displayName)]
        if (!Component) {
          return null
        }

        return <Component mapper={mapper} {...child.props} />
      })}
    </>
  )
}

Shortcut.propTypes = {
  mapper: PropTypes.func,
  children: PropTypes.node,
}

export default Shortcut
