import type { HTMLAttributes, ReactNode } from "react";

export interface MetaProps extends HTMLAttributes<HTMLDivElement> {}

export interface MetaItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * The icon element will be displayed in meta item.
   */
  icon?: ReactNode;

  /**
   * The label for the meta item.
   */
  label?: string;

  /**
   * The text for the meta item.
   */
  text?: string;
}
