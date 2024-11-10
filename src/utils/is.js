function check(data, type) {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}

export function isUndefined(data) {
  return check(data, 'Undefined')
}

export function isNull(data) {
  return check(data, 'Null')
}

export function isString(data) {
  return check(data, 'String')
}

export function isFunction(data) {
  return check(data, 'Function')
}

export function isObject(data) {
  return check(data, 'Object')
}

export function isNumber(data) {
  return check(data, 'Number') && !Number.isNaN(data)
}

export function isRegExp(data) {
  return check(data, 'RegExp')
}

export function isArray(data) {
  return check(data, 'Array')
}

export function isDate(data) {
  return check(data, 'Date')
}

export function isBoolean(data) {
  return check(data, 'Boolean')
}

/**
 * Checks if a value is one of the elements in the provided array.
 *
 * @param {Array} enums - The array of values to check against.
 * @returns {Function} A function that takes a value and returns true if the value is in the array, otherwise false.
 */
export function isOneOf(enums) {
  return function (value) {
    if (isArray(enums)) {
      return enums.includes(value)
    }

    return false
  }
}
