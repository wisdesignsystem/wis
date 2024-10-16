import PropTypes from 'prop-types'

/**
 * PropTypes for the ContextMenu component.
 */

export const contextMenuPropTypes = {
  /**
   * Indicates if the ContextMenu is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,
}

/**
 * PropTypes for the ContextMenu.Item component.
 */

export const contextMenuItemPropTypes = {
  className: PropTypes.string,

  /**
   * Status of the ContextMenu.Item.
   * This attribute takes effect only when item is normal menu item.
   *
   * @type {danger}
   * @default normal
   */
  status: PropTypes.oneOf(['danger']),

  /**
   * Indicates if the ContextMenu.Item is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Label text for the ContextMenu.Item.
   */
  label: PropTypes.string,

  /**
   * Icon element to be displayed on the ContextMenu.Item.
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Tip text for the ContextMenu.Item.
   */
  tip: PropTypes.string,

  /**
   * Value associated with the ContextMenu.Item.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Global shortcut key for the ContextMenu.Item.
   */
  shortcutKey: PropTypes.string,

  /**
   * Callback function to handle select, it will trigger when the ContextMenu.Item is normal menu button
   *
   * @type {function}
   *
   * @example
   *
   * function handleSelect() {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.Item value="a" onSelect={handleSelect}></Toggle.Item>
   * </ContextMenu>
   */
  onSelect: PropTypes.func,
}

/**
 * PropTypes for the ContextMenu.Group component.
 */

export const contextMenuGroupPropTypes = {
  /**
   * The label for the ContextMenu.Group.
   * @type {string}
   */
  label: PropTypes.string,

  /**
   * Callback function to handle click events, when the Dropdown.Item wrapped by ContextMenu.Group is clicked, it triggers.
   *
   * @type {function}
   *
   * @example
   *
   * function handleClick(value) {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.Group label="Group Title" onClick={handleClick}>
   *    <ContextMenu.Item value="a"></ContextMenu.Item>
   *  </ContextMenu.Group>
   * </ContextMenu>
   */
  onSelect: PropTypes.func,
}

/**
 * PropTypes for the ContextMenu.RadioGroup component.
 */

export const contextMenuRadioGroupPropTypes = {
  /**
   * The name for the ContextMenu.RadioGroup.
   *
   * @type {string}
   */
  name: PropTypes.string.isRequired,

  /**
   * The label for the ContextMenu.RadioGroup.
   *
   * @type {string}
   */
  label: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Callback function to handle changes in the ContextMenu.RadioGroup.
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.RadioGroup name="group" label="Group Title" onChange={handleChange}>
   *    <ContextMenu.Item value="a"></ContextMenu.Item>
   *  </ContextMenu.RadioGroup>
   * </ContextMenu>
   */
  onChange: PropTypes.func,
}

/**
 * PropTypes for the ContextMenu.CheckboxGroup component.
 */

export const contextMenuCheckboxGroupPropTypes = {
  /**
   * The name for the ContextMenu.CheckboxGroup.
   *
   * @type {string}
   */
  name: PropTypes.string.isRequired,

  /**
   * The label for the ContextMenu.CheckboxGroup.
   *
   * @type {string}
   */
  label: PropTypes.string,

  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  /**
   * Callback function to handle changes in the ContextMenu.CheckboxGroup.
   *
   * @type {function}
   *
   * @example
   *
   * function handleChange(value) {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.CheckboxGroup name="group" label="Group Title" onChange={handleChange}>
   *    <ContextMenu.Item value="a"></ContextMenu.Item>
   *  </ContextMenu.CheckboxGroup>
   * </ContextMenu>
   */
  onChange: PropTypes.func,
}
