import { nanoid } from 'nanoid'

class Translate {
  constructor(i18next, namespace) {
    this.i18next = i18next
    this.namespace = namespace || nanoid()
  }

  /**
   * Returns the current language used by the i18next library.
   *
   * @returns {string} The current language.
   */
  get language() {
    return this.i18next.language
  }

  /**
   * Retrieves the resource bundle for the current language and namespace.
   *
   * @returns {Object} The resource bundle.
   */
  get resource() {
    return this.i18next.getResourceBundle(this.i18next.language, this.namespace)
  }

  /**
   * Sets the resource bundle for a specific language.
   *
   * @param {Object} resource - The resource bundle to be added.
   * @param {string} language - Optional, The language code for the resource bundle.
   *
   * @returns {void}
   */
  setResource(resource, language) {
    this.i18next.addResourceBundle(language || this.language, this.namespace, resource, true, true)
  }

  /**
   * Updates the resource bundle for a given language.
   *
   * @param {Object} resource - The resource object to be added to the resource bundle.
   * @param {string} language - Optional, The language for which the resource bundle should be updated. If not provided, the default language will be used.
   *
   * @returns {void}
   */
  updateResource(resource, language) {
    this.i18next.addResourceBundle(language || this.language, this.namespace, resource, true, false)
  }

  /**
   * Translates the given key using the specified parameters.
   *
   * @param {string} key - The translation key.
   * @param {object} params - The parameters to be used in the translation.
   *
   * @returns {string} - The translated string.
   */
  t(key, params) {
    return this.i18next.t(key, { ...params, ns: this.namespace })
  }
}

export default Translate
