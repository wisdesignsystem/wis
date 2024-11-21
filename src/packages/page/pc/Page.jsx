import classNames from 'classnames'
import PropTypes from 'prop-types'
import { matchElement } from 'remote:self/core'
import { Main } from 'remote:self/layout'
import { Box, BoxHeader, BoxActions, BoxContent } from 'remote:self/box'

import styles from './Page.module.scss'

function Page({ className, title, description, tip, children, ...rest }) {
  const { Actions: actions, unmatched } = matchElement(children, [{ type: 'Actions', maxCount: 1 }], false)

  return (
    <Box {...rest} className={classNames(styles.page, { [className]: !!className })}>
      <BoxHeader className={styles.header} title={title} description={description} tip={tip}>
        {!!actions && <BoxActions>{actions}</BoxActions>}
      </BoxHeader>
      <BoxContent>
        <Main>{unmatched}</Main>
      </BoxContent>
    </Box>
  )
}

Page.displayName = 'Page'
Page.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * title of Layout component
   *
   * @type {string}
   */
  title: PropTypes.string.isRequired,

  /**
   * description of Layout component
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * tip text of Layout component
   */
  tip: PropTypes.string,

  /**
   * @hidden
   */
  children: PropTypes.node,
}

export default Page
