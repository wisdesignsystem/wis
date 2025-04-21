import type { AnchorHTMLAttributes, MouseEvent } from "react";

export interface LinkProps
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "onClick"
  > {
  /**
   * Invert the color scheme of the link
   */
  inverse?: boolean;

  /**
   * When `true`, prevents the user from interacting with the link.
   */
  disabled?: boolean;

  /**
   * The text information displayed on the link.
   */
  text: string;

  /**
   * The address of the link, which can be a complete external address or an internal page address within the project.
   */
  href: string;

  /**
   * Control the jump method to replace the current route.
   */
  redirect?: boolean;

  /**
   * Event handler called when the link is clicked.
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export interface ExternalLinkProps extends LinkProps {}

export function isFullLink(link: string) {
  return /^http(s)?:/.test(link);
}
