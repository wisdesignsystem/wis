import { boxActionPropTypes } from '../propType'

function Action({ className, children }) {
  return <div className={className}>{children}</div>
}

Action.displayName = 'BoxAction'
Action.propTypes = boxActionPropTypes

export default Action
