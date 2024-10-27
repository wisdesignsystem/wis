import classNames from 'classnames'
import { matchElement } from 'remote:self/core'

import Layout from './Layout'
import { topPropTypes } from '../propType'

import styles from './Layout.module.less'

function Top({ className, children }) {
  const { unmatched } = matchElement(children, [{ type: 'Actions', maxCount: 0 }], false)

  return <Layout className={classNames(styles.top, { [className]: !!className })}>{unmatched}</Layout>
}

Top.displayName = 'Top'
Top.propTypes = topPropTypes

export default Top
