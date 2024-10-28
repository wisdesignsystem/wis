import { cloneElement } from 'react'
import { matchElement } from 'remote:self/core'
import * as RDXCollapsible from '@radix-ui/react-collapsible'
import attrs from '@/utils/attrs'
import classNames from 'classnames'

import { boxCollapsiblePropTypes } from '../propType'

import styles from './Box.module.less'

function Collapsible({
  className,
  collapsible = true,
  defaultCollapsed = true,
  collapsed,
  children,
  onCollapsed,
  ...rest
}) {
  const {
    BoxHeader: header,
    BoxContent: content,
    BoxFooter: footer,
  } = matchElement(children, [
    { type: 'BoxHeader', maxCount: 1 },
    { type: 'BoxContent', maxCount: 1 },
    { type: 'BoxFooter', maxCount: 1 },
  ])

  return (
    <RDXCollapsible.Root
      {...rest}
      className={classNames(styles.box, { [className]: !!className })}
      defaultOpen={defaultCollapsed}
      open={collapsible ? collapsed : true}
      disabled={!collapsible}
      {...attrs({
        'data-collapsible': collapsible,
      })}
      onOpenChange={onCollapsed}
    >
      {header}
      {cloneElement(content[0], { collapsible })}
      {footer}
    </RDXCollapsible.Root>
  )
}

Collapsible.propTypes = boxCollapsiblePropTypes
Collapsible.displayName = 'BoxCollapsible'

export default Collapsible
