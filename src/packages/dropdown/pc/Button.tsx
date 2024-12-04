import { matchElement } from "remote:self/core";
import { Context, Shortcut } from "@/packages/contextMenu";
import * as RDXDropdownMenu from "@radix-ui/react-dropdown-menu";
import PropTypes from "prop-types";
import { useState } from "react";

import mapper from "../mapper";
import ButtonTrigger from "./ButtonTrigger";

import styles from "./Dropdown.module.scss";

function Button({ defaultOpen, open, onOpen, children, ...rest }) {
	const [contextValue, setContextValue] = useState({});
	const { matched } = matchElement(children, ["DropdownItem", "DropdownGroup"]);

	return (
		<Context.Provider
			value={{ contextValue, setContextValue, contextType: "DropdownButton" }}
		>
			<RDXDropdownMenu.Root
				defaultOpen={defaultOpen}
				open={open}
				onOpenChange={onOpen}
			>
				<Shortcut mapper={mapper}>{matched}</Shortcut>
				<RDXDropdownMenu.Trigger disabled={rest.disabled} asChild>
					<ButtonTrigger {...rest} />
				</RDXDropdownMenu.Trigger>
				<RDXDropdownMenu.Portal>
					<RDXDropdownMenu.Content
						className={styles.popper}
						loop
						align="end"
						sideOffset={8}
					>
						{matched}
					</RDXDropdownMenu.Content>
				</RDXDropdownMenu.Portal>
			</RDXDropdownMenu.Root>
		</Context.Provider>
	);
}

Button.displayName = "DropdownButton";
Button.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * set the Dropdown open\close
	 *
	 * @type {boolean}
	 */
	open: PropTypes.bool,

	/**
	 * set the Dropdown default open\close
	 *
	 * @type {boolean}
	 */
	defaultOpen: PropTypes.bool,

	/**
	 * Variant of the Dropdown.Button.
	 *
	 * @type {primary|classic|secondary}
	 * @default secondary
	 */
	variant: PropTypes.oneOf(["primary", "classic", "secondary"]),

	/**
	 * Indicates if the Dropdown.Button is disabled.
	 *
	 * @type {boolean}
	 * @default false
	 */
	disabled: PropTypes.bool,

	/**
	 * Indicates if the Dropdown.Button is in a loading state.
	 *
	 * @type {boolean}
	 * @default false
	 */
	loading: PropTypes.bool,

	/**
	 * Text to be displayed on the Dropdown.Button.
	 *
	 * @type {string}
	 */
	text: PropTypes.string,

	/**
	 * Icon element to be displayed on the Dropdown.Button.
	 *
	 * @type {React.Element}
	 */
	icon: PropTypes.element,

	/**
	 * Position of the icon relative to the text.
	 *
	 * @type {prefix|suffix}
	 * @default prefix
	 */
	iconControl: PropTypes.oneOf(["prefix", "suffix"]),

	/**
	 * Tooltip text for the Dropdown.Button.
	 *
	 * @type {string}
	 */
	tooltip: PropTypes.string,

	/**
	 * Size of the Dropdown.Button.
	 *
	 * @type {sm|xs|md}
	 * @default md
	 */
	size: PropTypes.oneOf(["sm", "xs", "md"]),

	/**
	 * Shortcut key for the Dropdown.Button.
	 *
	 * @type {string}
	 *
	 * @example
	 * control + s
	 */
	shortcutKey: PropTypes.string,

	/**
	 * Callback function when the Dropdown open state change.
	 *
	 * @type {function}
	 *
	 * @example
	 *
	 * function handleOpen(open) {
	 *  console.log('Dropdown open', open)
	 * }
	 *
	 * <Dropdown onOpen={handleOpen}></Dropdown>
	 */
	onOpen: PropTypes.func,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Button;
