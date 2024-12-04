import { matchElement } from "remote:self/core";
import * as RDXContextMenu from "@radix-ui/react-context-menu";
import PropTypes from "prop-types";
import { Children, useState } from "react";

import Context from "../Context";
import Shortcut from "../Shortcut";

import styles from "./ContextMenu.module.scss";

function ContextMenu({ children, disabled, ...rest }) {
	const [contextValue, setContextValue] = useState({});
	const {
		matched,
		unmatched,
		ContextMenuCheckboxGroup,
		ContextMenuRadioGroup,
	} = matchElement(
		children,
		[
			"ContextMenuItem",
			"ContextMenuGroup",
			"ContextMenuCheckboxGroup",
			"ContextMenuRadioGroup",
		],
		false,
	);
	const hasCheckedItem =
		!!ContextMenuCheckboxGroup?.length || !!ContextMenuRadioGroup?.length;

	return (
		<Context.Provider value={{ contextValue, setContextValue }}>
			<RDXContextMenu.Root>
				<Shortcut>{matched}</Shortcut>
				<RDXContextMenu.Trigger disabled={disabled}>
					{!!unmatched.length &&
						(unmatched.length > 1 ? Children.only(unmatched) : unmatched[0])}
				</RDXContextMenu.Trigger>
				<RDXContextMenu.Portal>
					<RDXContextMenu.Content
						className={styles.popper}
						data-variant={hasCheckedItem ? "checkbox" : "normal"}
						loop
						align="start"
						sideOffset={8}
						{...rest}
					>
						{matched}
					</RDXContextMenu.Content>
				</RDXContextMenu.Portal>
			</RDXContextMenu.Root>
		</Context.Provider>
	);
}

ContextMenu.displayName = "ContextMenu";
ContextMenu.getSymbiote = (children: React.ReactNode) => {
	const { unmatched } = matchElement(
		children,
		[
			"ContextMenuItem",
			"ContextMenuGroup",
			"ContextMenuCheckboxGroup",
			"ContextMenuRadioGroup",
		],
		false,
	);

	return unmatched[0];
};
ContextMenu.propTypes = {
	/**
	 * Indicates if the ContextMenu is disabled.
	 *
	 * @type {boolean}
	 * @default false
	 */
	disabled: PropTypes.bool,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default ContextMenu;
