import { forwardRef } from 'react'
import Button from 'remote:self/Button'
import classNames from 'classnames'
import { DownIcon } from '@wisdesign/lsicon'

import { dropdownButtonPropTypes } from '../propType'

import styles from './Dropdown.module.less'

const ButtonTrigger = forwardRef(function (
  { className, variant, status, disabled, loading, text, icon, iconControl, tooltip, size, shortcutKey, ...rest },
  ref,
) {
  return (
    <div className={classNames(styles.button, { [className]: !!className })}>
      <Button
        variant={variant}
        disabled={disabled}
        text={text}
        status={status}
        icon={icon}
        iconControl={iconControl}
        tooltip={tooltip}
        size={size}
        shortcutKey={shortcutKey}
      />
      <Button
        ref={ref}
        variant={variant}
        status={status}
        disabled={disabled}
        size={size}
        icon={<DownIcon />}
        {...rest}
      />
    </div>
  )
})

ButtonTrigger.displayName = 'DropdownButtonTrigger'
ButtonTrigger.propTypes = dropdownButtonPropTypes

export default ButtonTrigger
