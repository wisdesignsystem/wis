import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  type?: string;
}

export interface BoxActionsProps {
  /**
   * @ignore
   */
  children: ReactNode;
}

export interface BoxMetaProps extends HTMLAttributes<HTMLDivElement> {}

export interface BoxCollapseProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

export interface BoxCollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The open state of the collapsible when it is initially rendered.
   */
  defaultCollapsed?: boolean;

  /**
   * The controlled open state of the collapsible. Must be used in conjunction with `onCollapsed`.
   */
  collapsed?: boolean;

  /**
   * Event handler called when the open state of the collapsible changes.
   */
  onCollapsed?: (collapsed: boolean) => void;
}

export interface BoxContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface BoxFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface BoxHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title text to display.
   */
  title: string;

  /**
   * The description text to display.
   */
  description?: string;

  /**
   * The toggle tip
   */
  toggleTip?: ReactNode;
}

export interface BoxPanelProps extends HTMLAttributes<HTMLDivElement> {}
