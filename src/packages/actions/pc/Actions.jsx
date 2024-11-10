import PropTypes from 'prop-types'

import styles from './Actions.module.scss'

function Actions({ children }) {
  return <div className={styles.actions}>{children}</div>
}

Actions.propTypes = {
  children: PropTypes.node,
}
Actions.displayName = 'Actions'

export default Actions
