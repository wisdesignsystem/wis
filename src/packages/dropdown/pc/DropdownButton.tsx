import { matchElement } from "remote:self/core";
import { Context, Shortcut } from "@/packages/contextMenu/export";
import * as RDXDropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import type { DropdownButtonProps } from "../dropdown";
import mapper from "../mapper";
import DropdownButtonTrigger from "./DropdownButtonTrigger";

import styles from "./Dropdown.module.scss";

function Button({
	defaultOpen,
	open,
	onOpen,
	children,
	...rest
}: DropdownButtonProps) {
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
					<DropdownButtonTrigger {...rest} />
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

export default Button;
