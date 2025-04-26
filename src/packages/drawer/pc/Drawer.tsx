import type { Ref } from "react";
import { useImperativeHandle, forwardRef, cloneElement } from "react";
import {
  Dialog as RDXDialog,
  VisuallyHidden as RDXVisuallyHidden,
} from "radix-ui";
import { CloseSmallIcon } from "@wisdesign/lsicon";
import { matchElement } from "wis/core";
import { Box, BoxActions, BoxContent, BoxHeader, BoxFooter } from "wis/box";
import { Main } from "wis/layout";
import { Button } from "wis/button";

import useValue from "../../../hooks/useValue";
import type { DrawerProps, DrawerRef } from "../drawer";

import styles from "./Drawer.module.scss";

const Drawer = forwardRef(
  (
    {
      defaultOpen,
      open,
      title,
      description,
      toggleTip,
      side = "bottom",
      closeable = true,
      modal = true,
      onOpen = () => {},
      children,
      ...rest
    }: DrawerProps,
    ref: Ref<DrawerRef>,
  ) => {
    const [currentOpen, setCurrentOpen] = useValue<boolean>({
      value: open,
      defaultValue: defaultOpen,
    });

    const {
      elements: { Actions: actions },
      unmatched,
    } = matchElement(children, [{ type: "Actions", maxCount: 1 }], false);

    useImperativeHandle(ref, () => {
      return {
        show() {
          setCurrentOpen(true);
        },
        hide() {
          setCurrentOpen(false);
        },
      };
    });

    function renderActions() {
      if (actions === undefined) {
        return null;
      }

      return (
        <BoxActions>{cloneElement(actions[0], { size: "sm" })}</BoxActions>
      );
    }

    function handleOpenChange(value: boolean) {
      setCurrentOpen(value);
      onOpen(value);
    }

    return (
      <RDXDialog.Root
        open={currentOpen}
        modal={modal}
        onOpenChange={handleOpenChange}
      >
        <RDXDialog.Portal>
          <RDXDialog.Overlay className={styles.mask} />
          <RDXDialog.Content
            {...rest}
            className={styles.content}
            data-side={side}
          >
            <RDXVisuallyHidden.Root>
              <RDXDialog.Title>{title}</RDXDialog.Title>
              <RDXDialog.Description>{description}</RDXDialog.Description>
            </RDXVisuallyHidden.Root>
            <Box className={styles.drawer}>
              <BoxHeader
                className={styles.header}
                title={title}
                description={description}
                toggleTip={toggleTip}
              >
                {closeable && (
                  <BoxActions>
                    <RDXDialog.Close asChild>
                      <Button
                        size="xs"
                        variant="ghost"
                        icon={<CloseSmallIcon />}
                      />
                    </RDXDialog.Close>
                  </BoxActions>
                )}
              </BoxHeader>
              <BoxContent>
                <Main>{unmatched}</Main>
              </BoxContent>
              <BoxFooter className={styles.footer}>{renderActions()}</BoxFooter>
            </Box>
          </RDXDialog.Content>
        </RDXDialog.Portal>
      </RDXDialog.Root>
    );
  },
);

Drawer.displayName = "Drawer";

export default Drawer;
