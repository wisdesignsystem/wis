import { matchElement } from 'remote:self/core'
import classNames from 'classnames'

import { boxFooterPropTypes } from '../propType'

import styles from './Box.module.scss'

function Footer({ className, children, ...rest }) {
  const { BoxActions: actions } = matchElement(children, ['BoxActions'])

  return (
    <div {...rest} className={classNames(styles.footer, { [className]: !!className })}>
      <span />
      {actions}
    </div>
  )
}

Footer.displayName = 'BoxFooter'
Footer.propTypes = boxFooterPropTypes

export default Footer
