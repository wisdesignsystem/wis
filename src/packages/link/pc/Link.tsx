import type { MouseEvent } from "react";
import { useNavigate, useRedirect } from "wiscore/router";

import ExternalLink from "./ExternalLink";
import type { LinkProps } from "../link";
import { isFullLink } from "../link";

function Link({ href, redirect, onClick = () => {}, ...rest }: LinkProps) {
  const navigateTo = useNavigate();
  const redirectTo = useRedirect();

  const isExternal = isFullLink(href);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
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

  return <ExternalLink {...rest} href={href} onClick={handleClick} />;
}

Link.displayName = "Link";

export default Link;
