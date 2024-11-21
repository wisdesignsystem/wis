import { useRef } from 'react'
import { ContextMenu, ContextMenuItem } from 'remote:self/contextMenu'

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
          <ContextMenuItem label="Desktop" value="desktop"></ContextMenuItem>
          <ContextMenuItem label="Tablet" value="tablet"></ContextMenuItem>
          <ContextMenuItem label="Mobile" value="mobile"></ContextMenuItem>
        </ContextMenu>
      </div>
    </div>
  )
}

export default Example
