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