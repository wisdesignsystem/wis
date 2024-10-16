import { Children } from 'react'
import PropTypes from 'prop-types'

import components from './component'

function Shortcut({ children }) {
  return (
    <>
      {Children.map(children, (child) => {
        const Component = components[child.type.displayName]
        if (!Component) {
          return null
        }

        return <Component {...child.props} />
      })}
    </>
  )
}

Shortcut.propTypes = {
  children: PropTypes.node,
}

export default Shortcut
