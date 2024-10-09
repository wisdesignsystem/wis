import { Children } from 'react'

function withoutFragment(children) {
  if (children?.type?.toString() === 'Symbol(react.fragment)') {
    return children.props.children
  }

  return children
}

export function isNode(node, type) {
  if (!node?.type || !node?.type?.displayName) {
    return false
  }

  return node.type.displayName === type
}

/**
 * Matches nodes against specified types and categorizes them.
 *
 * @param {React.ReactNode[]} children - The children nodes to be matched.
 * @param {Array} [types=[]] - An array of types to match against.
 * @returns {Object} An object categorizing nodes by their matched type, with unmatched nodes under the 'default' key.
 *
 * @example
 *
 * const { ToggleButtonItem: itemNodes, default } = matchNodes(children, ['ToggleButtonItem'])
 */
export function matchNodes(children, types = []) {
  return Children.toArray(withoutFragment(children)).reduce(
    (result, node) => {
      const type = types.find((type) => isNode(node, type))
      if (!type) {
        result.default.push(node)
        return result
      }

      if (!result[type]) {
        result[type] = []
      }

      result[type].push(node)
      return result
    },
    { default: [] },
  )
}

/**
 * Matches nodes from the given children against specified types.
 *
 * @param {React.ReactNode} children - The children nodes to be matched.
 * @param {Array} [types=[]] - An array of types to match against the children nodes.
 * @returns {Object} An object with matched nodes categorized by type and unmatched nodes in the default array.
 *
 * @example
 *
 * const { ToggleButtonItem: itemNode, default } = matchNode(children, ['ToggleButtonItem'])
 */
export function matchNode(children, types = []) {
  return Children.toArray(withoutFragment(children)).reduce(
    (result, node) => {
      const type = types.find((type) => isNode(node, type))
      if (!type) {
        result.default.push(node)
        return result
      }

      result[type] = node
      return result
    },
    { default: [] },
  )
}

/**
 * Filters the given children nodes based on the specified types.
 *
 * @param {React.ReactNode} children - The children nodes to filter.
 * @param {Array} [types=[]] - The types to filter the nodes by.
 * @returns {Array} - The filtered nodes.
 */
export function filterNodes(children, types = []) {
  return Children.toArray(withoutFragment(children)).filter((node) => {
    return types.some((type) => isNode(node, type))
  })
}
