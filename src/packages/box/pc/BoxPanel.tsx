import * as RDXCollapsible from "@radix-ui/react-collapsible";
import classNames from "classnames";

import type { BoxPanelProps } from "../box";

import styles from "./Box.module.scss";

function BoxPanel({ className, children, ...rest }: BoxPanelProps) {
	return (
		<RDXCollapsible.Content
			{...rest}
			className={classNames(styles.content, {
				[className as string]: !!className,
			})}
		>
			{children}
		</RDXCollapsible.Content>
	);
}

BoxPanel.displayName = "BoxPanel";

export default BoxPanel;
