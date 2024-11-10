import { useRef } from 'react'
import ContextMenu from 'remote:self/ContextMenu'

import styles from './ContextMenu.module.scss'

function Example() {
  const triggerRef = useRef(null)

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <ContextMenu>
          <div className={styles.content} ref={triggerRef}>
            Right Click me
          </div>
          <ContextMenu.Item label="Desktop" value="desktop"></ContextMenu.Item>
          <ContextMenu.Item label="Tablet" value="tablet"></ContextMenu.Item>
          <ContextMenu.Item label="Mobile" value="mobile"></ContextMenu.Item>
        </ContextMenu>
      </div>
    </div>
  )
}

export default Example
