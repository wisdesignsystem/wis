import { Children, isValidElement } from "react";

import Item from "./Item";
import type { ContextMenuCheckboxGroupProps } from "./contextMenu";
import useContextValue from "./useContextValue";

interface CheckboxGroupProps extends ContextMenuCheckboxGroupProps {
	mapper: (displayName: string) => string | undefined;
}

function CheckboxGroup({
	mapper,
	name,
	value,
	defaultValue,
	children,
	onChange = () => {},
}: CheckboxGroupProps) {
	const [currentValue, onValueChange] = useContextValue({
		name,
		value,
		defaultValue,
	});

	return (
		<>
			{Children.map(children, (child) => {
				if (!isValidElement(child)) {
					return null;
				}

				const isChecked = currentValue?.includes(child.props.value);
				// @ts-ignore
				const displayName = mapper(child.type.displayName);
				if (displayName === "Item") {
					return null;
				}

				return (
					<Item
						{...child.props}
						mapper={mapper}
						role="menuitemcheckbox"
						checked={isChecked}
						onCheckedChange={(checked: boolean) => {
							let nextValue: string[] = [];
							if (Array.isArray(currentValue)) {
								nextValue = currentValue.slice();
							}

							if (checked) {
								nextValue.push(child.props.value);
							} else {
								nextValue = nextValue.filter(
									(v: string) => v !== child.props.value,
								);
							}

							onValueChange(nextValue);
							onChange(nextValue);
						}}
					/>
				);
			})}
		</>
	);
}

export default CheckboxGroup;
