import { useImperativeHandle, forwardRef } from "react";
import type { Ref } from "react";
import { matchElement } from "wis/core";
import { Tooltip as RDXTooltip } from "radix-ui";
import classNames from "classnames";
import { Button } from "wis/button";
import { CircleInformationIcon } from "@wisdesign/lsicon";

import type { ToggleTipProps, ToggleRef } from "../toggleTip";
import useToggleTip from "../useToggleTip";

import styles from "./ToggleTip.module.scss";

const ToggleTip = forwardRef((props: ToggleTipProps, ref: Ref<ToggleRef>) => {
  const {
    className,
    side = "top",
    align = "center",
    text,
    open,
    defaultOpen,
    children,
    onOpen,
    ...rest
  } = props;

  const {
    open: visible,
    setOpen,
    triggerRef,
    popperRef,
    onTriggerKeyDown,
    onTriggerClick,
    onFocusEnded,
  } = useToggleTip(props);

  useImperativeHandle(ref, () => {
    return {
      show() {
        setOpen(true, true);
      },
      hide() {
        setOpen(false, true);
      },
    };
  });

  const {
    elements: { ToggleTipActions: toggleTipActions },
  } = matchElement(children, [{ type: "ToggleTipActions", maxCount: 1 }]);

  return (
    <RDXTooltip.Provider>
      <RDXTooltip.Root open={visible}>
        <RDXTooltip.Trigger asChild>
          <Button
            ref={triggerRef}
            icon={<CircleInformationIcon />}
            size="xs"
            variant="ghost"
            onClick={onTriggerClick}
          />
        </RDXTooltip.Trigger>
        <RDXTooltip.Portal>
          <RDXTooltip.Content
            {...rest}
            ref={popperRef}
            className={classNames(styles.popper, {
              [className as string]: !!className,
            })}
            side={side}
            align={align}
            tabIndex={-1}
            onKeyDown={onTriggerKeyDown}
          >
            {text}
            {toggleTipActions}
            <RDXTooltip.Arrow fill="currentColor" className={styles.arrow} />
            <button
              className={styles.mark}
              type="button"
              onFocus={onFocusEnded}
            />
          </RDXTooltip.Content>
        </RDXTooltip.Portal>
      </RDXTooltip.Root>
    </RDXTooltip.Provider>
  );
});

ToggleTip.displayName = "ToggleTip";

export default ToggleTip;
