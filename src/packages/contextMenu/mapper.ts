export default function shortcutMapper(displayName: string) {
	return {
		ContextMenuItem: "Item",
		ContextMenuGroup: "Group",
		ContextMenuCheckboxGroup: "CheckboxGroup",
		ContextMenuRadioGroup: "RadioGroup",
	}[displayName];
}
