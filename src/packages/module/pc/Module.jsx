import { useContext } from 'react'
import classNames from 'classnames'
import attrs from '@/utils/attrs'
import Box from 'remote:self/packages/Box'
import { Main } from 'remote:self/Layout'
import { matchElement, isElement } from 'remote:self/core'

import modulePropTypes from '../propType'
import Context from '../Context'

import styles from './Module.module.scss'

function Module({
  className,
  title,
  description,
  tip,
  variant = 'basic',
  collapsible,
  defaultCollapsed,
  collapsed,
  onCollapsed,
  children,
  ...rest
}) {
  const { isNested, variant: parentVariant } = useContext(Context)

  const { Actions: actions, unmatched } = matchElement(children, [{ type: 'Actions', maxCount: 1 }], false)
  const hasModule = unmatched.some((child) => isElement(child, 'Module'))

  function renderContent() {
    if (isNested) {
      return <Main>{unmatched}</Main>
    }

    return (
      <Context.Provider value={{ isNested: true, variant }}>
        <Main gutter={false}>{unmatched}</Main>
      </Context.Provider>
    )
  }

  if (collapsible) {
    return (
      <Box.Collapsible
        {...rest}
        className={classNames(styles.module, { [className]: !!className })}
        defaultCollapsed={defaultCollapsed}
        collapsed={collapsed}
        onCollapsed={onCollapsed}
        data-variant={isNested ? `${parentVariant}-nested` : variant}
        {...attrs({
          'data-with-nested': hasModule,
        })}
      >
        <Box.Header className={styles.header} title={title} description={description} tip={tip}>
          <Box.Collapse />
          {!!actions && <Box.Actions>{actions}</Box.Actions>}
        </Box.Header>
        <Box.Panel className={styles.content}>{renderContent()}</Box.Panel>
      </Box.Collapsible>
    )
  }

  return (
    <Box
      {...rest}
      className={classNames(styles.module, { [className]: !!className })}
      data-variant={isNested ? `${parentVariant}-nested` : variant}
      {...attrs({
        'data-with-nested': hasModule,
      })}
    >
      <Box.Header className={styles.header} title={title} description={description} tip={tip}>
        {!!actions && <Box.Actions>{actions}</Box.Actions>}
      </Box.Header>
      <Box.Content className={styles.content}>{renderContent()}</Box.Content>
    </Box>
  )
}

Module.displayName = 'Module'
Module.propTypes = modulePropTypes

export default Module
