import PropTypes from 'prop-types'

export default {
  className: PropTypes.string,

  /**
   * title of Layout component
   *
   * @type {string}
   */
  title: PropTypes.string.isRequired,

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
