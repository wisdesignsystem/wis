import classNames from 'classnames'
import { matchElement } from 'remote:self/core'
import { CircleHelpIcon } from '@wisdesign/lsicon'

import { boxHeaderPropTypes } from '../propType'

import styles from './Box.module.less'

function Header({ className, title, description, tip, children, ...rest }) {
  const { BoxCollapse: collapse, BoxAction: action } = matchElement(children, ['BoxCollapse', 'BoxAction'])

  return (
    <div {...rest} className={classNames(styles.header, { [className]: !!className })}>
      <div className={styles.top}>
        <div className={styles.info}>
          {collapse}
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <span className={styles.label}>{title}</span>
              {tip && <CircleHelpIcon className={styles.tip} />}
            </div>
            {description && (
              <div className={styles.description} data-description>
                {description}
              </div>
            )}
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
