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

  responsive: PropTypes.bool,

  gutter: PropTypes.bool,
}

export const mainPropTypes = {
  className: PropTypes.string,

  responsive: PropTypes.bool,

  gutter: PropTypes.bool,
}

export const leftPropTypes = {
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

export const rightPropTypes = {
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

export const topPropTypes = {
  className: PropTypes.string,
}

export const bottomPropTypes = {
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
