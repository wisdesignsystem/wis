import type { HTMLAttributes, ReactNode } from "react";

export interface ActionsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the actions component will override the size definitions of the internal buttons.
   */
  size?: "sm" | "md";

  /**
   * Control for folding and collapsing.
   */
  collapseCount?: number;

  /**
   * @ignore
   */
  children: ReactNode;
}

export interface ActionsGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @private
   */
  size?: "sm" | "md";

  /**
   * Control for folding and collapsing.
   */
  collapseCount?: number;

  /**
   * @ignore
   */
  children: ReactNode;
}
