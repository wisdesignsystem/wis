import { cloneElement } from "react";
import {
  Box,
  BoxActions,
  BoxCollapse,
  BoxCollapsible,
  BoxContent,
  BoxHeader,
  BoxPanel,
} from "wis/box";
import { isElement, matchElement } from "wis/core";
import { Main } from "wis/layout";
import attrs from "@/utils/attrs";
import classNames from "classnames";
import { useContext } from "react";

import Context from "../Context";
import type { ModuleProps } from "../module";

import styles from "./Module.module.scss";

function Module({
  className,
  title,
  description,
  toggleTip,
  variant = "basic",
  collapsible,
  defaultCollapsed,
  collapsed,
  onCollapsed,
  children,
  ...rest
}: ModuleProps) {
  const { isNested, variant: parentVariant } = useContext(Context);

  const {
    elements: { Actions: actions },
    unmatched,
  } = matchElement(children, [{ type: "Actions", maxCount: 1 }], false);
  const hasModule = unmatched.some((child) => isElement(child, "Module"));

  function renderContent() {
    if (isNested) {
      return <Main>{unmatched}</Main>;
    }

    return (
      <Context.Provider value={{ isNested: true, variant }}>
        <Main gutter={false}>{unmatched}</Main>
      </Context.Provider>
    );
  }

  function renderActions() {
    if (actions === undefined) {
      return null;
    }

    return <BoxActions>{cloneElement(actions[0], { size: "sm" })}</BoxActions>;
  }

  if (collapsible) {
    return (
      <BoxCollapsible
        {...rest}
        className={classNames(styles.module, {
          [className as string]: !!className,
        })}
        defaultCollapsed={defaultCollapsed}
        collapsed={collapsed}
        onCollapsed={onCollapsed}
        data-variant={isNested ? `${parentVariant}-nested` : variant}
        {...attrs({
          "data-with-nested": hasModule,
        })}
      >
        <BoxHeader
          className={styles.header}
          title={title}
          description={description}
          toggleTip={toggleTip}
        >
          <BoxCollapse />
          {renderActions()}
        </BoxHeader>
        <BoxPanel className={styles.content}>{renderContent()}</BoxPanel>
      </BoxCollapsible>
    );
  }

  return (
    <Box
      {...rest}
      className={classNames(styles.module, {
        [className as string]: !!className,
      })}
      data-variant={isNested ? `${parentVariant}-nested` : variant}
      {...attrs({
        "data-with-nested": hasModule,
      })}
    >
      <BoxHeader
        className={styles.header}
        title={title}
        description={description}
        toggleTip={toggleTip}
      >
        {renderActions()}
      </BoxHeader>
      <BoxContent className={styles.content}>{renderContent()}</BoxContent>
    </Box>
  );
}

Module.displayName = "Module";

export default Module;
