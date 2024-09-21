import PropTypes from 'prop-types'

/**
 * PropTypes for the Shortcut component.
 */

export default {
  /**
   * Shortcut key for the button.
   *
   * @type {string}
   *
   * @example
   * ctrl + s
   */
  shortcutKey: PropTypes.string,

  /**
   * Variant of the shortcut.
   *
   * @type {light|dark}
   * @default light
   */
  variant: PropTypes.oneOf(['light', 'dark']),

  /**
   * Indicates if the shortcut is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Size of the button.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  onTrigger: PropTypes.func,
}
