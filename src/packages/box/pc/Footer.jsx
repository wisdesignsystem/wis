import { matchChildren } from '@/utils/node'
import classNames from 'classnames'

import { boxFooterPropTypes } from '../propType'

import styles from './Box.module.less'

function Footer({ className, children }) {
  const { BoxAction: action } = matchChildren(children, ['BoxAction'])

  return (
    <div className={classNames(styles.footer, { [className]: !!className })}>
      <span />
      {action}
    </div>
  )
}

Footer.displayName = 'BoxFooter'
Footer.propTypes = boxFooterPropTypes

export default Footer
