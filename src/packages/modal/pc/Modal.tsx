import type { Ref } from "react";
import { useImperativeHandle, forwardRef, cloneElement } from "react";
import {
  Dialog as RDXDialog,
  VisuallyHidden as RDXVisuallyHidden,
} from "radix-ui";
import { CloseSmallIcon } from "@wisdesign/lsicon";
import attrs from "@/utils/attrs";
import { matchElement, useGetMountElement } from "wis/core";
import { Box, BoxActions, BoxContent, BoxHeader, BoxFooter } from "wis/box";
import { Main } from "wis/layout";
import { Button } from "wis/button";

import useBooleanValue from "../../../hooks/useBooleanValue";
import useGlobalScrollLock from "../../../hooks/useGlobalScrollLock";
import type { ModalProps, ModalRef } from "../modal";
import ModalTrigger from "./ModalTrigger";

import styles from "./Modal.module.scss";

const Modal = forwardRef(
  (
    {
      defaultOpen,
      open,
      title,
      description,
      toggleTip,
      closeable = true,
      maskCloseable = true,
      modal = true,
      center = false,
      width,
      height,
      onOpen = () => {},
      children,
      ...rest
    }: ModalProps,
    ref: Ref<ModalRef>,
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
    } = matchElement(children, [{ type: "Actions", maxCount: 1 }], false);

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
            <ModalTrigger />
          </RDXDialog.Trigger>
          <RDXDialog.Overlay className={styles.mask} />
          <RDXDialog.Content
            {...rest}
            {...attrs({
              "data-center": center,
            })}
            style={{
              ...rest.style,
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={styles.content}
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
            <Box className={styles.modal}>
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

Modal.displayName = "Modal";

export default Modal;
