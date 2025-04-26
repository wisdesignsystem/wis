import { useState } from "react";

interface Option<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}

export default function useValue<T>({
  value,
  defaultValue,
}: Option<T>): [undefined | T, (value: T) => void] {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  function setValue(value: T) {
    setCurrentValue(value);
  }

  return [value === undefined ? currentValue : value, setValue];
}
