import type { HTMLAttributes, ReactNode } from "react";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The controlled open state of the drawer. Must be used in conjunction with `onOpen`.
   */
  open?: boolean;

  /**
   * The open state of the drawer when it is initially rendered.
   */
  defaultOpen?: boolean;

  /**
   * The title text will show in the drawer header.
   */
  title: string;

  /**
   * The description text will show in the drawer header.
   */
  description?: string;

  /**
   * The toggle tip
   */
  toggleTip?: ReactNode;

  /**
   * The pop-up direction of the drawer.
   */
  side?: "bottom" | "right";

  /**
   * Set the drawer display the close icon.
   */
  closeable?: boolean;

  /**
   * Set the drawer close when click the mask.
   */
  maskCloseable?: boolean;

  /**
   * Set the drawer to modal dialog.
   */
  modal?: boolean;

  /**
   * Configure drawer dimensions where the 'side' property determines measurement type: setting to 'bottom' specifies height, while 'right' defines width.
   */
  size?: number;

  /**
   * Event handler called when the drawer is open state change.
   */
  onOpen?: (open: boolean) => void;
}

export interface DrawerRef {
  show(): void;
  hide(): void;
}

export interface DrawerTriggerProps extends HTMLAttributes<HTMLDivElement> {}
