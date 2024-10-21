import i18next from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'

import Translate from './Translate'

const LANGUAGE_STORAGE_KEY = '$__wis_language__'
window.$__wis_language__ = LANGUAGE_STORAGE_KEY

function setLocalLanguage(language) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}

function getLocalLanguage() {
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
}

class I18n {
  constructor() {
    const language = getLocalLanguage()
    if (language) {
      i18next.init({ lng: language, resources: {} })
    } else {
      i18next.use(languageDetector).init({ resources: {} })
      setLocalLanguage(i18next.language)
    }
  }

  /**
   * Returns the current language used by the i18next library.
   *
   * @returns {string} The current language.
   */
  get language() {
    return i18next.language
  }

  /**
   * Sets the language for internationalization.
   *
   * @param {string} language - The language code to set.
   *
   * @returns {void}
   */
  setLanguage(language) {
    setLocalLanguage(language)
    window.location.reload()
  }

  /**
   * Translates the given resource for the specified language.
   *
   * @param {Object} resource - The resource to be translated.
   * @param {string} namespace - Optional, The namespace for the resource. default is a random uid.
   * @param {string} language - Optional, The language code for translation. default is the current language.
   *
   * @returns {Translate} - The translated resource.
   */
  resource(resource, namespace, language) {
    const translate = new Translate(i18next, namespace)
    translate.setResource(resource, language)

    return translate
  }
}

export default I18n
