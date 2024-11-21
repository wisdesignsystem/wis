import { useRef } from 'react'
import PropTypes from 'prop-types'
import * as RDXContextMenu from '@radix-ui/react-context-menu'
import attrs from '@/utils/attrs'
import classNames from 'classnames'
import { Shortcut } from 'remote:self/shortcut'
import { CheckIcon, CircleHelpIcon, RightIcon } from '@wisdesign/lsicon'
import { matchElement } from 'remote:self/core'

import styles from './ContextMenu.module.scss'

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
  const { matched, ContextMenuCheckboxGroup, ContextMenuRadioGroup } = matchElement(children, [
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

Item.displayName = 'ContextMenuItem'
Item.propTypes = {
  className: PropTypes.string,

  /**
   * @private
   */
  role: PropTypes.oneOf(['menuitem', 'menuitemcheckbox', 'menuitemradio']),

  /**
   * @private
   */
  checked: PropTypes.bool,

  /**
   * Status of the ContextMenu.Item.
   * This attribute takes effect only when item is normal menu item.
   *
   * @type {danger}
   * @default normal
   */
  status: PropTypes.oneOf(['danger']),

  /**
   * Indicates if the ContextMenu.Item is disabled.
   *
   * @type {boolean}
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Label text for the ContextMenu.Item.
   */
  label: PropTypes.string,

  /**
   * Icon element to be displayed on the ContextMenu.Item.
   *
   * @type {React.Element}
   */
  icon: PropTypes.element,

  /**
   * Tip text for the ContextMenu.Item.
   */
  tip: PropTypes.string,

  /**
   * Value associated with the ContextMenu.Item.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Global shortcut key for the ContextMenu.Item.
   */
  shortcutKey: PropTypes.string,

  /**
   * @hidden
   */
  children: PropTypes.node,

  /**
   * Callback function to handle select, it will trigger when the ContextMenu.Item is normal menu button
   *
   * @type {function}
   *
   * @example
   *
   * function handleSelect() {
   *
   * }
   *
   * <ContextMenu>
   *  <ContextMenu.Item value="a" onSelect={handleSelect}></Toggle.Item>
   * </ContextMenu>
   */
  onSelect: PropTypes.func,

  /**
   * @private
   */
  onCheckedChange: PropTypes.func,
}

export default Item
