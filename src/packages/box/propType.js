import PropTypes from 'prop-types'

/**
 * PropTypes for the Box component.
 */

export default {
  className: PropTypes.string,

  /**
   * title of Box component
   *
   * @type {string}
   */
  title: PropTypes.string,

  /**
   * description of Box component
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * Tag component for Box component
   *
   * @type {React.Element}
   */
  tag: PropTypes.element,

  /**
   * Status component for Box component
   *
   * @type {React.Element}
   */
  status: PropTypes.element,

  /**
   * Icon component for Box component
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * tip text of Box component
   */
  tip: PropTypes.string,

  /**
   * Determines if the box is closeable.
   *
   * @type {boolean}
   */
  closeable: PropTypes.bool,

  /**
   * Determines if the box is collapsible.
   *
   * @type {boolean}
   */
  collapsible: PropTypes.bool,

  /**
   * Default collapsed state of the box.
   *
   * @type {boolean}
   *
   * @default true
   */
  defaultCollapsed: PropTypes.bool,

  /**
   * Current collapsed state of the box.
   *
   * @type {boolean}
   */
  collapsed: PropTypes.bool,

  /**
   * Space rule for the box. only support of info|operator|help|actions
   *
   * @type {string}
   *
   * @default
   * `info operator help actions`
   *
   * @example
   * `info actions
   * help operator`
   */
  spaceRule: PropTypes.string,

  /**
   * Callback function when the box is collapsed
   *
   * @type {function}
   *
   * @example
   *
   * function handleCollapsed(collapsed) {}
   *
   * <Box onCollapsed={handleCollapsed}></Box>
   */
  onCollapsed: PropTypes.func,

  /**
   * Callback function when the box close button is clicked
   *
   * @type {function}
   *
   * @example
   *
   * function handleClose() {}
   *
   * <Box onClose={handleClose}></Box>
   */
  onClose: PropTypes.func,
}
