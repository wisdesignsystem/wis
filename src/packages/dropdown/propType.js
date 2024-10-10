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
 * PropTypes for the Dropdown.Item component.
 */

export const dropdownItemPropTypes = {
  className: PropTypes.string,

  /**
   * Status of the Dropdown.
   *
   * @type {danger}
   * @default normal
   */
  status: PropTypes.oneOf(['danger']),

  /**
   * Indicates if the Dropdown.Item is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Label text for the Dropdown.Item.
   */
  label: PropTypes.string,

  /**
   * Icon element to be displayed on the Dropdown.Item.
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Tip text for the Dropdown.Item.
   */
  tip: PropTypes.string,

  /**
   * Value associated with the Dropdown.Item.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Global shortcut key for the Dropdown.Item.
   */
  shortcutKey: PropTypes.string,

  /**
   * Callback function to handle select, it will trigger when the Dropdown.Item is normal menu button
   *
   * @type {function}
   *
   * @example
   *
   * function handleSelect() {
   *
   * }
   *
   * <Dropdown>
   *  <Dropdown.Item value="a" onSelect={handleSelect}></Toggle.Item>
   * </Dropdown>
   */
  onSelect: PropTypes.func,
}

/**
 * PropTypes for the Dropdown.Group component.
 */

export const dropdownGroupPropTypes = {
  /**
   * The label for the dropdown group.
   * @type {string}
   */
  label: PropTypes.string,

  /**
   * Callback function to handle click events, when the Dropdown.Item wrapped by Dropdown.Group is clicked, it triggers.
   *
   * @type {function}
   *
   * @example
   *
   * function handleClick(value) {
   *
   * }
   *
   * <Dropdown>
   *  <Dropdown.Group label="Group Title" onClick={handleClick}>
   *    <Dropdown.Item value="a"></Dropdown.Item>
   *  </Dropdown.Group>
   * </Dropdown>
   */
  onSelect: PropTypes.func,
}

/**
 * PropTypes for the Dropdown.RadioGroup component.
 */

export const dropdownRadioGroupPropTypes = {
  /**
   * The label for the checkbox group.
   *
   * @type {string}
   */
  label: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Callback function to handle changes in the checkbox group.
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *
   * }
   *
   * <Dropdown>
   *  <Dropdown.RadioGroup label="Group Title" onChange={handleChange}>
   *    <Dropdown.Item value="a"></Dropdown.Item>
   *  </Dropdown.RadioGroup>
   * </Dropdown>
   */
  onChange: PropTypes.func,
}

/**
 * PropTypes for the Dropdown.CheckboxGroup component.
 */

export const dropdownCheckboxGroupPropTypes = {
  /**
   * The label for the checkbox group.
   *
   * @type {string}
   */
  label: PropTypes.string,

  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  /**
   * Callback function to handle changes in the checkbox group.
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *
   * }
   *
   * <Dropdown>
   *  <Dropdown.CheckboxGroup label="Group Title" onChange={handleChange}>
   *    <Dropdown.Item value="a"></Dropdown.Item>
   *  </Dropdown.CheckboxGroup>
   * </Dropdown>
   */
  onChange: PropTypes.func,
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
