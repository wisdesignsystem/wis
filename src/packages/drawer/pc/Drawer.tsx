import type { Ref } from "react";
import { useImperativeHandle, forwardRef, cloneElement } from "react";
import {
  Dialog as RDXDialog,
  VisuallyHidden as RDXVisuallyHidden,
} from "radix-ui";
import { CloseSmallIcon } from "@wisdesign/lsicon";
import { matchElement, useGetMountElement } from "wis/core";
import { Box, BoxActions, BoxContent, BoxHeader, BoxFooter } from "wis/box";
import { Main } from "wis/layout";
import { Button } from "wis/button";
import useBooleanValue from "@/hooks/useBooleanValue";
import useGlobalScrollLock from "@/hooks/useGlobalScrollLock";

import type { DrawerProps, DrawerRef } from "../drawer";
import DrawerTrigger from "./DrawerTrigger";

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
      maskCloseable = true,
      modal = true,
      size,
      onOpen = () => {},
      children,
      ...rest
    }: DrawerProps,
    ref: Ref<DrawerRef>,
  ) => {
    const [currentOpen, setCurrentOpen] = useBooleanValue({
      value: open,
      defaultValue: defaultOpen,
      onChange: onOpen,
    });
    const mountElement = useGetMountElement();

    const {
      elements: { Actions: actions },
      unmatched,
    } = matchElement(children, [{ type: "Actions", maxCount: 1 }], {
      strict: false,
    });

    useImperativeHandle(ref, () => {
      return {
        show() {
          setCurrentOpen(true, true);
        },
        hide() {
          setCurrentOpen(false, true);
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
      setCurrentOpen(value, true);
    }

    useGlobalScrollLock(mountElement, currentOpen);

    return (
      <RDXDialog.Root
        open={currentOpen}
        modal={modal}
        onOpenChange={handleOpenChange}
      >
        <RDXDialog.Portal container={mountElement}>
          <RDXDialog.Trigger asChild>
            <DrawerTrigger />
          </RDXDialog.Trigger>
          <RDXDialog.Overlay className={styles.mask} />
          <RDXDialog.Content
            {...rest}
            style={{
              ...rest.style,
              width: side === "right" ? `${size}px` : undefined,
              height: side === "bottom" ? `${size}px` : undefined,
            }}
            className={styles.content}
            data-side={side}
            onPointerDownOutside={(event) => {
              if (modal && !maskCloseable) {
                event.preventDefault();
              }
            }}
          >
            <RDXVisuallyHidden.Root>
              <RDXDialog.Title>{title}</RDXDialog.Title>
              <RDXDialog.Description>{description}</RDXDialog.Description>
            </RDXVisuallyHidden.Root>
            <Box className={styles.drawer} type="drawer">
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
