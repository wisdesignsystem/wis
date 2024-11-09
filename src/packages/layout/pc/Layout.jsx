import { Children } from 'react'
import classNames from 'classnames'
import Box from 'remote:self/packages/Box'
import { matchElement, isElement } from 'remote:self/core'
import { Row, Col } from 'remote:self/Grid'

import { layoutPropTypes } from '../propType'

import styles from './Layout.module.less'

function Layout({ className, title, description, tip, responsive, gutter, children, ...rest }) {
  const {
    Actions: actions,
    Left: left,
    Right: right,
    Top: top,
    Bottom: bottom,
    unmatched,
  } = matchElement(
    children,
    [
      { type: 'Actions', maxCount: 1 },
      { type: 'Left', maxCount: 1 },
      { type: 'Right', maxCount: 1 },
      { type: 'Top', maxCount: 1 },
      { type: 'Bottom', maxCount: 1 },
    ],
    false,
  )

  const hasModule = unmatched.some((child) => isElement(child, 'Module'))
  const isShowHeader = !!title || !!description || !!tip || !!actions

  return (
    <Box {...rest} className={classNames(styles.layout, { [className]: !!className })}>
      {isShowHeader && (
        <Box.Header className={styles.header} title={title} description={description} tip={tip}>
          {!!actions && <Box.Actions>{actions}</Box.Actions>}
        </Box.Header>
      )}
      <Box.Content className={styles.vertical}>
        {!!top && <div className={styles.prefix}>{top[0]}</div>}
        <div className={styles.horizontal}>
          {!!left && <div className={styles.prefix}>{left[0]}</div>}
          <div className={styles.content}>
            {hasModule ? (
              <Row responsive={responsive} gutter={gutter}>
                {Children.map(unmatched, (child) => {
                  return <Col size={child.props.size}>{child}</Col>
                })}
              </Row>
            ) : (
              unmatched
            )}
          </div>
          {!!right && <div className={styles.suffix}>{right[0]}</div>}
        </div>
        {!!bottom && <div className={styles.suffix}>{bottom[0]}</div>}
      </Box.Content>
    </Box>
  )
}

Layout.displayName = 'Layout'
Layout.propTypes = layoutPropTypes

export default Layout
