import classNames from 'classnames'

import Layout from './Layout'
import { leftPropTypes } from '../propType'

import styles from './Layout.module.less'

function Left({ className, title, description, tip, children }) {
  return (
    <Layout
      className={classNames(styles.left, { [className]: !!className })}
      title={title}
      description={description}
      tip={tip}
    >
      {children}
    </Layout>
  )
}

Left.displayName = 'Left'
Left.propTypes = leftPropTypes

export default Left
