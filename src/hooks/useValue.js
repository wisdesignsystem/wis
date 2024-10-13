import { useState } from 'react'

export default function useValue({ value, defaultValue }) {
  const [currentValue, setCurrentValue] = useState(defaultValue)

  function onValueChange(value) {
    setCurrentValue(value)
  }

  return [value || currentValue, onValueChange]
}
