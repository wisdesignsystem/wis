import attrs from "@/utils/attrs";
import * as RDXAvatar from "@radix-ui/react-avatar";
import classNames from "classnames";

import getInitials from "../initials";
import { useColor } from "../useColor";
import type { AvatarProps } from "../type";

import styles from "./Avatar.module.scss";

function Avatar({
	className,
	icon,
	src,
	size = "md",
	color = "auto",
	colorSchema = "light",
	shape = "circle",
	name,
	initials,
	...rest
}: AvatarProps) {
	const fallback = getInitials({ name, initials });

	const isShowImage = !!src;
	const isShowIcon = !!icon;

	const currentColor = useColor(color);

	return (
		<RDXAvatar.Root asChild>
			<div
				{...rest}
				className={classNames(styles.avatar, { [className as string]: !!className })}
				data-size={size}
				data-color={currentColor}
				data-color-schema={colorSchema}
				data-shape={shape}
				{...attrs({
					"data-image": !!src,
					"aria-label": isShowImage ? undefined : name,
				})}
			>
				{isShowImage && (
					<RDXAvatar.Image className={styles.image} src={src} alt={name} />
				)}
				<RDXAvatar.Fallback
					className={styles.fallback}
					delayMs={isShowImage ? 500 : undefined}
					asChild
				>
					{isShowIcon ? icon : <span>{fallback}</span>}
				</RDXAvatar.Fallback>
			</div>
		</RDXAvatar.Root>
	);
}

Avatar.displayName = "Avatar";

export default Avatar;
