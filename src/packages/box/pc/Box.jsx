import { matchElement } from 'remote:self/core'
import classNames from 'classnames'

import Collapsible from './Collapsible'
import Header from './Header'
import Content from './Content'
import Panel from './Panel'
import Footer from './Footer'
import Actions from './Actions'
import Collapse from './Collapse'

import { boxPropTypes } from '../propType'

import styles from './Box.module.less'

function Box({ className, defaultCollapsed = true, collapsed, children, onCollapsed, ...rest }) {
  const {
    BoxHeader: header,
    BoxContent: content,
    BoxFooter: footer,
  } = matchElement(children, ['BoxHeader', 'BoxContent', 'BoxFooter'])

  return (
    <div {...rest} className={classNames(styles.box, { [className]: !!className })}>
      {header}
      {content}
      {footer}
    </div>
  )
}

Box.propTypes = boxPropTypes
Box.displayName = 'Box'

Box.Collapsible = Collapsible
Box.Header = Header
Box.Content = Content
Box.Panel = Panel
Box.Footer = Footer
Box.Actions = Actions
Box.Collapse = Collapse

export default Box
