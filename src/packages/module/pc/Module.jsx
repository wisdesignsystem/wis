import { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import attrs from '@/utils/attrs'
import { Box, BoxCollapsible, BoxHeader, BoxCollapse, BoxActions, BoxPanel, BoxContent } from 'remote:self/box'
import { Main } from 'remote:self/layout'
import { matchElement, isElement } from 'remote:self/core'

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
      <BoxCollapsible
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
        <BoxHeader className={styles.header} title={title} description={description} tip={tip}>
          <BoxCollapse />
          {!!actions && <BoxActions>{actions}</BoxActions>}
        </BoxHeader>
        <BoxPanel className={styles.content}>{renderContent()}</BoxPanel>
      </BoxCollapsible>
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
      <BoxHeader className={styles.header} title={title} description={description} tip={tip}>
        {!!actions && <BoxActions>{actions}</BoxActions>}
      </BoxHeader>
      <BoxContent className={styles.content}>{renderContent()}</BoxContent>
    </Box>
  )
}

Module.displayName = 'Module'

const Size = PropTypes.oneOf([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
])

const ResponsiveSize = PropTypes.oneOfType([
  Size,
  PropTypes.shape({
    base: Size,
    sm: Size,
    md: Size,
    lg: Size,
    xl: Size,
    xxl: Size,
  }),
])
Module.propTypes = {
  /**
   * @hidden
   */
  className: PropTypes.string,

  /**
   * title of Module component
   *
   * @type {string}
   */
  title: PropTypes.string.isRequired,

  /**
   * description of Module component
   *
   * @type {string}
   */
  description: PropTypes.string,

  /**
   * tip text of Module component
   */
  tip: PropTypes.string,

  /**
   * Variant of the Module component.
   *
   * @type {basic|ghost}
   * @default basic
   */
  variant: PropTypes.oneOf(['basic', 'ghost']),

  /**
   * Grid responsive size of Module component
   */
  size: ResponsiveSize,

  collapsible: PropTypes.bool,

  /**
   * Default collapsed state of the box.
   *
   * @type {boolean}
   *
   * @default true
   */
  defaultCollapsed: PropTypes.bool,

  /**
   * Current collapsed state of the box.
   *
   * @type {boolean}
   */
  collapsed: PropTypes.bool,

  /**
   * @hidden
   */
  children: PropTypes.node,

  /**
   * Callback function when the box is collapsed
   *
   * @type {function}
   *
   * @example
   *
   * function handleCollapsed(collapsed) {}
   *
   * <Module onCollapsed={handleCollapsed}></Module>
   */
  onCollapsed: PropTypes.func,
}

export default Module
