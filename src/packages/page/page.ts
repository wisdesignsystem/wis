import type { HTMLAttributes } from "react";

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title text will show in the module header.
   */
  title: string;

  /**
   * Describe the module.
   */
  description?: string;
}
