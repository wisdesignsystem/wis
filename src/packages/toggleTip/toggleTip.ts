import type { HTMLAttributes } from "react";

export interface ToggleTipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The preferred side of the trigger to render against when open. May change when collisions occur.
   */
  side?: "top" | "right" | "bottom" | "left";

  /**
   *  The preferred alignment against the trigger. May change when collisions occur.
   */
  align?: "start" | "center" | "end";

  /**
   * The content text to render in the tooltip.
   */
  text: string;

  /**
   * The controlled open state of the tooltip. Must be used in conjunction with `onOpen`
   */
  open?: boolean;

  /**
   * The open state of the tooltip when it is initially rendered.
   */
  defaultOpen?: boolean;

  /**
   * Event handler called when the tooltip is open state change.
   */
  onOpen?: (open: boolean) => void;
}

export interface ToggleTipActionsProps extends HTMLAttributes<HTMLDivElement> {}
