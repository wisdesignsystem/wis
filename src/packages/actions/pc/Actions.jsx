import PropTypes from 'prop-types'

import styles from './Actions.module.scss'

function Actions({ children }) {
  return <div className={styles.actions}>{children}</div>
}

Actions.displayName = 'Actions'
Actions.propTypes = {
  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Actions
