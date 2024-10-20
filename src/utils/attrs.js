import { isBoolean } from './is'

/**
 * Processes an object and returns a new object with specific attributes.
 * Only for html tag data attributes, when the value is true, show data-attribute without value
 *
 * - If the value of a key is not a boolean, it is added to the result object.
 * - If the value of a key is truthy, the key is added to the result object with an empty string as its value.
 *
 * @param {Object} data - The input object to process.
 * @returns {Object} The processed object with specific attributes.
 */
export default function attrs(data) {
  return Object.keys(data).reduce((result, key) => {
    const value = data[key]

    if (!isBoolean(value)) {
      result[key] = value
      return result
    }

    if (value) {
      result[key] = ''
    }

    return result
  }, {})
}
