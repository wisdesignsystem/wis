export default function shortcutMapper(displayName: string) {
  return {
    DropdownItem: "Item",
    DropdownGroup: "Group",
    DropdownCheckboxGroup: "CheckboxGroup",
    DropdownRadioGroup: "RadioGroup",
  }[displayName];
}
