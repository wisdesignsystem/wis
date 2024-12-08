import { matchElement } from "remote:self/core";
import classNames from "classnames";

import type { TopProps } from "../layout";
import Layout from "./Layout";

import styles from "./Layout.module.scss";

function Top({ className, children, ...rest }: TopProps) {
	const { unmatched } = matchElement(
		children,
		[{ type: "Actions", maxCount: 0 }],
		false,
	);

	return (
		<Layout
			{...rest}
			className={classNames(styles.top, { [className as string]: !!className })}
		>
			{unmatched}
		</Layout>
	);
}

Top.displayName = "Top";

export default Top;
