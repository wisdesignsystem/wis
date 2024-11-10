import classNames from 'classnames'
import { matchElement } from 'remote:self/core'
import { Main } from 'remote:self/Layout'
import Box from 'remote:self/packages/Box'

import pagePropTypes from '../propType'

import styles from './Page.module.scss'

function Page({ className, title, description, tip, children, ...rest }) {
  const { Actions: actions, unmatched } = matchElement(children, [{ type: 'Actions', maxCount: 1 }], false)

  return (
    <Box {...rest} className={classNames(styles.page, { [className]: !!className })}>
      <Box.Header className={styles.header} title={title} description={description} tip={tip}>
        {!!actions && <Box.Actions>{actions}</Box.Actions>}
      </Box.Header>
      <Box.Content>
        <Main>{unmatched}</Main>
      </Box.Content>
    </Box>
  )
}

Page.displayName = 'Page'
Page.propTypes = pagePropTypes

export default Page
