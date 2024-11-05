import attrs from '@/utils/attrs'

import { itemPropTypes } from './propType'

import styles from './Flex.module.less'

function Item({ children, size = 12, offset }) {
  return (
    <div className={styles.item} data-size={size} {...attrs({ 'data-offset': offset })}>
      {children}
    </div>
  )
}

Item.propTypes = itemPropTypes
Item.displayName = 'FlexItem'

export default Item
