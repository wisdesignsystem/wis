import { rowPropTypes } from './propType'

import styles from './Row.module.less'

function Row({ children }) {
  return <div className={styles.row}>{children}</div>
}

Row.propTypes = rowPropTypes
Row.displayName = 'Row'

export default Row
