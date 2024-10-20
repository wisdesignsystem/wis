import { forwardRef } from 'react'
import { DownIcon } from '@wisdesign/lsicon'

import styles from './Box.module.less'

const Trigger = forwardRef(function (props, ref) {
  return (
    <button className={styles.trigger} data-trigger="" {...props}>
      <DownIcon />
    </button>
  )
})

Trigger.displayName = 'BoxTrigger'

export default Trigger
