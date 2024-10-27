import PropTypes from 'prop-types'

export const layoutPropTypes = {
  className: PropTypes.string,

  /**
   * title of Layout component
   *
   * @type {string}
   */
  title: PropTypes.string,

  /**
   * description of Layout component
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * tip text of Layout component
   */
  tip: PropTypes.string,
}

export const mainPropTypes = {
  className: PropTypes.string,
}

export const leftPropTypes = {
  className: PropTypes.string,

  title: PropTypes.string,

  description: PropTypes.string,

  tip: PropTypes.string,
}

export const rightPropTypes = {
  className: PropTypes.string,

  title: PropTypes.string,

  description: PropTypes.string,

  tip: PropTypes.string,
}

export const topPropTypes = {
  className: PropTypes.string,
}

export const bottomPropTypes = {
  className: PropTypes.string,

  title: PropTypes.string,

  description: PropTypes.string,

  tip: PropTypes.string,
}
