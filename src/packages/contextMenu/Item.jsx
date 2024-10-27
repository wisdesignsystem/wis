import { Children } from 'react'
import { useGlobalShortcut } from 'remote:self/core'

import Shortcut from './Shortcut'
import { contextMenuItemPropTypes } from './propType'

function Item({
  mapper,
  disabled,
  role,
  value,
  checked,
  shortcutKey,
  onSelect = () => {},
  onCheck = () => {},
  children,
}) {
  const matched = []
  Children.toArray(children).some((element) => {
    const type = mapper(element?.type?.displayName)
    const isMatched = [
      'ContextMenuItem',
      'ContextMenuGroup',
      'ContextMenuCheckboxGroup',
      'ContextMenuRadioGroup',
    ].includes(type)

    if (isMatched) {
      matched.push(element)
    }

    return isMatched
  })

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
    return <Shortcut mapper={mapper}>{matched}</Shortcut>
  }

  return null
}

Item.propTypes = contextMenuItemPropTypes

export default Item
