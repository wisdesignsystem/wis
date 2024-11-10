import attrs from '@/utils/attrs'

import { rowPropTypes } from './propType'

import styles from './Row.module.scss'

function Row({ gutter = true, children }) {
  return (
    <div className={styles.row} {...attrs({ 'data-gutter': gutter })}>
      {children}
    </div>
  )
}

Row.propTypes = rowPropTypes
Row.displayName = 'Row'

export default Row
