import { cloneElement } from 'react'

export default function mergeActions(actions) {
  if (!actions?.length) {
    return null
  }

  const action = actions[0]
  const { props, children } = actions.reduce(
    (result, action) => {
      result.props = Object.assign(result.props, action.props)
      result.children = result.children.concat(action.props.children)

      return result
    },
    { props: {}, children: [] },
  )

  return cloneElement(action, props, <>{children}</>)
}
