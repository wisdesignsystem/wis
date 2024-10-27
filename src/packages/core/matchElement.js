import { Children } from 'react'
import { isString, isNumber } from '@/utils/is'

/**
 * The matching type can be a simple string type or a complex object type.
 *
 * @typedef {string|object} TypeDefinition
 *
 * @property {string} type - The type of the component, corresponding to the `displayName` property value of the component.
 * @property {number} maxCount - Configure the maximum number of supported nodes of this type.
 */

function warn(message, node) {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  console.warn(message, node)
}

function checkNodeTypeDefinition(typeDefinition, nodes) {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  if (!isNumber(typeDefinition.maxCount)) {
    return
  }

  if (nodes.length > typeDefinition.maxCount) {
    const node = nodes[nodes.length - 1]
    warn(
      `Exceeded the maximum limit [${typeDefinition.maxCount}] for component type [${typeDefinition.type}], Ignored node will not be used. Please checked!`,
      node,
    )
  }
}

function toTypeDefinition(type) {
  if (isString(type)) {
    return { type }
  }

  return type
}

function unwrapFragment(children) {
  if (children?.type?.toString() === 'Symbol(react.fragment)') {
    return children.props.children
  }

  return children
}

function getNodeType(node) {
  return node?.type?.displayName || node?.type?.getSymbiote?.(node?.props?.children)?.type?.displayName
}

/**
 * Checks if the component matches the specified type. If the component node is a symbiotic component,
 * it continues to check if the symbiotic component matches the specified type.
 *
 * @param {ReactElement} node React component node instance
 * @param {string} type The expected component type to match
 *
 * @returns {boolean}
 */
export function isElement(node, type) {
  const nodeType = getNodeType(node)
  return nodeType === type
}

export function matchElement(children, typeDefinitions = [], strict = true) {
  const typeDefinitionMap = typeDefinitions.reduce((result, item) => {
    const typeDefinition = toTypeDefinition(item)
    result[typeDefinition.type] = {
      ...typeDefinition,
      remainingCount: typeDefinition.count,
    }
    return result
  }, {})

  const result = Children.toArray(unwrapFragment(children)).reduce(
    (result, node) => {
      const nodeType = getNodeType(node)
      const nodeTypeDefinition = typeDefinitionMap[nodeType]

      if (!nodeTypeDefinition) {
        result.unmatched.push(node)
        return result
      }

      if (!result[nodeType]) {
        result[nodeType] = []
      }

      result.matched.push(node)
      result[nodeType].push(node)

      checkNodeTypeDefinition(nodeTypeDefinition, result[nodeType])

      return result
    },
    { unmatched: [], matched: [] },
  )

  // In strict mode, check if there are any unmatched nodes. If they exist, give a warning.
  if (strict && result.unmatched.length) {
    result.unmatched.forEach((node) => {
      warn('Ignored node will not be used. Please checked!', node)
    })
  }

  return result
}
