import { Children, isValidElement } from "react";

import Item from "./Item";
import type { ContextMenuRadioGroupProps } from "./contextMenu";
import useContextValue from "./useContextValue";

interface RadioGroupProps extends ContextMenuRadioGroupProps {
	mapper: (displayName: string) => string | undefined;
}

function RadioGroup({
	mapper,
	name,
	value,
	defaultValue,
	children,
	onChange = () => {},
}: RadioGroupProps) {
	const [_, onValueChange] = useContextValue({ name, value, defaultValue });

	return (
		<>
			{Children.map(children, (child) => {
				if (!isValidElement(child)) {
					return null;
				}

				// @ts-ignore
				const displayName = mapper(child.type.displayName);
				if (displayName !== "Item") {
					return null;
				}

				return (
					<Item
						{...child.props}
						mapper={mapper}
						role="menuitemradio"
						onCheck={() => {
							onChange(child.props.value);
							onValueChange(child.props.value);
						}}
					/>
				);
			})}
		</>
	);
}

export default RadioGroup;
