import * as RDXCollapsible from '@radix-ui/react-collapsible'
import classNames from 'classnames'

import { boxContentPropTypes } from '../propType'

import styles from './Box.module.scss'

function Panel({ className, children, ...rest }) {
  return (
    <RDXCollapsible.Content {...rest} className={classNames(styles.content, { [className]: !!className })}>
      {children}
    </RDXCollapsible.Content>
  )
}

Panel.displayName = 'BoxPanel'
Panel.propTypes = boxContentPropTypes

export default Panel
