import classNames from 'classnames'

import Layout from './Layout'
import { topPropTypes } from '../propType'

import styles from './Layout.module.scss'

function Bottom({ className, title, description, tip, children, ...rest }) {
  return (
    <Layout
      {...rest}
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
