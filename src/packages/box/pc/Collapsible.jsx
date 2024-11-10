import { cloneElement } from 'react'
import { matchElement } from 'remote:self/core'
import * as RDXCollapsible from '@radix-ui/react-collapsible'
import classNames from 'classnames'

import { boxCollapsiblePropTypes } from '../propType'

import styles from './Box.module.less'

function Collapsible({ className, defaultCollapsed = true, collapsed, children, onCollapsed, ...rest }) {
  const {
    BoxHeader: header,
    BoxPanel: panel,
    BoxFooter: footer,
  } = matchElement(children, [
    { type: 'BoxHeader', maxCount: 1 },
    { type: 'BoxPanel', maxCount: 1 },
    { type: 'BoxFooter', maxCount: 1 },
  ])

  return (
    <RDXCollapsible.Root
      {...rest}
      className={classNames(styles.box, { [className]: !!className })}
      defaultOpen={defaultCollapsed}
      open={collapsed}
      onOpenChange={onCollapsed}
    >
      {header}
      {cloneElement(panel[0], { collapsible: true })}
      {footer}
    </RDXCollapsible.Root>
  )
}

Collapsible.propTypes = boxCollapsiblePropTypes
Collapsible.displayName = 'BoxCollapsible'

export default Collapsible
