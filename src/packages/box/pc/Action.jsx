import { boxActionPropTypes } from '../propType'

function Action({ className, children, ...rest }) {
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  )
}

Action.displayName = 'BoxAction'
Action.propTypes = boxActionPropTypes

export default Action
