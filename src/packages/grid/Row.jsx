import PropTypes from 'prop-types'
import attrs from '@/utils/attrs'

import styles from './Row.module.scss'

function Row({ gutter = true, children }) {
  return (
    <div className={styles.row} {...attrs({ 'data-gutter': gutter })}>
      {children}
    </div>
  )
}

Row.displayName = 'Row'
Row.propTypes = {
  /**
   * enable gutter for Row component
   *
   * @default true
   */
  gutter: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Row
