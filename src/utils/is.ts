export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

type Function = (...args: unknown[]) => unknown;
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export function isObject(value: unknown): value is object {
  return value !== null && typeof value === "object";
}

export function isComponent<T>(
  component: unknown,
  displayName: string,
): component is T {
  // @ts-ignore
  return component?.displayName === displayName;
}
