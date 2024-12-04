export default function shortcutMapper(componentDisplayName) {
	return {
		DropdownItem: "ContextMenuItem",
		DropdownGroup: "ContextMenuGroup",
		DropdownCheckboxGroup: "ContextMenuCheckboxGroup",
		DropdownRadioGroup: "ContextMenuRadioGroup",
	}[componentDisplayName];
}
