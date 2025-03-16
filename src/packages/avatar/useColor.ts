import { useEffect, useRef, useState } from "react";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type Color = "auto" | "gray" | "blue" | "purple" | "orange" | "red" | "green";
const colors: Color[] = ["gray", "blue", "purple", "orange", "red", "green"];

function createColor(color: Color): Color {
  if (color !== "auto") {
    return color;
  }

  const index = random(0, colors.length - 1);
  return colors[index];
}

function createUniqueColor(excludeColor: Color) {
  let color: Color;
  while (true) {
    const index = random(0, colors.length - 1);
    color = colors[index];

    if (color !== excludeColor) {
      break;
    }
  }

  return color;
}

export function useColor(color: Color) {
  const [currentColor, setCurrentColor] = useState(createColor(color));

  useEffect(() => {
    setCurrentColor(createColor(color));
  }, [color]);

  return currentColor;
}

export function useGroupColor(color: Color) {
  const groupColors = useRef<Color[]>([]);

  function getColor(index: number): Color {
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
