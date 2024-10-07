import { useGlobalShortcut } from 'remote:self/core'
import { filterNodes } from '@/utils/node'

import ShortcutSnapshot from '../ShortcutSnapshot'
import { dropdownItemPropTypes } from '../propType'

function Item({ disabled, role, value, checked, shortcutKey, onSelect = () => {}, onCheck = () => {}, children }) {
  const nodes = filterNodes(children, ['DropdownItem', 'DropdownGroup', 'DropdownCheckboxGroup', 'DropdownRadioGroup'])
  const hasSubmenu = nodes.length > 0
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
    return <ShortcutSnapshot>{nodes}</ShortcutSnapshot>
  }

  return null
}

Item.propTypes = dropdownItemPropTypes

export default Item
