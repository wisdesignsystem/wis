import { useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import * as RDXDropdownMenu from '@radix-ui/react-dropdown-menu'
import attrs from '@/utils/attrs'
import classNames from 'classnames'
import { Shortcut } from 'remote:self/shortcut'
import { CheckIcon, CircleHelpIcon, RightIcon } from '@wisdesign/lsicon'
import { matchElement } from 'remote:self/core'
import { Context } from '@/packages/contextMenu'

import styles from './Dropdown.module.scss'

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
  const { matched, DropdownCheckboxGroup, DropdownRadioGroup } = matchElement(children, [
    'DropdownItem',
    'DropdownGroup',
    'DropdownCheckboxGroup',
    'DropdownRadioGroup',
  ])

  const isSupportSubmenu = !!matched.length && contextType !== 'DropdownButton'

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
    const hasCheckedItem = !!DropdownCheckboxGroup?.length || !!DropdownRadioGroup?.length

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
            {matched}
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

Item.displayName = 'DropdownItem'
Item.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * @hidden
   */
  role: PropTypes.oneOf(['menuitem', 'menuitemcheckbox', 'menuitemradio']),

  /**
   * @hidden
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
   * @hidden
   */
  onCheckedChange: PropTypes.func,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Item
