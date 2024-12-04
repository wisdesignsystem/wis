import type { ReactNode, ReactElement } from "react";
import { Children, isValidElement } from "react";
import { isFunction, isNumber, isString } from "@/utils/is";

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
		return children.props.children;
	}

	return children;
}

function getNodeType(node: ReactNode) {
	if (!isValidElement(node)) {
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
	const nodeType = getNodeType(node);
	return nodeType === type;
}

export function matchElement(
	children: ReactNode,
	typeDefinitions: UserTypeDefinition[] = [],
	strict = true,
) {
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

			if (!result.types[nodeType]) {
				result.types[nodeType] = [];
			}

			result.matched.push(node);
			result.types[nodeType].push(node);

			checkNodeTypeDefinition(nodeTypeDefinition, result.types[nodeType]);

			return result;
		},
		{ unmatched: [], matched: [], types: {} } as {
			unmatched: ReactNode[];
			matched: ReactElement[];
			types: { [type: string]: ReactElement[] };
		},
	);

	// In strict mode, check if there are any unmatched nodes. If they exist, give a warning.
	if (strict && result.unmatched.length) {
		for (const node of result.unmatched) {
			warn("Ignored node will not be used. Please checked!", node);
		}
	}

	return result;
}
