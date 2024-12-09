import * as RDXTooltip from "@radix-ui/react-tooltip";
import classNames from "classnames";
import type { ReactNode } from "react";
import { Children } from "react";

import type { TooltipProps } from "../tooltip";

import styles from "./Tooltip.module.scss";

function Tooltip({
  className,
  side = "top",
  align = "center",
  text,
  open,
  defaultOpen,
  children,
  onOpen,
  ...rest
}: TooltipProps) {
  return (
    <RDXTooltip.Provider skipDelayDuration={300}>
      <RDXTooltip.Root
        open={open}
        defaultOpen={defaultOpen}
        delayDuration={500}
        onOpenChange={onOpen}
      >
        <RDXTooltip.Trigger asChild>
          <span>{children}</span>
        </RDXTooltip.Trigger>
        <RDXTooltip.Portal>
          <RDXTooltip.Content
            {...rest}
            className={classNames(styles.popper, {
              [className as string]: !!className,
            })}
            side={side}
            align={align}
          >
            {text}
            <RDXTooltip.Arrow fill="currentColor" className={styles.arrow} />
          </RDXTooltip.Content>
        </RDXTooltip.Portal>
      </RDXTooltip.Root>
    </RDXTooltip.Provider>
  );
}

Tooltip.displayName = "Tooltip";
Tooltip.getSymbiote = (children: ReactNode) => Children.toArray(children)[0];

export default Tooltip;
