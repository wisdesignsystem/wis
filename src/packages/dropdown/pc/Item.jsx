import { useRef, useContext } from 'react'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import { attrs } from '@/utils/attrs'
import classNames from 'classnames'
import Shortcut from 'remote:self/Shortcut'
import { CheckIcon, CircleHelpIcon, RightIcon } from '@wisdesign/lsicon'
import { filterNodes, isNode } from '@/utils/node'

import Context from '../Context'
import { dropdownItemPropTypes } from '../propType'

import styles from './Dropdown.module.less'

function Item({
  role,
  disabled,
  label,
  icon,
  tip,
  value,
  shortcutKey,
  status,
  checked,
  onSelect = () => {},
  onCheckedChange = () => {},
  children,
}) {
  const { contextType } = useContext(Context)
  const item = useRef(null)
  const nodes = filterNodes(children, ['DropdownItem', 'DropdownGroup', 'DropdownCheckboxGroup', 'DropdownRadioGroup'])

  const isSupportSubmenu = nodes.length > 0 && contextType !== 'DropdownButton'

  function renderItem() {
    return (
      <div className={styles.title}>
        <div className={styles.left}>
          {icon}
          <span>{label}</span>
          {tip && <CircleHelpIcon />}
        </div>
        <div className={styles.right}>
          {isSupportSubmenu ? (
            <RightIcon />
          ) : (
            <Shortcut
              shortcutKey={shortcutKey}
              disabled={disabled}
              unregister
              size="md"
              variant="ghost"
              onTrigger={() => {
                item.current?.click()
              }}
            />
          )}
        </div>
      </div>
    )
  }

  if (role === 'menuitemcheckbox') {
    return (
      <RDXDropdownMenu.CheckboxItem
        ref={item}
        className={styles.item}
        checked={checked}
        disabled={disabled}
        textValue={label}
        aria-keyshortcuts={shortcutKey}
        onCheckedChange={onCheckedChange}
      >
        <RDXDropdownMenu.ItemIndicator className={styles.checked} {...attrs({ 'data-disabled': disabled })}>
          <CheckIcon />
        </RDXDropdownMenu.ItemIndicator>
        {renderItem()}
      </RDXDropdownMenu.CheckboxItem>
    )
  }

  if (role === 'menuitemradio') {
    return (
      <RDXDropdownMenu.RadioItem
        ref={item}
        className={styles.item}
        aria-keyshortcuts={shortcutKey}
        disabled={disabled}
        value={value}
        textValue={label}
      >
        <RDXDropdownMenu.ItemIndicator className={styles.checked} {...attrs({ 'data-disabled': disabled })}>
          <CheckIcon />
        </RDXDropdownMenu.ItemIndicator>
        {renderItem()}
      </RDXDropdownMenu.RadioItem>
    )
  }

  if (isSupportSubmenu) {
    const hasCheckedItem = nodes.some(
      (node) => isNode(node, 'DropdownCheckboxGroup') || isNode(node, 'DropdownRadioGroup'),
    )

    return (
      <RDXDropdownMenu.Sub>
        <RDXDropdownMenu.SubTrigger className={styles.item} disabled={disabled}>
          {renderItem()}
        </RDXDropdownMenu.SubTrigger>
        <RDXDropdownMenu.Portal>
          <RDXDropdownMenu.SubContent
            className={classNames(styles.popper, {
              [styles['with-checked']]: hasCheckedItem,
            })}
            loop
          >
            {nodes}
          </RDXDropdownMenu.SubContent>
        </RDXDropdownMenu.Portal>
      </RDXDropdownMenu.Sub>
    )
  }

  return (
    <RDXDropdownMenu.Item
      ref={item}
      className={styles.item}
      value={value}
      disabled={disabled}
      textValue={label}
      aria-keyshortcuts={shortcutKey}
      onSelect={() => onSelect()}
      {...attrs({
        'data-status': status,
      })}
    >
      {renderItem()}
    </RDXDropdownMenu.Item>
  )
}

Item.propTypes = dropdownItemPropTypes
Item.displayName = 'DropdownItem'

export default Item
