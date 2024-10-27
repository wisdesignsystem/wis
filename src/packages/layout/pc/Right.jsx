import classNames from 'classnames'

import Layout from './Layout'
import { rightPropTypes } from '../propType'

import styles from './Layout.module.less'

function Right({ className, title, description, tip, children }) {
  return (
    <Layout
      className={classNames(styles.right, { [className]: !!className })}
      title={title}
      description={description}
      tip={tip}
    >
      {children}
    </Layout>
  )
}

Right.displayName = 'Right'
Right.propTypes = rightPropTypes

export default Right
