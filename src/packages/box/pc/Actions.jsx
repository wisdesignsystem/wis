import { boxActionsPropTypes } from '../propType'

function Actions({ className, children, ...rest }) {
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  )
}

Actions.displayName = 'BoxActions'
Actions.propTypes = boxActionsPropTypes

export default Actions
