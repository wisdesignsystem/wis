import PropTypes from 'prop-types'

export const boxPropTypes = {
  className: PropTypes.string,

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
   * <Box onCollapsed={handleCollapsed}></Box>
   */
  onCollapsed: PropTypes.func,
}

export const boxHeaderPropTypes = {
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
   * tip text of Box component
   */
  tip: PropTypes.string,
}

export const boxContentPropTypes = {
  className: PropTypes.string,
}

export const boxFooterPropTypes = {
  className: PropTypes.string,
}

export const boxActionPropTypes = {
  className: PropTypes.string,
}

export const boxCollapsePropTypes = {
  className: PropTypes.string,
}

export const boxClosePropTypes = {
  /**
   * Callback function when the close button is clicked
   *
   * @type {function}
   *
   * @example
   *
   * function handleClose() {}
   *
   * <Box>
   *  <Box.Header>
   *    <Box.Close onClick={handleClose} />
   *  </Box.Header>
   * </Box>
   */
  onClick: PropTypes.func,
}
