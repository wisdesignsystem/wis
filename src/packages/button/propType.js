import PropTypes from 'prop-types'

/**
 * PropTypes for the Button component.
 */

export default {
  /**
   * Custom class name for the button.
   *
   * @type {string}
   */
  className: PropTypes.string,

  /**
   * Variant of the button.
   *
   * @type {primary|classic|secondary|tertiary|ghost}
   * @default secondary
   */
  variant: PropTypes.oneOf(['primary', 'classic', 'secondary', 'tertiary', 'ghost']),

  /**
   * Status of the button.
   *
   * @type {normal|danger}
   * @default normal
   */
  status: PropTypes.oneOf(['normal', 'danger']),

  /**
   * Indicates if the button is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the button is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the button.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the button.
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Position of the icon relative to the text.
   *
   * @type {prefix|suffix}
   * @default prefix
   */
  iconControl: PropTypes.oneOf(['prefix', 'suffix']),

  /**
   * Tooltip text for the button.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Size of the button.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the button.
   *
   * @type {string}
   *
   * @example
   * control + s
   */
  shortcutKey: PropTypes.string,
}
