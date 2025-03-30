import { cloneElement } from "react";
import { Box, BoxActions, BoxContent, BoxHeader } from "wis/box";
import { matchElement } from "wis/core";
import { Main } from "wis/layout";
import classNames from "classnames";

import type { PageProps } from "../page";

import styles from "./Page.module.scss";

function Page({ className, title, description, children, ...rest }: PageProps) {
  const {
    elements: { Actions: actions },
    unmatched,
  } = matchElement(children, [{ type: "Actions", maxCount: 1 }], false);

  function renderActions() {
    if (actions === undefined) {
      return null;
    }

    return <BoxActions>{cloneElement(actions[0], { size: "md" })}</BoxActions>;
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
      </BoxHeader>
      <BoxContent>
        <Main responsive>{unmatched}</Main>
      </BoxContent>
    </Box>
  );
}

Page.displayName = "Page";

export default Page;
