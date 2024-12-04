import { matchElement } from "remote:self/core";
import { useContextMenuValue } from "@/packages/contextMenu";
import * as RDXDropdownMenu from "@radix-ui/react-dropdown-menu";
import PropTypes from "prop-types";
import { Children, cloneElement } from "react";

import styles from "./Dropdown.module.scss";

function CheckboxGroup({
	name,
	label,
	value,
	defaultValue,
	onChange = () => {},
	children,
}) {
	const { matched } = matchElement(children, ["DropdownItem"]);
	const [currentValue, onValueChange] = useContextMenuValue({
		name,
		value,
		defaultValue,
	});

	return (
		<>
			<RDXDropdownMenu.Separator className={styles.separator} />
			{label && (
				<RDXDropdownMenu.Label className={styles.label}>
					{label}
				</RDXDropdownMenu.Label>
			)}
			{Children.map(matched, (child) => {
				const isChecked = currentValue?.includes(child.props.value);

				return cloneElement(child, {
					role: "menuitemcheckbox",
					checked: isChecked,
					onCheckedChange: (checked) => {
						let nextValue = currentValue?.slice() || [];
						if (checked) {
							nextValue.push(child.props.value);
						} else {
							nextValue = nextValue.filter((v) => v !== child.props.value);
						}

						onValueChange(nextValue);
						onChange(nextValue);
					},
				});
			})}
		</>
	);
}

CheckboxGroup.displayName = "DropdownCheckboxGroup";
CheckboxGroup.propTypes = {
	/**
	 * The name for the ContextMenu.CheckboxGroup.
	 *
	 * @type {string}
	 */
	name: PropTypes.string.isRequired,

	/**
	 * The label for the ContextMenu.CheckboxGroup.
	 *
	 * @type {string}
	 */
	label: PropTypes.string,

	value: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),

	defaultValue: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),

	/**
	 * Callback function to handle changes in the ContextMenu.CheckboxGroup.
	 *
	 * @type {function}
	 *
	 * @example
	 *
	 * function handleChange(value) {
	 *
	 * }
	 *
	 * <ContextMenu>
	 *  <ContextMenu.CheckboxGroup name="group" label="Group Title" onChange={handleChange}>
	 *    <ContextMenu.Item value="a"></ContextMenu.Item>
	 *  </ContextMenu.CheckboxGroup>
	 * </ContextMenu>
	 */
	onChange: PropTypes.func,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default CheckboxGroup;
