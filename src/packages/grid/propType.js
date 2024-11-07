import PropTypes from 'prop-types'

const Size = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

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

export const rowPropTypes = {}

export const colPropTypes = {
  size: ResponsiveSize,
  offset: ResponsiveSize,
}
