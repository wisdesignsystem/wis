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

export const rowPropTypes = {
  /**
   * enable gutter for Row component
   * @default true
   */
  gutter: PropTypes.bool,
}

export const colPropTypes = {
  /**
   * Size for Col component, support responsive size
   */
  size: ResponsiveSize,

  /**
   * Offset for Col component, support responsive size
   */
  offset: ResponsiveSize,
}
