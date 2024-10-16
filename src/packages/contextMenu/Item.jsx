import { useGlobalShortcut } from 'remote:self/core'
import { matchChildren } from '@/utils/node'

import Shortcut from './Shortcut'
import { contextMenuItemPropTypes } from './propType'

function Item({ disabled, role, value, checked, shortcutKey, onSelect = () => {}, onCheck = () => {}, children }) {
  const { matched } = matchChildren(children, [
    'ContextMenuItem',
    'ContextMenuGroup',
    'ContextMenuCheckboxGroup',
    'ContextMenuRadioGroup',
  ])
  const hasSubmenu = matched.length > 0
  // eslint-disable-next-line no-unused-vars
  const [_, onGlobalShortcut] = useGlobalShortcut(hasSubmenu ? undefined : shortcutKey)
  onGlobalShortcut(() => {
    if (disabled) {
      return
    }

    if (role === 'menuitemcheckbox') {
      onCheck(!checked)
      return
    }

    if (role === 'menuitemradio') {
      onCheck()
      return
    }

    onSelect()
  })

  if (hasSubmenu) {
    return <Shortcut>{matched}</Shortcut>
  }

  return null
}

Item.propTypes = contextMenuItemPropTypes

export default Item
