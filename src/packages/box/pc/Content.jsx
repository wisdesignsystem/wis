import classNames from 'classnames'

import { boxContentPropTypes } from '../propType'

import styles from './Box.module.less'

function Content({ className, children, ...rest }) {
  return (
    <div {...rest} className={classNames(styles.content, { [className]: !!className })}>
      {children}
    </div>
  )
}

Content.displayName = 'BoxContent'
Content.propTypes = boxContentPropTypes

export default Content
