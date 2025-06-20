import { isFunction, isNumber, isString, isUndefined } from "@/utils/is";
import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";

interface TypeDefinition {
  type: string;
  maxCount?: number;
}

type UserTypeDefinition = string | TypeDefinition;

function warn(message: string, node: ReactNode) {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  console.warn(message, node);
}

function checkNodeTypeDefinition(
  typeDefinition: TypeDefinition,
  nodes: ReactNode[],
) {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  if (!isNumber(typeDefinition.maxCount)) {
    return;
  }

  if (nodes.length > typeDefinition.maxCount) {
    const node = nodes[nodes.length - 1];
    warn(
      `Exceeded the maximum limit [${typeDefinition.maxCount}] for component type [${typeDefinition.type}], Ignored node will not be used. Please checked!`,
      node,
    );
  }
}

function toTypeDefinition(type: UserTypeDefinition): TypeDefinition {
  if (isString(type)) {
    return { type };
  }

  return type;
}

function unwrapFragment(children: ReactNode) {
  if (!isValidElement(children)) {
    return children;
  }

  if (children.type.toString() === "Symbol(react.fragment)") {
    return (children.props as { children?: ReactNode }).children;
  }

  return children;
}

function getNodeType(node: ReactNode) {
  if (!isValidElement(node)) {
    return;
  }

  if (isUndefined(node.type) || isString(node.type)) {
    return;
  }

  // @ts-ignore
  if (!isFunction(node.type.getSymbiote)) {
    // @ts-ignore
    return node.type.displayName;
  }

  let currentNode = node;
  // @ts-ignore
  while (isFunction(currentNode.type.getSymbiote)) {
    // @ts-ignore
    currentNode = currentNode.type.getSymbiote(currentNode.props.children);
  }

  // @ts-ignore
  return currentNode.type.displayName;
}

export function getSymbioteElement(node: ReactNode) {
  if (!isValidElement(node)) {
    return node;
  }

  if (isUndefined(node.type) || isString(node.type)) {
    return node;
  }

  // @ts-ignore
  if (!isFunction(node.type.getSymbiote)) {
    return node;
  }

  let currentNode = node;
  // @ts-ignore
  while (isFunction(currentNode.type.getSymbiote)) {
    // @ts-ignore
    currentNode = currentNode.type.getSymbiote(currentNode.props.children);
  }

  return currentNode;
}

/**
 * Checks if the component matches the specified type. If the component node is a symbiotic component,
 * it continues to check if the symbiotic component matches the specified type.
 */
export function isElement(node: ReactNode, type: string) {
  if (!isValidElement(node)) {
    return false;
  }

  const nodeType = getNodeType(node);
  return nodeType === type;
}

interface MathElementResult {
  /**
   * Stores nodes that are not in the matching type list
   */
  unmatched: ReactNode[];
  /**
   * Stores nodes that match the matching type list
   */

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  matched: ReactElement<any>[];
  /**
   * Stores the list of matched nodes categorized by type
   */

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  elements: { [type: string]: ReactElement<any>[] };
}

export function matchElement(
  children: ReactNode,
  typeDefinitions: UserTypeDefinition[] = [],
  strict = true,
): MathElementResult {
  const typeDefinitionMap = typeDefinitions.reduce(
    (result, item) => {
      const typeDefinition = toTypeDefinition(item);
      result[typeDefinition.type] = typeDefinition;
      return result;
    },
    {} as { [key: string]: TypeDefinition },
  );

  const result = Children.toArray(unwrapFragment(children)).reduce(
    (result, node) => {
      const nodeType = getNodeType(node);
      const nodeTypeDefinition = typeDefinitionMap[nodeType];

      if (!nodeTypeDefinition || !isValidElement(node)) {
        result.unmatched.push(node);
        return result;
      }

      if (!result.elements[nodeType]) {
        result.elements[nodeType] = [];
      }

      result.matched.push(node);
      result.elements[nodeType].push(node);

      checkNodeTypeDefinition(nodeTypeDefinition, result.elements[nodeType]);

      return result;
    },
    { unmatched: [], matched: [], elements: {} } as MathElementResult,
  );

  // In strict mode, check if there are any unmatched nodes. If they exist, give a warning.
  if (strict && result.unmatched.length) {
    for (const node of result.unmatched) {
      warn("Ignored node will not be used. Please checked!", node);
    }
  }

  return result;
}
