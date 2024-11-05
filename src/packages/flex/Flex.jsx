import { flexPropTypes } from './propType'
import Item from './Item'

import styles from './Flex.module.less'

function Flex({ children }) {
  return <div className={styles.flex}>{children}</div>
}

Flex.propTypes = flexPropTypes
Flex.displayName = 'Flex'
Flex.Item = Item

export default Flex
