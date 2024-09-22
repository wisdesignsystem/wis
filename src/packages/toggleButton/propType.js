import PropTypes from 'prop-types'

/**
 * PropTypes for the ToggleButton component.
 */

export const toggleButtonPropTypes = {
  className: PropTypes.string,

  /**
   * Variant of the toggleButton.
   *
   * @type {default|ghost}
   * @default default
   */
  variant: PropTypes.oneOf(['default', 'ghost']),

  /**
   * Indicates if the toggleButton is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the toggleButton is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the toggleButton.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the toggleButton.
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
   * Tooltip text for the toggleButton.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Size of the toggleButton.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the toggleButton.
   *
   * @type {string}
   *
   * @example
   * ctrl + s
   */
  shortcutKey: PropTypes.string,

  value: PropTypes.bool,

  defaultValue: PropTypes.bool,

  /**
   * ToggleButton press state change handler
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *  if (value) {
   *    console.log('Toggle Button is pressed')
   *  }
   * }
   *
   * <ToggleButton onChange={handleChange} />
   */
  onChange: PropTypes.func,
}
