import classNames from 'classnames'
import PropTypes from 'prop-types'
import { matchElement } from 'remote:self/core'

import Layout from './Layout'

import styles from './Layout.module.scss'

function Top({ className, children, ...rest }) {
  const { unmatched } = matchElement(children, [{ type: 'Actions', maxCount: 0 }], false)

  return (
    <Layout {...rest} className={classNames(styles.top, { [className]: !!className })}>
      {unmatched}
    </Layout>
  )
}

Top.displayName = 'Top'
Top.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Top
