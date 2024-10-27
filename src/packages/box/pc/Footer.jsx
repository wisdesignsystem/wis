import { matchElement } from 'remote:self/core'
import classNames from 'classnames'

import { boxFooterPropTypes } from '../propType'

import styles from './Box.module.less'

function Footer({ className, children, ...rest }) {
  const { BoxAction: action } = matchElement(children, ['BoxAction'])

  return (
    <div {...rest} className={classNames(styles.footer, { [className]: !!className })}>
      <span />
      {action}
    </div>
  )
}

Footer.displayName = 'BoxFooter'
Footer.propTypes = boxFooterPropTypes

export default Footer
