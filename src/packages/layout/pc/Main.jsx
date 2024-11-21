import PropTypes from 'prop-types'

import Layout from './Layout'

function Main({ className, title, description, tip, gutter, children, ...rest }) {
  return (
    <Layout {...rest} className={className} gutter={gutter} title={title} description={description} tip={tip}>
      {children}
    </Layout>
  )
}

Main.displayName = 'Main'
Main.propTypes = {
  /**
   * @hidden
   */
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

  /**
   * @private
   */
  gutter: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Main
