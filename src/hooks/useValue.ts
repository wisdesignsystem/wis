import { useState } from "react";

interface Option<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value?: T) => void;
}

export default function useValue<T>({
  value,
  defaultValue,
  onChange,
}: Option<T>): [undefined | T, (value?: T, emitChange?: boolean) => void] {
  const [currentValue, setCurrentValue] = useState<T | undefined>(defaultValue);

  function setValue(value?: T, emitChange?: boolean) {
    setCurrentValue(value);

    if (emitChange) {
      onChange?.(value);
    }
  }

  return [value === undefined ? currentValue : value, setValue];
}
