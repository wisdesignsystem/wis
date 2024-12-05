import { useEffect, useRef, useState } from "react";

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = ["gray", "blue", "purple", "orange", "red", "green"];

function createColor(color: string) {
	if (color !== "auto") {
		return color;
	}

	const index = random(0, colors.length - 1);
	return colors[index];
}

function createUniqueColor(excludeColor: string) {
	let color: string;
	while (true) {
		const index = random(0, colors.length - 1);
		color = colors[index];

		if (color !== excludeColor) {
			break;
		}
	}

	return color;
}

export function useColor(color: string) {
	const [currentColor, setCurrentColor] = useState(createColor(color));

	useEffect(() => {
		setCurrentColor(createColor(color));
	}, [color]);

	return currentColor;
}

export function useGroupColor(color: string) {
	const groupColors = useRef<string[]>([]);

	function getColor(index: number) {
		if (color !== "auto") {
			return color;
		}

		if (groupColors.current[index]) {
			return groupColors.current[index];
		}

		const currentColor = createUniqueColor(groupColors.current[index - 1]);
		groupColors.current[index] = currentColor;

		return currentColor;
	}

	return getColor;
}
