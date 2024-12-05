import { isUndefined } from "@/utils/is";
import { useContext, useEffect } from "react";

import Context from "./Context";

type Value = string | string[] | undefined;

export default function useContextValue({
	name,
	value,
	defaultValue,
}: {
	name: string;
	value: Value;
	defaultValue: Value;
}): [Value, (value: Value) => void] {
	const { contextValue, setContextValue } = useContext(Context);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isUndefined(name)) {
			return;
		}

		if (!contextValue[name]) {
			setContextValue({
				...contextValue,
				[name]: defaultValue,
			});
		}
	}, [name, defaultValue]);

	function onValueChange(value: Value) {
		if (isUndefined(name)) {
			return;
		}

		setContextValue({
			...contextValue,
			[name]: value,
		});
	}

	const currentValue = isUndefined(name) ? undefined : contextValue[name];

	return [value || currentValue, onValueChange];
}
