import { useState, useRef, useEffect } from 'react'

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const colors = ['gray', 'blue', 'purple', 'orange', 'red', 'green']

function createColor(color) {
  if (color !== 'auto') {
    return color
  }

  const index = random(0, colors.length - 1)
  return colors[index]
}

function createUniqueColor(excludeColor) {
  let color
  while (true) {
    const index = random(0, colors.length - 1)
    color = colors[index]

    if (color !== excludeColor) {
      break
    }
  }

  return color
}

export function useColor(color) {
  const [currentColor, setCurrentColor] = useState(createColor(color))

  useEffect(() => {
    setCurrentColor(createColor(color))
  }, [color])

  return currentColor
}

export function useGroupColor(color) {
  const groupColors = useRef([])

  function getColor(index) {
    if (color !== 'auto') {
      return color
    }

    if (groupColors.current[index]) {
      return groupColors.current[index]
    }

    const currentColor = createUniqueColor(groupColors.current[index - 1])
    groupColors.current[index] = currentColor

    return currentColor
  }

  return getColor
}
