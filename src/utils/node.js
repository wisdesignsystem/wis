import { Children } from 'react'
import { isFunction } from '@/utils/is'

function withoutFragment(children) {
  if (children?.type?.toString() === 'Symbol(react.fragment)') {
    return children.props.children
  }

  return children
}

/**
 * Checks if the given node matches the specified type.
 *
 * @param {Object} node - The node to check.
 * @param {string} type - The type to compare against.
 * @returns {boolean} - Returns true if the node matches the specified type, otherwise false.
 */
export function isNode(node, type) {
  if (!node?.type || !node?.type?.displayName) {
    return false
  }

  if (node.type.displayName === type) {
    return true
  }

  if (!isFunction(node.type.getSymbiote)) {
    return false
  }

  return node.type.getSymbiote(node.props.children)?.type?.displayName === type
}

/**
 * Matches children nodes against specified types and categorizes them.
 *
 * @param {React.ReactNode[]} children - The children nodes to match.
 * @param {Array} [types=[]] - The types to match the children against.
 * @returns {Object} An object containing matched and unmatched nodes, as well as nodes categorized by type.
 * @property {React.ReactNode[]} unmatched - Nodes that did not match any type.
 * @property {React.ReactNode[]} matched - Nodes that matched any type.
 */
export function matchChildren(children, types = []) {
  return Children.toArray(withoutFragment(children)).reduce(
    (result, node) => {
      const type = types.find((type) => isNode(node, type))
      if (!type) {
        result.unmatched.push(node)
        return result
      }

      if (!result[type]) {
        result[type] = []
      }

      result.matched.push(node)
      result[type].push(node)

      return result
    },
    { unmatched: [], matched: [] },
  )
}
