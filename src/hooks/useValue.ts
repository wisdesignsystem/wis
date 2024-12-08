import { useState } from "react";

export default function useValue<T>({
	value,
	defaultValue,
}: { value?: T; defaultValue?: T }) {
	const [currentValue, setCurrentValue] = useState(defaultValue);

	function onValueChange(value: T) {
		setCurrentValue(value);
	}

	return [value || currentValue, onValueChange];
}
