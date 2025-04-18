import classNames from "classnames";
import attrs from "@/utils/attrs";
import { OpenNewIcon } from "@wisdesign/lsicon";
import type { MouseEvent } from "react";
import { useNavigate, useRedirect } from "wiscore/router";

import type { LinkProps } from "../link";
import { isFullLink } from "../link";

import styles from "./Link.module.scss";

function Link({
  className,
  inverse,
  disabled,
  text,
  href,
  redirect,
  onClick = () => {},
  ...rest
}: LinkProps) {
  const navigateTo = useNavigate();
  const redirectTo = useRedirect();

  const isExternal = isFullLink(href);
  const variant = isExternal ? "external" : "basic";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (disabled) {
      return;
    }

    onClick(event);

    if (isExternal) {
      return;
    }

    if (redirect) {
      redirectTo(href);
    } else {
      navigateTo(href);
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

Link.displayName = "Link";

export default Link;
