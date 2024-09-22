import PropTypes from 'prop-types'

/**
 * PropTypes for the Toggle component.
 */

export const togglePropTypes = {
  className: PropTypes.string,

  /**
   * Variant of the Toggle.
   *
   * @type {default|ghost}
   * @default default
   */
  variant: PropTypes.oneOf(['default', 'ghost']),

  /**
   * Indicates if the Toggle is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Toggle is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  /**
   * Text to be displayed on the Toggle.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Toggle.
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
   * Tooltip text for the Toggle.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Size of the Toggle.
   *
   * @type {sm|xs|md}
   * @default md
   */
  size: PropTypes.oneOf(['sm', 'xs', 'md']),

  /**
   * Shortcut key for the Toggle.
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
   * Toggle press state change handler
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
   * <Toggle onChange={handleChange} />
   */
  onChange: PropTypes.func,
}

/**
 * PropTypes for the Toggle.Group component.
 */

export const toggleGroupPropTypes = {
  className: PropTypes.string,

  /**
   * Size of the Toggle.Group.
   *
   * @type {sm|md}
   * @default md
   */
  size: PropTypes.oneOf(['md', 'sm']),

  /**
   * Variant of the Toggle.Group.
   *
   * @type {normal|compact}
   * @default normal
   */
  variant: PropTypes.oneOf(['normal', 'compact']),

  /**
   * Indicates if the Toggle.Group is disabled, this will make all Toggle.Item disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Indicates if the Toggle.Group is in a loading state.
   *
   * @type {boolean}
   * @default false
   */
  loading: PropTypes.bool,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),

  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),

  multiple: PropTypes.bool,

  /**
   * Toggle.Group value change handler
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   * console.log('Toggle Button Group value is', value)
   * }
   *
   * <Toggle.Group onChange={handleChange}>
   *  <Toggle.Item value="a"></Toggle.Item>
   *  <Toggle.Item value="b"></Toggle.Item>
   * </Toggle.Group>
   */
  onChange: PropTypes.func,
}

/**
 * PropTypes for the Toggle.Item component.
 */

export const toggleItemPropTypes = {
  className: PropTypes.string,

  /**
   * Indicates if the Toggle.Item is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Text to be displayed on the Toggle.Item.
   *
   * @type {string}
   */
  text: PropTypes.string,

  /**
   * Icon element to be displayed on the Toggle.Item.
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
   * Tooltip text for the Toggle.Item.
   *
   * @type {string}
   */
  tooltip: PropTypes.string,

  /**
   * Shortcut key for the Toggle.Item.
   *
   * @type {string}
   *
   * @example
   * ctrl + s
   */
  shortcutKey: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
