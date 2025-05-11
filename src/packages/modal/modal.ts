import type { HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The controlled open state of the modal. Must be used in conjunction with `onOpen`.
   */
  open?: boolean;

  /**
   * The open state of the modal when it is initially rendered.
   */
  defaultOpen?: boolean;

  /**
   * The title text will show in the modal header.
   */
  title: string;

  /**
   * The description text will show in the modal header.
   */
  description?: string;

  /**
   * The toggle tip
   */
  toggleTip?: ReactNode;

  /**
   * Set the modal display the close icon.
   */
  closeable?: boolean;

  /**
   * Set the modal close when click the mask.
   */
  maskCloseable?: boolean;

  /**
   * Set the modal to modal dialog.
   */
  modal?: boolean;

  /**
   * Set the modal display in the screen center
   */
  center?: boolean;

  /**
   * Set the modal width
   */
  width?: number;

  /**
   * Set the modal height
   */
  height?: number;

  /**
   * Event handler called when the modal is open state change.
   */
  onOpen?: (open: boolean) => void;
}

export interface ModalRef {
  show(): void;
  hide(): void;
}

export interface ModalTriggerProps extends HTMLAttributes<HTMLDivElement> {}
