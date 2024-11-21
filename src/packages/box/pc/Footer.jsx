import { matchElement } from 'remote:self/core'
import classNames from 'classnames'
import PropTypes from 'prop-types'

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
Footer.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Footer
