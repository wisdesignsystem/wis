import * as Collapsible from '@radix-ui/react-collapsible'
import classNames from 'classnames'

import { boxContentPropTypes } from '../propType'

import styles from './Box.module.less'

function Content({ className, children }) {
  return (
    <Collapsible.Content className={classNames(styles.content, { [className]: !!className })}>
      {children}
    </Collapsible.Content>
  )
}

Content.displayName = 'BoxContent'
Content.propTypes = boxContentPropTypes

export default Content
