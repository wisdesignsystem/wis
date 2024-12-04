import { matchElement } from "remote:self/core";
import * as RDXCollapsible from "@radix-ui/react-collapsible";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Box.module.scss";

function Collapsible({
	className,
	defaultCollapsed = true,
	collapsed,
	children,
	onCollapsed,
	...rest
}) {
	const {
		BoxHeader: header,
		BoxPanel: panel,
		BoxFooter: footer,
	} = matchElement(children, [
		{ type: "BoxHeader", maxCount: 1 },
		{ type: "BoxPanel", maxCount: 1 },
		{ type: "BoxFooter", maxCount: 1 },
	]);

	return (
		<RDXCollapsible.Root
			{...rest}
			className={classNames(styles.box, { [className]: !!className })}
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

Collapsible.displayName = "BoxCollapsible";
Collapsible.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * Default collapsed state of the box.
	 *
	 * @type {boolean}
	 *
	 * @default true
	 */
	defaultCollapsed: PropTypes.bool,

	/**
	 * Current collapsed state of the box.
	 *
	 * @type {boolean}
	 */
	collapsed: PropTypes.bool,

	/**
	 * @hidden
	 */
	children: PropTypes.node,

	/**
	 * Callback function when the box is collapsed
	 *
	 * @type {function}
	 *
	 * @example
	 *
	 * function handleCollapsed(collapsed) {}
	 *
	 * <Box onCollapsed={handleCollapsed}></Box>
	 */
	onCollapsed: PropTypes.func,
};

export default Collapsible;
