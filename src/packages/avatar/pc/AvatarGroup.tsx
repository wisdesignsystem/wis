import { matchElement } from "remote:self/core";
import attrs from "@/utils/attrs";
import classNames from "classnames";
import type { ReactElement } from "react";
import { cloneElement } from "react";

import type { AvatarGroupProps } from "../avatar";
import { useGroupColor } from "../useColor";
import useMaxCount from "../useMaxCount";
import Avatar from "./Avatar";

import styles from "./Avatar.module.scss";

function AvatarGroup({
  className,
  color = "auto",
  size = "md",
  colorSchema = "light",
  shape = "circle",
  children,
}: AvatarGroupProps) {
  const {
    elements: { Avatar: avatar },
  } = matchElement(children, ["Avatar"]);

  const { ref, max } = useMaxCount<HTMLDivElement>();
  const getColor = useGroupColor(color);

  function renderAvatar(element: ReactElement, index: number) {
    const groupColor = getColor(index);

    const isElementAutoColor =
      !element.props.color || element.props.color === "auto";

    return cloneElement(element, {
      className: classNames(styles.item, {
        [element.props.className]: !!element.props.className,
      }),
      colorSchema,
      shape,
      size,
      // When the sub avatar color is in the automatic mode
      // The colors are uniformly allocated by the avatar group to ensure that adjacent ones do not repeat.
      color: isElementAutoColor ? groupColor : element.props.color,
    });
  }

  function renderAvatars(elements: ReactElement[]) {
    if (max === 0 || max >= elements.length || max === -1) {
      return elements.map(renderAvatar);
    }

    const name = `+${Math.min(99, elements.length - (max - 1))}`;

    return (
      <>
        {elements.slice(0, max - 1).map(renderAvatar)}
        <Avatar
          className={styles.item}
          colorSchema={colorSchema}
          size={size}
          shape={shape}
          color="gray"
          name={name}
          initials={name}
        />
      </>
    );
  }

  return (
    <div
      ref={ref}
      className={classNames(styles.group, {
        [className as string]: !!className,
      })}
      {...attrs({ "data-hidden": max === -1 })}
    >
      {renderAvatars(avatar)}
    </div>
  );
}

AvatarGroup.displayName = "AvatarGroup";

export default AvatarGroup;
