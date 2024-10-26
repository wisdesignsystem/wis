import classNames from 'classnames'
import { matchChildren } from '@/utils/node'
import { CircleHelpIcon } from '@wisdesign/lsicon'

import { boxHeaderPropTypes } from '../propType'

import styles from './Box.module.less'

function Header({ className, title, description, tip, children }) {
  const { BoxCollapse: collapse, BoxAction: action } = matchChildren(children, ['BoxCollapse', 'BoxAction'])

  return (
    <div className={classNames(styles.header, { [className]: !!className })}>
      <div className={styles.top}>
        <div className={styles.info}>
          {collapse}
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <span className={styles.label}>{title}</span>
              {tip && <CircleHelpIcon className={styles.tip} />}
            </div>
            {description && <div className={styles.description}>{description}</div>}
          </div>
        </div>
        <div className={styles.actions}>{action}</div>
      </div>
    </div>
  )
}

Header.displayName = 'BoxHeader'
Header.propTypes = boxHeaderPropTypes

export default Header
