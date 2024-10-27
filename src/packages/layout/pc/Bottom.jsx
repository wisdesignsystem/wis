import classNames from 'classnames'

import Layout from './Layout'
import { topPropTypes } from '../propType'

import styles from './Layout.module.less'

function Bottom({ className, title, description, tip, children }) {
  return (
    <Layout
      className={classNames(styles.bottom, { [className]: !!className })}
      title={title}
      description={description}
      tip={tip}
    >
      {children}
    </Layout>
  )
}

Bottom.displayName = 'Bottom'
Bottom.propTypes = topPropTypes

export default Bottom
