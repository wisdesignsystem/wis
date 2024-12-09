import attrs from "@/utils/attrs";

import type { ColProps, ResponsiveSize, Size } from "./grid";
import { isResponsiveSize, isSize } from "./grid";

import styles from "./Row.module.scss";

function formatToResponsiveSize(
  size?: Size | ResponsiveSize,
  defaultBaseSize?: Size,
): ResponsiveSize {
  if (isResponsiveSize(size)) {
    return {
      base: size.base || defaultBaseSize,
      ...size,
    };
  }

  if (isSize(size)) {
    return {
      base: size,
    };
  }

  return { base: defaultBaseSize };
}

function Col({ size = 12, offset, children }: ColProps) {
  const responsiveSize = formatToResponsiveSize(size, 12);
  const responsiveOffset = formatToResponsiveSize(offset);

  return (
    <div
      className={styles.col}
      data-size={responsiveSize.base}
      {...attrs({
        "data-size": responsiveSize.base,
        "data-sm-size": responsiveSize.sm,
        "data-md-size": responsiveSize.md,
        "data-lg-size": responsiveSize.lg,
        "data-xl-size": responsiveSize.xl,
        "data-xxl-size": responsiveSize.xxl,
        "data-offset": responsiveOffset.base,
        "data-sm-offset": responsiveOffset.sm,
        "data-md-offset": responsiveOffset.md,
        "data-lg-offset": responsiveOffset.lg,
        "data-xl-offset": responsiveOffset.xl,
        "data-xxl-offset": responsiveOffset.xxl,
      })}
    >
      {children}
    </div>
  );
}

Col.displayName = "Col";

export default Col;
