import { matchElement } from "remote:self/core";
import { isFunction } from "@/utils/is";
import * as RDXContextMenu from "@radix-ui/react-context-menu";
import PropTypes from "prop-types";
import { Children, cloneElement } from "react";

import styles from "./ContextMenu.module.scss";

function Group({ label, onSelect = () => {}, children }) {
	const { matched } = matchElement(children, ["ContextMenuItem"]);

	return (
		<>
			<RDXContextMenu.Separator className={styles.separator} />
			{label && (
				<RDXContextMenu.Label className={styles.label}>
					{label}
				</RDXContextMenu.Label>
			)}
			<RDXContextMenu.Group>
				{Children.map(matched, (child) => {
					return cloneElement(child, {
						role: "menuitem",
						onSelect: () => {
							if (isFunction(child.props.onSelect)) {
								child.props.onSelect();
							}

							onSelect(child.props.value);
						},
					});
				})}
			</RDXContextMenu.Group>
		</>
	);
}

Group.displayName = "ContextMenuGroup";
Group.propTypes = {
	/**
	 * The label for the ContextMenu.Group.
	 * @type {string}
	 */
	label: PropTypes.string,

	/**
	 * @hidden
	 */
	children: PropTypes.node,

	/**
	 * Callback function to handle click events, when the Dropdown.Item wrapped by ContextMenu.Group is clicked, it triggers.
	 *
	 * @type {function}
	 *
	 * @example
	 *
	 * function handleClick(value) {
	 *
	 * }
	 *
	 * <ContextMenu>
	 *  <ContextMenu.Group label="Group Title" onClick={handleClick}>
	 *    <ContextMenu.Item value="a"></ContextMenu.Item>
	 *  </ContextMenu.Group>
	 * </ContextMenu>
	 */
	onSelect: PropTypes.func,
};

export default Group;
