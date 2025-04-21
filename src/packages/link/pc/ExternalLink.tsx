import { useState } from "react";
import classNames from "classnames";
import attrs from "@/utils/attrs";
import { OpenNewIcon } from "@wisdesign/lsicon";
import type { MouseEvent } from "react";

import type { ExternalLinkProps } from "../link";
import { isFullLink } from "../link";

import styles from "./Link.module.scss";

/**
 * @package link
 * @name Link
 */
function ExternalLink({
  className,
  inverse,
  disabled,
  text,
  href,
  redirect,
  onClick = () => {},
  ...rest
}: ExternalLinkProps) {
  const [visited, setVisited] = useState(false);

  const isExternal = isFullLink(href);
  const variant = isExternal ? "external" : "basic";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (disabled) {
      return;
    }

    onClick(event);

    if (isExternal) {
      setVisited(true);
      return;
    }
  }

  return (
    <a
      {...rest}
      className={classNames(styles.link, {
        [className as string]: !!className,
      })}
      data-variant={variant}
      aria-disabled={disabled}
      {...attrs({
        "data-status": visited ? "visited" : "none",
        "data-disabled": disabled,
        "data-style": inverse ? "inverse" : "none",
      })}
      target={isExternal ? "_blank" : undefined}
      href={!disabled && isExternal ? href : undefined}
      // @ts-ignore
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
      {isExternal && <OpenNewIcon />}
    </a>
  );
}

ExternalLink.displayName = "Link";

export default ExternalLink;
