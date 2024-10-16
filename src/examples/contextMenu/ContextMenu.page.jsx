import { useRef } from 'react'
import ContextMenu from 'remote:self/ContextMenu'

function Example() {
  const triggerRef = useRef(null)

  return (
    <>
      <ContextMenu>
        <div ref={triggerRef}>Context Menu try right click</div>
        <ContextMenu.Item label="Desktop" value="desktop"></ContextMenu.Item>
        <ContextMenu.Item label="Tablet" value="tablet"></ContextMenu.Item>
        <ContextMenu.Item label="Mobile" value="mobile"></ContextMenu.Item>
      </ContextMenu>
    </>
  )
}

export default Example
