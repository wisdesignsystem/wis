import { matchElement } from "wis/core";
import { Tooltip as RDXTooltip } from "radix-ui";
import classNames from "classnames";
import { Button } from "wis/button";
import { CircleInformationIcon } from "@wisdesign/lsicon";

import type { ToggleTipProps } from "../toggleTip";
import useToggleTip from "../useToggleTip";

import styles from "./ToggleTip.module.scss";

function ToggleTip(props: ToggleTipProps) {
  const {
    className,
    side = "top",
    align = "center",
    text,
    defaultOpen,
    children,
    onOpen,
    ...rest
  } = props;

  const {
    open,
    triggerRef,
    popperRef,
    onTriggerKeyDown,
    onTriggerClick,
    onPopperLeave,
  } = useToggleTip(props);

  const {
    elements: { ToggleTipActions: toggleTipActions },
  } = matchElement(children, [{ type: "ToggleTipActions", maxCount: 1 }]);

  return (
    <RDXTooltip.Provider>
      <RDXTooltip.Root open={open}>
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
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
            <span
              className={styles.mark}
              tabIndex={0}
              onFocus={onPopperLeave}
            />
          </RDXTooltip.Content>
        </RDXTooltip.Portal>
      </RDXTooltip.Root>
    </RDXTooltip.Provider>
  );
}

ToggleTip.displayName = "ToggleTip";

export default ToggleTip;
