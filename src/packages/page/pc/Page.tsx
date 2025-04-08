import { cloneElement } from "react";
import { Box, BoxActions, BoxContent, BoxHeader, BoxMeta } from "wis/box";
import { matchElement } from "wis/core";
import { Main } from "wis/layout";
import classNames from "classnames";

import type { PageProps } from "../page";

import styles from "./Page.module.scss";

function Page({ className, title, description, children, ...rest }: PageProps) {
  const {
    elements: { Actions: actions, Meta: meta },
    unmatched,
  } = matchElement(
    children,
    [
      { type: "Actions", maxCount: 1 },
      { type: "Meta", maxCount: 1 },
    ],
    false,
  );

  function renderActions() {
    if (actions === undefined) {
      return null;
    }

    return <BoxActions>{cloneElement(actions[0], { size: "md" })}</BoxActions>;
  }

  function renderMeta() {
    if (meta === undefined) {
      return null;
    }

    return <BoxMeta>{meta}</BoxMeta>;
  }

  return (
    <Box
      {...rest}
      className={classNames(styles.page, {
        [className as string]: !!className,
      })}
    >
      <BoxHeader
        className={styles.header}
        title={title}
        description={description}
      >
        {renderActions()}
        {renderMeta()}
      </BoxHeader>
      <BoxContent>
        <Main responsive>{unmatched}</Main>
      </BoxContent>
    </Box>
  );
}

Page.displayName = "Page";

export default Page;
