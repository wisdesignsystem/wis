import { useRef } from 'react'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import { attrs } from '@/utils/attrs'
import classNames from 'classnames'
import Shortcut from 'remote:self/Shortcut'
import { CheckIcon, CircleHelpIcon, RightIcon } from '@wisdesign/lsicon'
import { matchChildren } from '@/utils/node'

import { contextMenuItemPropTypes } from '../propType'

import styles from './ContextMenu.module.less'

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
  const item = useRef(null)
  const { matched, ContextMenuCheckboxGroup, ContextMenuRadioGroup } = matchChildren(children, [
    'ContextMenuItem',
    'ContextMenuGroup',
    'ContextMenuCheckboxGroup',
    'ContextMenuRadioGroup',
  ])

  const isSupportSubmenu = matched.length > 0

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
      <RDXContextMenu.CheckboxItem
        ref={item}
        className={styles.item}
        checked={checked}
        disabled={disabled}
        textValue={label}
        aria-keyshortcuts={shortcutKey}
        onCheckedChange={onCheckedChange}
      >
        <RDXContextMenu.ItemIndicator className={styles.checked} {...attrs({ 'data-disabled': disabled })}>
          <CheckIcon />
        </RDXContextMenu.ItemIndicator>
        {renderItem()}
      </RDXContextMenu.CheckboxItem>
    )
  }

  if (role === 'menuitemradio') {
    return (
      <RDXContextMenu.RadioItem
        ref={item}
        className={styles.item}
        aria-keyshortcuts={shortcutKey}
        disabled={disabled}
        value={value}
        textValue={label}
      >
        <RDXContextMenu.ItemIndicator className={styles.checked} {...attrs({ 'data-disabled': disabled })}>
          <CheckIcon />
        </RDXContextMenu.ItemIndicator>
        {renderItem()}
      </RDXContextMenu.RadioItem>
    )
  }

  if (isSupportSubmenu) {
    const hasCheckedItem = !!ContextMenuCheckboxGroup?.length || !!ContextMenuRadioGroup?.length

    return (
      <RDXContextMenu.Sub>
        <RDXContextMenu.SubTrigger className={styles.item} disabled={disabled}>
          {renderItem()}
        </RDXContextMenu.SubTrigger>
        <RDXContextMenu.Portal>
          <RDXContextMenu.SubContent
            className={classNames(styles.popper, {
              [styles['with-checked']]: hasCheckedItem,
            })}
            loop
          >
            {matched}
          </RDXContextMenu.SubContent>
        </RDXContextMenu.Portal>
      </RDXContextMenu.Sub>
    )
  }

  return (
    <RDXContextMenu.Item
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
    </RDXContextMenu.Item>
  )
}

Item.propTypes = contextMenuItemPropTypes
Item.displayName = 'ContextMenuItem'

export default Item
