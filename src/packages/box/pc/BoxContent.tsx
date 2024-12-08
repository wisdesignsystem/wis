import classNames from "classnames";

import type { BoxContentProps } from "../box";

import styles from "./Box.module.scss";

function BoxContent({ className, children, ...rest }: BoxContentProps) {
	return (
		<div
			{...rest}
			className={classNames(styles.content, {
				[className as string]: !!className,
			})}
		>
			{children}
		</div>
	);
}

BoxContent.displayName = "BoxContent";

export default BoxContent;
