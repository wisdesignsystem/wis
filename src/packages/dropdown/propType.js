import PropTypes from 'prop-types'

/**
 * PropTypes for the Dropdown component.
 */

export const dropdownPropTypes = {
  className: PropTypes.string,

  /**
   * Indicates if the Dropdown is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Dropdown is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Dropdown.
   * This attribute takes effect only when variant is "normal" and "avatar".
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Dropdown.
   * This attribute takes effect only when variant is "normal" and "menu".
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Avatar element to be displayed on the Dropdown
   * This attribute takes effect only when variant is "avatar".
   */
  avatar: PropTypes.element,

  /**
   * Description for the Dropdown.
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * Direction of the arrow for the Dropdown.
   *
   * @type {down|right}
   * @default down
   */
  arrowDirection: PropTypes.oneOf(['down', 'right']),
}

/**
 * PropTypes for the Dropdown.Button component.
 */

export const dropdownButtonPropTypes = {
  /**
   * Custom class name for the Dropdown.Button.
   *
   * @type {string}
   */
  className: PropTypes.string,

  /**
   * Variant of the Dropdown.Button.
   *
   * @type {primary|classic|secondary}
   * @default secondary
   */
  variant: PropTypes.oneOf(['primary', 'classic', 'secondary']),

  /**
   * Indicates if the Dropdown.Button is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Dropdown.Button is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Dropdown.Button.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Dropdown.Button.
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
   * Tooltip text for the Dropdown.Button.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Size of the Dropdown.Button.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the Dropdown.Button.
   *
   * @type {string}
   *
   * @example
   * control + s
   */
  shortcutKey: PropTypes.string,
}
