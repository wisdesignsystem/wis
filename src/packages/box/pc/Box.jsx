import { matchElement } from 'remote:self/core'
import * as Collapsible from '@radix-ui/react-collapsible'
import attrs from '@/utils/attrs'
import classNames from 'classnames'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Action from './Action'
import Collapse from './Collapse'

import { boxPropTypes } from '../propType'

import styles from './Box.module.less'

function Box({ className, defaultCollapsed = true, collapsed, children, onCollapsed }) {
  const {
    BoxHeader: header,
    BoxContent: content,
    BoxFooter: footer,
  } = matchElement(children, ['BoxHeader', 'BoxContent', 'BoxFooter'])

  const { BoxCollapse: collapse } = matchElement(header?.[0]?.props?.children, ['BoxCollapse'], false)

  const collapsible = !!collapse

  return (
    <Collapsible.Root
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
      {content}
      {footer}
    </Collapsible.Root>
  )
}

Box.propTypes = boxPropTypes
Box.displayName = 'Box'
Box.Header = Header
Box.Footer = Footer
Box.Content = Content
Box.Action = Action
Box.Collapse = Collapse

export default Box
