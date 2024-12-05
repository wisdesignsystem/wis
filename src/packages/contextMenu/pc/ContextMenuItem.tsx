import { matchElement } from "remote:self/core";
import { Shortcut, createShortcutMeta } from "remote:self/shortcut";
import attrs from "@/utils/attrs";
import * as RDXContextMenu from "@radix-ui/react-context-menu";
import { CheckIcon, RightIcon } from "@wisdesign/lsicon";
import classNames from "classnames";

import type { ContextMenuItemProps } from "../contextMenu";

import styles from "./ContextMenu.module.scss";

function Item({
	role,
	disabled,
	label,
	icon,
	value,
	shortcutKey,
	status,
	checked,
	onClick = () => {},
	onCheckedChange = () => {},
	children,
}: ContextMenuItemProps) {
	const {
		matched,
		elements: {
			ContextMenuCheckboxGroup: contextMenuCheckboxGroups,
			ContextMenuRadioGroup: contextMenuRadioGroups,
		},
	} = matchElement(children, [
		"ContextMenuItem",
		"ContextMenuGroup",
		"ContextMenuCheckboxGroup",
		"ContextMenuRadioGroup",
	]);

	const isSupportSubmenu = matched.length > 0;
	const shortcut = createShortcutMeta(shortcutKey);

	function renderShortcut() {
		return (
			<Shortcut
				shortcutKey={shortcutKey}
				disabled={disabled}
				readonly
				size="md"
				variant="ghost"
			/>
		);
	}

	function renderItem() {
		return (
			<div className={styles.title}>
				<div className={styles.left}>
					{icon}
					<span>{label}</span>
				</div>
				<div className={styles.right}>
					{isSupportSubmenu ? <RightIcon /> : renderShortcut()}
				</div>
			</div>
		);
	}

	if (role === "menuitemcheckbox") {
		return (
			<RDXContextMenu.CheckboxItem
				className={styles.item}
				checked={checked}
				disabled={disabled}
				textValue={label}
				aria-keyshortcuts={shortcut.shortcutKey}
				onCheckedChange={onCheckedChange}
			>
				<RDXContextMenu.ItemIndicator
					className={styles.checked}
					{...attrs({ "data-disabled": disabled })}
				>
					<CheckIcon />
				</RDXContextMenu.ItemIndicator>
				{renderItem()}
			</RDXContextMenu.CheckboxItem>
		);
	}

	if (role === "menuitemradio") {
		return (
			<RDXContextMenu.RadioItem
				className={styles.item}
				aria-keyshortcuts={shortcut.shortcutKey}
				disabled={disabled}
				value={value}
				textValue={label}
			>
				<RDXContextMenu.ItemIndicator
					className={styles.checked}
					{...attrs({ "data-disabled": disabled })}
				>
					<CheckIcon />
				</RDXContextMenu.ItemIndicator>
				{renderItem()}
			</RDXContextMenu.RadioItem>
		);
	}

	if (isSupportSubmenu) {
		const hasCheckedItem =
			!!contextMenuCheckboxGroups?.length || !!contextMenuRadioGroups?.length;

		return (
			<RDXContextMenu.Sub>
				<RDXContextMenu.SubTrigger className={styles.item} disabled={disabled}>
					{renderItem()}
				</RDXContextMenu.SubTrigger>
				<RDXContextMenu.Portal>
					<RDXContextMenu.SubContent
						className={classNames(styles.popper, {
							[styles["with-checked"]]: hasCheckedItem,
						})}
						loop
					>
						{matched}
					</RDXContextMenu.SubContent>
				</RDXContextMenu.Portal>
			</RDXContextMenu.Sub>
		);
	}

	return (
		<RDXContextMenu.Item
			className={styles.item}
			disabled={disabled}
			textValue={label}
			aria-keyshortcuts={shortcut.shortcutKey}
			onSelect={(event) => {
				onClick(event);
			}}
			{...attrs({
				"data-status": status,
			})}
		>
			{renderItem()}
		</RDXContextMenu.Item>
	);
}

Item.displayName = "ContextMenuItem";

export default Item;
