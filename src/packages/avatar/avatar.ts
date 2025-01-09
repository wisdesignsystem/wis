import type { HTMLAttributes, ReactNode } from "react";

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Displays the avatar icon. This property is ignored if an avatar image URL is provided.
   */
  icon?: ReactNode;

  /**
   * Displays the avatar image.
   */
  src?: string;

  /**
   * The size of the avatar.
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * Controls the display color of the avatar. auto color is not completely random, but randomly generated from a list of colors.
   */
  color?: "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";

  /**
   * Controls the display color schema of the avatar.
   */
  colorSchema?: "dark" | "light" | "outline";

  /**
   * The shape of the avatar to apply.
   */
  shape?: "circle" | "square";

  /**
   * The name will only be displayed if there is no image or icon.
   */
  name: string;

  /**
   * When the initials automatically generated from the name do not meet the requirements, you can pass in custom display text through this property.
   */
  initials?: string;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatars in avatar group.
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * Controls the display color of the avatar. auto color is not completely random, but randomly generated from a list of colors.
   */
  color?: "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";

  /**
   * Controls the display color schema of the avatar.
   */
  colorSchema?: "dark" | "light" | "outline";

  /**
   * The shape of the avatar to apply.
   */
  shape?: "circle" | "square";
}
