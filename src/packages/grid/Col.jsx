import attrs from '@/utils/attrs'
import { isNumber } from '@/utils/is'

import { colPropTypes } from './propType'

import styles from './Row.module.less'

function resolveResponsiveSize(size = {}, defaultSize) {
  if (isNumber(size)) {
    return { base: size }
  }

  return {
    base: size.base || defaultSize,
    sm: size.sm,
    md: size.md,
    lg: size.lg,
    xl: size.xl,
    xxl: size.xxl,
  }
}

function Col({ children, size, offset }) {
  const responsiveSize = resolveResponsiveSize(size, 12)
  const responsiveOffset = resolveResponsiveSize(offset)

  return (
    <div
      className={styles.col}
      data-size={responsiveSize.base}
      {...attrs({
        'data-xs-size': responsiveSize.xs,
        'data-sm-size': responsiveSize.sm,
        'data-md-size': responsiveSize.md,
        'data-lg-size': responsiveSize.lg,
        'data-xl-size': responsiveSize.xl,
        'data-xxl-size': responsiveSize.xxl,
        'data-offset': offset,
        'data-xs-offset': responsiveOffset.xs,
        'data-sm-offset': responsiveOffset.sm,
        'data-md-offset': responsiveOffset.md,
        'data-lg-offset': responsiveOffset.lg,
        'data-xl-offset': responsiveOffset.xl,
        'data-xxl-offset': responsiveOffset.xxl,
      })}
    >
      {children}
    </div>
  )
}

Col.propTypes = colPropTypes
Col.displayName = 'Col'

export default Col
