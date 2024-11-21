import * as RDXCollapsible from '@radix-ui/react-collapsible'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Box.module.scss'

function Panel({ className, children, ...rest }) {
  return (
    <RDXCollapsible.Content {...rest} className={classNames(styles.content, { [className]: !!className })}>
      {children}
    </RDXCollapsible.Content>
  )
}

Panel.displayName = 'BoxPanel'
Panel.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Panel
