import { Box, BoxActions, BoxContent, BoxHeader } from "wis/box";
import { isElement, matchElement } from "wis/core";
import { Col, Row } from "wis/grid";
import { isUndefined } from "@/utils/is";
import classNames from "classnames";
import { Children, isValidElement } from "react";

import type { LayoutProps } from "../layout";

import styles from "./Layout.module.scss";

function Layout({
  className,
  title,
  description,
  responsive,
  gutter,
  children,
  ...rest
}: LayoutProps) {
  const {
    elements: {
      Actions: actions,
      Left: left,
      Right: right,
      Top: top,
      Bottom: bottom,
    },
    unmatched,
  } = matchElement(
    children,
    [
      { type: "Actions", maxCount: 1 },
      { type: "Left", maxCount: 1 },
      { type: "Right", maxCount: 1 },
      { type: "Top", maxCount: 1 },
      { type: "Bottom", maxCount: 1 },
    ],
    false,
  );

  const hasModule = unmatched.some((child) => isElement(child, "Module"));
  const isShowHeader =
    !isUndefined(title) || !isUndefined(description) || !!actions;

  return (
    <Box
      {...rest}
      className={classNames(styles.layout, {
        [className as string]: !!className,
      })}
    >
      {isShowHeader && !!title && (
        <BoxHeader
          className={styles.header}
          title={title}
          description={description}
        >
          {!!actions && <BoxActions>{actions}</BoxActions>}
        </BoxHeader>
      )}
      <BoxContent className={styles.vertical}>
        {!!top && <div className={styles.prefix}>{top[0]}</div>}
        <div className={styles.horizontal}>
          {!!left && <div className={styles.prefix}>{left[0]}</div>}
          <div className={styles.content}>
            {hasModule ? (
              <Row responsive={responsive} gutter={gutter}>
                {Children.map(unmatched, (child) => {
                  if (!isValidElement(child)) {
                    return <Col>{child}</Col>;
                  }

                  return <Col size={child.props.size}>{child}</Col>;
                })}
              </Row>
            ) : (
              unmatched
            )}
          </div>
          {!!right && <div className={styles.suffix}>{right[0]}</div>}
        </div>
        {!!bottom && <div className={styles.suffix}>{bottom[0]}</div>}
      </BoxContent>
    </Box>
  );
}

Layout.displayName = "Layout";

export default Layout;
