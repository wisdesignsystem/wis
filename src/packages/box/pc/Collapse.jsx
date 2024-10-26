import classNames from 'classnames'
import { DownIcon } from '@wisdesign/lsicon'
import * as Collapsible from '@radix-ui/react-collapsible'

import { boxCollapsePropTypes } from '../propType'

import styles from './Box.module.less'

function Collapse({ className }) {
  return (
    <Collapsible.Trigger className={classNames(styles.collapse, { [className]: !!className })}>
      <DownIcon />
    </Collapsible.Trigger>
  )
}

Collapse.displayName = 'BoxCollapse'
Collapse.propTypes = boxCollapsePropTypes

export default Collapse
