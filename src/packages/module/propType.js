import PropTypes from 'prop-types'

const Size = PropTypes.oneOf([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
])

const ResponsiveSize = PropTypes.oneOfType([
  Size,
  PropTypes.shape({
    base: Size,
    sm: Size,
    md: Size,
    lg: Size,
    xl: Size,
    xxl: Size,
  }),
])

export default {
  className: PropTypes.string,

  /**
   * title of Module component
   *
   * @type {string}
   */
  title: PropTypes.string.isRequired,

  /**
   * description of Module component
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * tip text of Module component
   */
  tip: PropTypes.string,

  /**
   * Variant of the Module component.
   *
   * @type {basic|ghost}
   * @default basic
   */
  variant: PropTypes.oneOf(['basic', 'ghost']),

  /**
   * Grid responsive size of Module component
   */
  size: ResponsiveSize,

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
   * Callback function when the box is collapsed
   *
   * @type {function}
   *
   * @example
   *
   * function handleCollapsed(collapsed) {}
   *
   * <Module onCollapsed={handleCollapsed}></Module>
   */
  onCollapsed: PropTypes.func,
}
