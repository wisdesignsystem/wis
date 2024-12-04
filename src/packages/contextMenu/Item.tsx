import { useGlobalShortcut } from "remote:self/core";
import PropTypes from "prop-types";
import { Children } from "react";

import Shortcut from "./Shortcut";

function Item({
	mapper,
	disabled,
	role,
	checked,
	shortcutKey,
	onSelect = () => {},
	onCheckedChange = () => {},
	children,
}) {
	const matched = [];
	Children.toArray(children).some((element) => {
		const type = mapper(element?.type?.displayName);
		const isMatched = [
			"ContextMenuItem",
			"ContextMenuGroup",
			"ContextMenuCheckboxGroup",
			"ContextMenuRadioGroup",
		].includes(type);

		if (isMatched) {
			matched.push(element);
		}

		return isMatched;
	});

	const hasSubmenu = matched.length > 0;
	// eslint-disable-next-line no-unused-vars
	const [_, onGlobalShortcut] = useGlobalShortcut(
		hasSubmenu ? undefined : shortcutKey,
	);
	onGlobalShortcut(() => {
		if (disabled) {
			return;
		}

		if (role === "menuitemcheckbox") {
			onCheckedChange(!checked);
			return;
		}

		if (role === "menuitemradio") {
			onCheckedChange();
			return;
		}

		onSelect();
	});

	if (hasSubmenu) {
		return <Shortcut mapper={mapper}>{matched}</Shortcut>;
	}

	return null;
}

Item.propTypes = {
	mapper: PropTypes.func,

	role: PropTypes.oneOf(["menuitem", "menuitemcheckbox", "menuitemradio"]),

	checked: PropTypes.bool,

	disabled: PropTypes.bool,

	shortcutKey: PropTypes.string,

	children: PropTypes.node,

	onSelect: PropTypes.func,

	onCheckedChange: PropTypes.func,
};

export default Item;
