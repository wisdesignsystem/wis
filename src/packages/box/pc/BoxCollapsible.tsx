import { matchElement } from "remote:self/core";
import * as RDXCollapsible from "@radix-ui/react-collapsible";
import classNames from "classnames";

import type { BoxCollapsibleProps } from "../box";

import styles from "./Box.module.scss";

function BoxCollapsible({
	className,
	defaultCollapsed = true,
	collapsed,
	children,
	onCollapsed,
	...rest
}: BoxCollapsibleProps) {
	const {
		elements: { BoxHeader: header, BoxPanel: panel, BoxFooter: footer },
	} = matchElement(children, [
		{ type: "BoxHeader", maxCount: 1 },
		{ type: "BoxPanel", maxCount: 1 },
		{ type: "BoxFooter", maxCount: 1 },
	]);

	return (
		<RDXCollapsible.Root
			{...rest}
			className={classNames(styles.box, { [className as string]: !!className })}
			defaultOpen={defaultCollapsed}
			open={collapsed}
			onOpenChange={onCollapsed}
		>
			{header}
			{panel}
			{footer}
		</RDXCollapsible.Root>
	);
}

BoxCollapsible.displayName = "BoxCollapsible";

export default BoxCollapsible;
